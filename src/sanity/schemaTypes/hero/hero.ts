import { defineField, defineType } from "sanity";
import { anchorField } from "../common/anchor";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "array",
      of: [{ type: "string" }],
      validation: Rule => Rule.required().min(1),
    }),

    defineField({
      name: "badge",
      title: "Badge",
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
      name: "image",
      title: "Hero Image",
      type: "imageObject",
      validation: Rule => Rule.required(),
    }),

    anchorField,
  ],
});