import { defineField, defineType } from "sanity";

export default defineType({
  name: "process",
  title: "Process",
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
      name: "steps",
      title: "Steps",
      type: "array",
      of: [{ type: "step" }],
      validation: Rule => Rule.required(),
    }),
  ],
});