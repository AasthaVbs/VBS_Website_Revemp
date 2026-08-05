import { SIXTY_MINUTES_IMAGE_UPLOAD_URL } from "@/constants/sixty-minutes-team-data";

/**
 * POST /api/upload — multipart/form-data, field name: image
 * Success (201): { url, key, contentType, size }
 */
export async function uploadProjectImage(file: File) {
  if (!file) {
    throw new Error("No image file to upload.");
  }

  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(SIXTY_MINUTES_IMAGE_UPLOAD_URL, {
    method: "POST",
    body: formData,
  });

  let payload: { url?: string; error?: string; message?: string } = {};
  try {
    payload = await response.json();
  } catch {
    payload = {};
  }

  const uploadedUrl = String(payload.url ?? "").trim();

  if (response.status !== 201 || !uploadedUrl) {
    throw new Error(
      payload.error || payload.message || "Could not upload project image. Please try again.",
    );
  }

  return uploadedUrl;
}

export async function dataUrlToFile(
  dataUrl: string,
  filename = "project-photo.jpg",
  mimeType = "image/jpeg",
) {
  const response = await fetch(dataUrl);
  const blob = await response.blob();
  return new File([blob], filename, { type: mimeType || blob.type || "image/jpeg" });
}
