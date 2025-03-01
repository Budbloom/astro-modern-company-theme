// sanity/schemaTypes/callOutWithImageRight.ts
import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'callOutWithImageRight',
  type: 'document',
  title: 'Callout with Image Right',
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
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'feature',
          fields: [
            defineField({name: 'title', type: 'string', title: 'Feature Title'}),
            defineField({name: 'description', type: 'text', title: 'Feature Description'}),
            defineField({
                name: 'image',
                type: 'image',
                title: 'Feature Image',
                options: { hotspot: true },
                fields: [
                    {
                        name: 'alt',
                        type: 'string',
                        title: 'Alternative Text',
                        validation: (Rule) => Rule.required()
                    }
                ]
            })
          ]
        })
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