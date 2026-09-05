import { defineField, defineType } from "sanity";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
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
      name: "buttonText",
      title: "Button Text",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "note",
      title: "Note",
      type: "string",
      validation: Rule => Rule.required(),
    }),
  ],
});