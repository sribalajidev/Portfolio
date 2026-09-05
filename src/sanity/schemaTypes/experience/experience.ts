import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [{ type: "experienceStat" }],
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "timeline",
      title: "Timeline",
      type: "array",
      of: [{ type: "experienceTimelineItem" }],
      validation: Rule => Rule.required(),
    }),
  ],
});