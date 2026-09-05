import { defineField, defineType } from "sanity";

export default defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "rows",
      title: "Rows",
      type: "array",
      of: [{ type: "skillRow" }],
      validation: Rule => Rule.required().min(1),
    }),
  ],
});