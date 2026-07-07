/** GROQ fragments shared by listing, detail, and preview routes. */

export const SANITY_POST_BODY_PROJECTION = `"_rawBody": body[]{
  ...,
  _type == "image" => { "asset": asset-> },
  _type == "rawHtml" => { code },
  _type == "downloadBlock" => {
    buttonText,
    downloadUrl,
    modalHeading,
    storageKey,
    fileUpload { asset-> }
  },
  _type == "table" => {
    className,
    columnWidths,
    rows[]{ _key, cells[] }
  }
}`;

export const SANITY_POST_DETAIL_PROJECTION = `{
  _id,
  _type,
  title,
  metaTitle,
  metaDescription,
  publishedAt,
  "slug": slug.current,
  tags,
  ${SANITY_POST_BODY_PROJECTION},
  author->{
    name,
    role,
    bio,
    image { asset->{ url, originalFilename } }
  },
  featuredImage { asset->{ url, originalFilename } },
  socialImage { asset->{ url } },
  categories[]->{ title },
  "faqs": faqs[]{
    "question": coalesce(@->question, *[_id == "drafts." + @._ref][0].question),
    "answer": coalesce(@->answer, *[_id == "drafts." + @._ref][0].answer),
    "_id": coalesce(@->_id, *[_id == "drafts." + @._ref][0]._id, @._ref)
  }
}`;

export const SANITY_POST_LISTING_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  "_id": _id,
  title,
  publishedAt,
  "slug": slug.current,
  categories[]->{ "_id": _id, title },
  tags,
  featuredImage {
    asset->{ url, originalFilename }
  }
}`;

export const SANITY_WEBINAR_LISTING_QUERY = `*[_type == "webinar" && defined(slug.current)] | order(eventDate desc) {
  "_id": _id,
  "slug": slug.current,
  eventDate,
  title,
  "body": body,
  bannerImage { asset->{ url } },
  youtubeThumbnail { asset->{ url } },
  upcomingImage { asset->{ url } }
}`;

export const SANITY_WEBINAR_BODY_PROJECTION = `"_rawBody": body[]{
  ...,
  _type == "image" => { "asset": asset-> },
  _type == "downloadBlock" => {
    buttonText,
    downloadUrl,
    modalHeading,
    storageKey,
    fileUpload { asset-> }
  },
  _type == "table" => {
    className,
    columnWidths,
    rows[]{ _key, cells[] }
  },
  _type == "readMore" => {
    label,
    url,
    linkText
  },
  _type == "cta" => {
    title,
    buttonText,
    buttonUrl
  }
}`;

export const SANITY_WEBINAR_DETAIL_PROJECTION = `{
  _id,
  metaTitle,
  metaDescription,
  eventDate,
  location,
  eventNote,
  youtubeVideoUrl,
  upcomingImageUrl,
  "slug": slug.current,
  "_rawTitle": title,
  ${SANITY_WEBINAR_BODY_PROJECTION},
  bannerImage { asset->{ url } },
  youtubeThumbnail { asset->{ url } },
  upcomingImage { asset->{ url } },
  speaker->{
    name,
    "_rawDescription": description,
    image { asset->{ url } }
  },
  ctaButton {
    buttonText,
    buttonUrl,
    openInNewTab
  }
}`;

export const SANITY_WEBINAR_BY_SLUG_QUERY = `*[_type == "webinar" && (slug.current == $slug || slug.current == $slugWithSlash)][0] ${SANITY_WEBINAR_DETAIL_PROJECTION}`;

export const SANITY_WEBINAR_SLUGS_QUERY = `*[_type == "webinar" && defined(slug.current)]{ "slug": slug.current }`;

export const SANITY_POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] ${SANITY_POST_DETAIL_PROJECTION}`;

export const SANITY_PREVIEW_BY_ID_QUERY = `*[_id in [$id, $draftId]][0] ${SANITY_POST_DETAIL_PROJECTION}`;

export const SANITY_PREVIEW_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] ${SANITY_POST_DETAIL_PROJECTION}`;

export const SANITY_REDIRECTS_QUERY = `*[_type == "redirect" && defined(oldUrl) && defined(newUrl)]{
  oldUrl,
  newUrl
}`;
