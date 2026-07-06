// studio-vbs/schemaTypes/learningPoint.ts

import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'learningPoint',
    title: 'Learning Point',
    type: 'object',
    fields: [
        defineField({
            name: 'pointTitle',
            title: 'Point Title',
            type: 'string'
        }),
        defineField({
            name: 'pointDescription',
            title: 'Point Description',
            type: 'text'
        }),
    ],
})