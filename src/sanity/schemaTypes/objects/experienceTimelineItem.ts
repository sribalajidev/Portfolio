import { defineField, defineType } from "sanity";

export default defineType({
  name: "experienceTimelineItem",
  title: "Experience Timeline Item",
  type: "object",
  fields: [
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
      validation: Rule => Rule.required(),
    }),
  ],
});