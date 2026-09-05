import { defineField, defineType } from "sanity";

export default defineType({
  name: "socialLink",
  title: "Social Link",
  type: "object",
  fields: [
    // Social Media
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(), // validation to ensure the field is required
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Social Media Icon',
      type: 'string',
      options: {
        list: [
          { title: 'GitHub', value: 'github' },
          { title: 'LinkedIn', value: 'linkedin' },
        ],
        layout: 'dropdown' // Renders as a dropdown
      },
      validation: (Rule) => Rule.required(),
    })
  ]
})