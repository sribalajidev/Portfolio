import { defineField, defineType } from "sanity";

export default defineType({
  name: "step",
  title: "Step",
  type: "object",
  fields: [
    defineField({
      name: "number",
      title: "Step Number",
      type: "number",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "detail",
      title: "Detail",
      type: "text",
      rows: 3,
      validation: Rule => Rule.required(),
    }),
  ],
});