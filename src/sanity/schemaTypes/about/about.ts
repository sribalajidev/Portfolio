import { defineField, defineType } from "sanity";
import { anchorField } from "../common/anchor";

export default defineType({
  name: "about",
  title: "About",
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
      name: "collaboration",
      title: "Collaboration",
      type: "collaboration",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "process",
      title: "Process",
      type: "process",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "timezone",
      title: "Timezone",
      type: "timezone",
      validation: Rule => Rule.required(),
    }),

    anchorField,
  ],
});