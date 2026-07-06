// studio-vbs/schemaTypes/ctaButton.ts

import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'ctaButton',
    title: 'Call to Action Button',
    type: 'object',
    fields: [
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        }),
        defineField({
            name: 'buttonUrl',
            title: 'Button URL',
            type: 'url',
        }),
        defineField({
            name: 'openInNewTab',
            title: 'Open in New Tab?',
            type: 'boolean',
            initialValue: true,
        }),
    ],
})