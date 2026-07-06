import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
        defineField({
            name: 'question',
            title: 'Question',
            type: 'string',
        }),
        defineField({
            name: 'answer',
            title: 'Answer',
            type: 'text',
            rows: 4,
        }),
    ],
    preview: {
        select: {
            title: 'question',
            subtitle: 'answer',
        },
        prepare({ title, subtitle }) {
            return {
                title: title || 'Untitled FAQ',
                subtitle: subtitle
                    ? `${subtitle.slice(0, 80)}${subtitle.length > 80 ? '...' : ''}`
                    : 'No answer yet',
            }
        },
    },
})

