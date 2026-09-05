import { defineField, defineType } from "sanity";

export default defineType({
  name: "skillRow",
  title: "Skill Row",
  type: "object",
  fields: [
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
      validation: Rule => Rule.required().min(1),
    }),
  ],
});