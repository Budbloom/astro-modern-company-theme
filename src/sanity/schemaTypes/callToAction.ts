// sanity/schemaTypes/callToAction.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'callToAction',
  type: 'document',
  title: 'Call to Action',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description1',
      type: 'text',
      title: 'Description 1',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description2',
      type: 'text',
      title: 'Description 2',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orderButton',
      type: 'object',
      title: 'Order Button',
      fields: [
        defineField({ name: 'text', type: 'string', title: 'Button Text' }),
        defineField({ name: 'href', type: 'string', title: 'Button URL' }),
      ],
    }),
    defineField({
      name: 'learnMoreLink',
      type: 'object',
      title: 'Learn More Link',
      fields: [
        defineField({ name: 'text', type: 'string', title: 'Link Text' }),
        defineField({ name: 'href', type: 'string', title: 'Link URL' }),
      ],
    }),
  ],
});