// sanity/schemaTypes/testimonialsSection.ts
import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'testimonialsSection',
  type: 'document',
  title: 'Testimonials Section',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Section Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Section Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'testimonials',
      type: 'array',
      title: 'Testimonials',
      of: [
        defineArrayMember({
          type: 'testimonial', // Reference the 'testimonial' object type
        }),
      ],
      validation: (Rule) => Rule.required().min(1), // Require at least one testimonial
    }),
  ],
});