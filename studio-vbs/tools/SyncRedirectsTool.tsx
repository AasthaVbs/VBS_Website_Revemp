import {useCallback, useState} from "react"
import type {SanityClient} from "@sanity/client"
import {useClient} from "sanity"
import {ArrowTopRightIcon} from "@sanity/icons"
import {Box, Button, Card, Code, Flex, Stack, Text} from "@sanity/ui"
import redirectRules from "../../src/data/redirects.json"

type RedirectPatch = {oldUrl: string; newUrl: string}

function normalizePath(url: string) {
  if (!url || typeof url !== "string") return "/"
  let value = url.trim()
  if (!value.startsWith("/")) value = `/${value}`
  if (value !== "/" && !value.endsWith("/")) value = `${value}/`
  return value
}

async function fetchExistingRedirects(client: SanityClient, oldUrls: string[]) {
  const existing: Array<{_id: string; oldUrl: string; newUrl: string; name?: string}> = []
  const chunkSize = 100
  for (let i = 0; i < oldUrls.length; i += chunkSize) {
    const chunk = oldUrls.slice(i, i + chunkSize)
    const docs = (await client.fetch(
      `*[_type == "redirect" && oldUrl in $oldUrls]{_id, oldUrl, newUrl, name}`,
      {oldUrls: chunk},
    )) as Array<{_id: string; oldUrl: string; newUrl: string; name?: string}>
    existing.push(...docs)
  }
  return existing
}

function dedupeRedirects(redirects: RedirectPatch[]) {
  const byOldUrl = new Map<string, RedirectPatch>()
  redirects.forEach((entry) => {
    if (!entry?.oldUrl || entry.newUrl == null) return
    byOldUrl.set(normalizePath(entry.oldUrl), entry)
  })
  return Array.from(byOldUrl.values())
}

async function syncRedirects(client: SanityClient, redirects: RedirectPatch[]) {
  const normalized = dedupeRedirects(redirects).map((entry) => ({
    oldUrl: normalizePath(entry.oldUrl),
    newUrl: normalizePath(entry.newUrl),
  }))
  const oldUrls = normalized.map((entry) => entry.oldUrl)
  const existing = await fetchExistingRedirects(client, oldUrls)

  const byOldUrl = new Map(existing.map((doc) => [normalizePath(doc.oldUrl), doc]))
  const lines: string[] = []
  let created = 0
  let updated = 0
  let unchanged = 0

  for (const entry of normalized) {
    const current = byOldUrl.get(entry.oldUrl)
    if (current) {
      if (normalizePath(current.newUrl) === entry.newUrl) {
        lines.push(`OK  ${entry.oldUrl} -> ${entry.newUrl}`)
        unchanged += 1
        continue
      }
      await client
        .patch(current._id)
        .set({newUrl: entry.newUrl, name: current.name || `Redirect: ${entry.oldUrl}`})
        .commit()
      lines.push(`UPD ${entry.oldUrl} -> ${entry.newUrl}`)
      updated += 1
      continue
    }
    await client.create({
      _type: "redirect",
      oldUrl: entry.oldUrl,
      newUrl: entry.newUrl,
      name: `Redirect: ${entry.oldUrl}`,
    })
    lines.push(`ADD ${entry.oldUrl} -> ${entry.newUrl}`)
    created += 1
  }

  return {created, updated, unchanged, lines}
}

export function SyncRedirectsTool() {
  const client = useClient({apiVersion: "2023-05-03"})
  const [status, setStatus] = useState<"idle" | "running" | "done" | "error">("idle")
  const [message, setMessage] = useState("")
  const [log, setLog] = useState("")

  const handleSync = useCallback(async () => {
    setStatus("running")
    setMessage("")
    setLog("")
    try {
      const result = await syncRedirects(client, redirectRules as RedirectPatch[])
      setLog(result.lines.join("\n"))
      setMessage(`${result.created} created, ${result.updated} updated, ${result.unchanged} already correct.`)
      setStatus("done")
    } catch (error) {
      setMessage(error instanceof Error ? error.message : String(error))
      setStatus("error")
    }
  }, [client])

  return (
    <Box padding={4} sizing="border">
      <Stack space={4}>
        <Card padding={4} radius={2} shadow={1}>
          <Stack space={4}>
            <Text size={2} weight="semibold">
              Sync redirects to Sanity
            </Text>
            <Text muted size={1}>
              Uses your Studio login. Source: <Code>src/data/redirects.json</Code> (
              {redirectRules.length} entries).
            </Text>
            <Flex>
              <Button
                text={status === "running" ? "Syncing..." : "Sync redirects now"}
                tone="primary"
                disabled={status === "running"}
                onClick={handleSync}
              />
            </Flex>
            {message ? (
              <Text size={1} style={{color: status === "error" ? "#c3362b" : "#1f7a3f"}}>
                {message}
              </Text>
            ) : null}
          </Stack>
        </Card>
        {log ? (
          <Card padding={4} radius={2} shadow={1}>
            <Box style={{maxHeight: "60vh", overflow: "auto", whiteSpace: "pre-wrap", fontFamily: "monospace", fontSize: 12}}>
              {log}
            </Box>
          </Card>
        ) : null}
      </Stack>
    </Box>
  )
}

export const syncRedirectsTool = {
  name: "sync-redirects",
  title: "Sync Redirects",
  icon: ArrowTopRightIcon,
  component: SyncRedirectsTool,
}
