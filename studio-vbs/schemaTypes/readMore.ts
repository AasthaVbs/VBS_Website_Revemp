import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'readMore',
    title: 'Read More Link',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
            description: 'e.g., Read More, Success Story, Case Study',
            initialValue: 'Read More'
        }),
        defineField({
            name: 'linkText',
            title: 'Link Text',
            type: 'string',
        }),
        defineField({
            name: 'url',
            title: 'URL (e.g., /blog/another-post)',
            type: 'string',
        }),
    ],
})