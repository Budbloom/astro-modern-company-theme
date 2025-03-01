// sanity/schemaTypes/testimonial.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  type: 'object', // Use 'object' type for individual testimonials
  title: 'Testimonial',
  fields: [
    defineField({
      name: 'quote',
      type: 'text',
      title: 'Quote',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'string',
      title: 'Author',
      validation: (Rule) => Rule.required(),
    }),
  ],
});