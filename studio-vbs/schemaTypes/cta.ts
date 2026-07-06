import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'cta',
    title: 'Call to Action',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            initialValue: 'Contact Us',
        }),
        defineField({
            name: 'buttonUrl',
            title: 'Button URL',
            type: 'string',
            initialValue: '/contact-us/',
        }),
    ],
})