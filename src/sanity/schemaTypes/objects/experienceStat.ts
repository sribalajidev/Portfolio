import { defineField, defineType } from "sanity";

export default defineType({
  name: "experienceStat",
  title: "Experience Stat",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "value",
      title: "Value",
      type: "string",
      validation: Rule => Rule.required(),
    }),
  ],
});