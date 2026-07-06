import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'webinar',
    title: 'Webinar',
    type: 'document',
    groups: [
        // These are tabs in the Sanity Studio editor for better organization
        { name: 'content', title: 'Content', default: true },
        { name: 'seo', title: 'SEO' },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Webinar Title',
            type: 'array',
            group: 'content',
            of: [
                {
                    type: 'block',
                    styles: [{ title: 'H1', value: 'h1' }],
                    lists: [], // No lists
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            // 👇 This is our custom highlight decorator
                            {
                                title: 'Highlight',
                                value: 'highlight',
                                icon: () => 'H', // Simple icon for the toolbar
                            },
                        ],
                        annotations: [], // No links in the title
                    },
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'content',
            options: {
                source: 'title',
                maxLength: 200,
                slugify: input => `${input.toLowerCase().replace(/\s+/g, '-')}/`
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image',
            group: 'content',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            group: 'content',
            of: [
                { type: 'block' },
                { type: 'image' },
                { type: 'table' },
                { type: 'readMore' },
                { type: 'cta' },
                { type: 'downloadBlock' }
            ],
        }),
        defineField({
            name: 'speaker',
            title: 'Speaker',
            type: 'reference',
            to: { type: 'speaker' },
            group: 'content',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'eventDate',
            title: 'Event Date',
            type: 'datetime', // Allows picking date and time
            group: 'content',
            options: {
                dateFormat: 'MMMM DD, YYYY',
                timeFormat: 'hh:mm A',
                timeStep: 15,
            },
        }),
        defineField({
            name: 'location',
            title: 'Location / Type',
            type: 'string',
            group: 'content',
            initialValue: 'Live Webinar',
        }),
        defineField({
            name: 'ctaButton',
            title: 'Call to Action Button',
            type: 'ctaButton',
            group: 'content',
        }),
        defineField({
            name: 'upcomingImage',
            title: 'Upcoming Event Image',
            description: 'Image to show in the sidebar before the event is live.',
            type: 'image',
            group: 'content',
        }),

        // 👇 ADD THIS NEW FIELD
        defineField({
            name: 'upcomingImageUrl',
            title: 'Upcoming Event Image URL',
            description: 'Optional: The registration link for the upcoming event. The image will link here.',
            type: 'url',
            group: 'content',
        }),
        defineField({
            name: 'youtubeVideoUrl',
            title: 'YouTube Video URL',
            description: 'The main video for the webinar (e.g., https://www.youtube.com/watch?v=Nana7mp8Q5Q)',
            type: 'url',
            group: 'content',
        }),
        defineField({
            name: 'youtubeThumbnail',
            title: 'YouTube Thumbnail',
            type: 'image',
            group: 'content',
        }),
        defineField({
            name: 'metaTitle',
            title: 'Meta Title (SEO)',
            type: 'string',
            group: 'seo',
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description (SEO)',
            type: 'text',
            group: 'seo',
        }),
    ],
})