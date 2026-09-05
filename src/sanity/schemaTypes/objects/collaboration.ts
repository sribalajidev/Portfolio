import { defineField, defineType } from "sanity";

export default defineType({
  name: "collaboration",
  title: "Collaboration",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "traits",
      title: "Traits",
      type: "array",
      of: [{ type: "trait" }],
      validation: Rule => Rule.required(),
    }),
  ],
});