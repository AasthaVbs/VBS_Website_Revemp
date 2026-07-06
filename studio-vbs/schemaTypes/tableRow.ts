// studio-vbs/schemaTypes/tableRow.ts

import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'tableRow',
    title: 'Table Row',
    type: 'object',
    fields: [
        defineField({
            name: 'className',
            title: 'CSS Class (Row)', // Made the title more specific
            type: 'string',
            description: 'Optional: Add custom CSS classes to this entire row.'
        }),
        defineField({
            name: 'cells',
            title: 'Cells',
            type: 'array',
            // This should already be pointing to your tableCell schema
            of: [{ type: 'tableCell' }],
        }),
    ],
    // Optional: Add a preview to make it look nicer in the Studio
    preview: {
        select: {
            cells: 'cells',
            className: 'className',
        },
        prepare({ cells }) {
            const cellCount = cells ? cells.length : 0
            return {
                title: `${cellCount} Cell(s) in Row`,
            }
        },
    },
})