// sanity/schemaTypes/callOutWithImageLeft.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'callOutWithImageLeft',
  type: 'document',
  title: 'Callout with Image Left',
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