// studio-vbs/schemaTypes/downloadBlock.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'downloadBlock',
    title: 'Download Block',
    type: 'object',
    fields: [
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        }),
        // --- NEW: File Upload Field ---
        defineField({
            name: 'fileUpload',
            title: 'PDF File Upload',
            description: 'Upload the PDF here. This takes priority over the URL below.',
            type: 'file',
            options: {
                accept: '.pdf', // Restrict to PDF files only
            },
        }),
        // --- OLD: Fallback URL ---
        defineField({
            name: 'downloadUrl',
            title: 'External Download URL (Fallback)',
            description: 'If you uploaded a file above, leave this empty. Use this only for external links (e.g. Google Drive).',
            type: 'url',
        }),
        defineField({
            name: 'modalHeading',
            title: 'Modal Heading',
            type: 'string',
        }),
        defineField({
            name: 'storageKey',
            title: 'Storage Key',
            description: 'Optional: A unique key to remember if the user downloaded this.',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'buttonText',
            fileName: 'fileUpload.asset.originalFilename',
            url: 'downloadUrl'
        },
        prepare({ title, fileName, url }) {
            return {
                title: title || 'Download Button',
                subtitle: fileName ? `File: ${fileName}` : (url ? `Link: ${url}` : 'No file set')
            }
        }
    }
})