import { defineField, defineType } from "sanity";

export default defineType({
  name: "imageObject",
  title: "Image",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
      description: "Describe the image for accessibility.",
      validation: (Rule) => Rule.required(),
    }),
  ],
});