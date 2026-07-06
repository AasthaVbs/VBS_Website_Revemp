// studio-vbs/schemaTypes/redirect.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'redirect',
    title: 'Redirect',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            description: 'An internal name for this redirect (e.g., "Old Thank You Page")',
            type: 'string',
        }),
        defineField({
            name: 'oldUrl',
            title: 'From Path (Old URL)',
            description: 'Must start with a "/" (e.g., /thankyou/)',
            type: 'string',
            validation: Rule => Rule.required().custom(val => {
                if (typeof val !== 'string' || !val.startsWith('/')) {
                    return 'Path must start with a "/"';
                }
                return true;
            }),
        }),
        defineField({
            name: 'newUrl',
            title: 'To Path (New URL)',
            description: 'Must start with a "/" (e.g., /thank-you/)',
            type: 'string',
            validation: Rule => Rule.required().custom(val => {
                if (typeof val !== 'string' || !val.startsWith('/')) {
                    return 'Path must start with a "/"';
                }
                return true;
            }),
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'oldUrl',
        },
    },
})