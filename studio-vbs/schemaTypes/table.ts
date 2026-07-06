// studio-vbs/schemaTypes/table.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'table',
    title: 'Table',
    type: 'object',
    fields: [
        // --- ADD THIS NEW FIELD ---
        defineField({
            name: 'className',
            title: 'CSS Classes',
            type: 'string',
            description: 'Optional: Add custom CSS classes, separated by spaces (e.g., "text-center", "full-width").'
        }),
        defineField({
            name: 'columnWidths',
            title: 'Column Widths',
            type: 'array',
            description: 'Define widths for each column (e.g., "20%", "150px", or "auto"). Add one entry per column.',
            of: [{ type: 'string' }],
            options: {
                // This makes it look like a list of text fields
                layout: 'list',
            },
        }),

        // --- YOUR EXISTING ROWS FIELD (assuming it looks like this) ---
        defineField({
            name: 'rows',
            title: 'Rows',
            type: 'array',
            of: [
                { type: 'tableRow' } // <-- Just reference the type by its name
            ],
        }),
    ],
})