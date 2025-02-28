// sanity/schemaTypes/hero.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'hero',
  type: 'document',
  title: 'Hero Section',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orderButton',
      type: 'object',
      title: 'Order Button',
      fields: [
        defineField({ name: 'text', type: 'string', title: 'Button Text', validation: (Rule) => Rule.required() }),
        defineField({ name: 'href', type: 'string', title: 'Button URL', validation: (Rule) => Rule.required() }),
      ],
    }),
    defineField({
      name: 'learnMoreLink',
      type: 'object',
      title: 'Learn More Link',
      fields: [
        defineField({ name: 'text', type: 'string', title: 'Link Text', validation: (Rule) => Rule.required() }),
        defineField({ name: 'href', type: 'string', title: 'Link URL', validation: (Rule) => Rule.required() }),
      ],
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
        }
      ]
    }),
  ],
});