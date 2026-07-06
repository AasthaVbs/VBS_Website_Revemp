// studio-vbs/schemaTypes/tableCell.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'tableCell',
    title: 'Table Cell',
    type: 'object',
    fields: [
        defineField({
            name: 'className',
            title: 'CSS Class',
            type: 'string',
            description: 'Optional: Add custom CSS classes to this cell (e.g., "text-center").'
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'string', // Or use 'array' of 'block' for rich text in cells
        }),
        defineField({
            name: 'colspan',
            title: 'Column Span (Merge)',
            type: 'number',
            description: 'How many columns this cell should span. Default is 1.',
            initialValue: 1,
            validation: Rule => Rule.min(1).integer(),
        }),
        defineField({
            name: 'rowspan',
            title: 'Row Span (Merge)',
            type: 'number',
            description: 'How many rows this cell should span. Default is 1.',
            initialValue: 1,
            validation: Rule => Rule.min(1).integer(),
        }),
    ],
    // Add a preview to see the content in the studio
    preview: {
        select: {
            content: 'content',
            colspan: 'colspan',
            rowspan: 'rowspan',
            className: 'className',
        },
        prepare({ content, colspan, rowspan }) {
            let subtitle = ''
            if (colspan > 1) subtitle += `Colspan: ${colspan} `
            if (rowspan > 1) subtitle += `Rowspan: ${rowspan}`
            return {
                title: content || 'Empty Cell',
                subtitle: subtitle || 'Regular cell',
            }
        },
    },
})