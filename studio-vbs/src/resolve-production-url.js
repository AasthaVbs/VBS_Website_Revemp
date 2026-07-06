// studio-vbs/src/resolve-production-url.js

// The base URL of your Gatsby site
const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://your-live-site.com'
    : 'http://localhost:8000';

export default function resolveProductionUrl(doc) {
    const slug = doc?.slug?.current;
    if (!slug) {
        return null; // Don't show a preview button if there's no slug
    }

    // Construct the URL based on the document type
    let path;
    switch (doc._type) {
        case 'post':
            path = slug; // The slug already includes `/blog/`
            break;
        case 'webinar':
            path = slug; // The slug already includes `/webinars/`
            break;
        // Add other types here
        default:
            path = '/';
    }

    return `${baseUrl}${path}`;
}