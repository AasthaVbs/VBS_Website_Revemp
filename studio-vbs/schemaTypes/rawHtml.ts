// studio-vbs/schemaTypes/rawHtml.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'rawHtml',
    title: 'Raw HTML',
    type: 'object',
    fields: [
        defineField({
            name: 'code',
            title: 'HTML Code',
            type: 'code',
            options: {
                language: 'html',
            }
        })
    ],
})