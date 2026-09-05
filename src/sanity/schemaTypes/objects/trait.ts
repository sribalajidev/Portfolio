import { defineField, defineType } from "sanity";

export default defineType({
  name: "trait",
  title: "Trait",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "imageObject",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: Rule => Rule.required(),
    }),
  ],
});