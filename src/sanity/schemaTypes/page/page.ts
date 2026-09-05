import { defineField, defineType } from "sanity";
import { sectionReferences } from "@/config/sectionRegistry";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "sections",
      title: "Sections",
      type: "array",

      of: [
        {
          type: "reference",
          to: sectionReferences,
        },
      ],
    }),
  ],
});