// studio-vbs/schemaTypes/post.ts

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    // These are tabs in the Sanity Studio editor for better organization
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // --- Content Group ---
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: Rule => Rule.required(),
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
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      group: 'content',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      group: 'content',
      options: {
        hotspot: true, // Allows for better image cropping
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      group: 'content',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags', // Renders as a tag editor in the Studio
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      group: 'content',
      to: { type: 'author' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'block', // Standard rich text
        },
        {
          type: 'image', // For images inside the body
          options: { hotspot: true },
        },
        { type: 'readMore' },
        { type: 'cta' },
        { type: 'downloadBlock' },
        { type: 'table' },
        { type: 'rawHtml' },
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'reference',
          to: { type: 'faq' }, // uses your existing faq document
        },
      ],
    }),

    // --- SEO Group ---
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      description: 'Overrides the main title for search engine results.',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
      validation: Rule => Rule.max(160).warning('Should be under 160 characters for best SEO results.'),
    }),
    defineField({
      name: 'socialImage',
      title: 'Social Image',
      description: 'Image used when sharing the post on social media (e.g., Facebook, Twitter).',
      type: 'image',
      group: 'seo',
    }),
  ],

  // --- Preview Configuration ---
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featuredImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})