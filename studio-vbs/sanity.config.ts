import { defineConfig, definePlugin } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
// import { table } from '@sanity/table';
import { codeInput } from '@sanity/code-input'
import { syncRedirectsTool } from './tools/SyncRedirectsTool'

const resolveProductionUrl = (doc: any) => {
  // 1. Define your live and local URLs
  // const liveUrl = 'https://www.scantobim.online';
  const liveUrl =
    process.env.SANITY_STUDIO_SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://www.virtualbuildingstudio.com';
  const localUrl = 'http://localhost:3000';

  // 2. Check if the studio is running on localhost
  const isLocal = typeof window !== 'undefined' && window.location.hostname === 'localhost';

  // 3. Set the base URL accordingly
  const baseUrl = isLocal ? localUrl : liveUrl;

  const previewUrl = new URL(`${baseUrl}/preview`)
  const secret = process.env.SANITY_STUDIO_PREVIEW_SECRET || process.env.GATSBY_SANITY_PREVIEW_SECRET;

  if (!secret) {
    throw new Error('Missing preview secret. Check your .env.development file.');
  }

  previewUrl.searchParams.set('secret', secret);
  previewUrl.searchParams.set('id', doc._id); // We'll use the document ID to fetch the draft
  if (doc?.slug?.current) {
    previewUrl.searchParams.set('slug', doc.slug.current);
  }

  return previewUrl.toString();
};


export default defineConfig({
  name: 'default',
  title: 'VBS',

  projectId: 'rog08jar',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    codeInput(),
    definePlugin({
      name: 'sync-redirects',
      tools: [syncRedirectsTool],
    })(),
  ],

  schema: {
    types: schemaTypes,
  },
  document: {
    // This is for the "Open Preview" button
    productionUrl: async (prev, context) => {
      // context contains the client and the document
      return resolveProductionUrl(context.document)
    },
  },
})
