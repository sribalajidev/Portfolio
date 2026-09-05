import { defineField, defineType } from "sanity";

  export default defineType({
    name: "navigationLink",
    title: "Navigation Link",
    type: "object",
    fields: [
      // Menu title
      defineField({
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule) => Rule.required(), // validation to ensure the field is required
      }),
      // Menu route
      defineField({
        name: "route",
        title: "Route",
        type: "string",
        description: "Internal route or page section (e.g. '/', '/blog', '/#about').",
        validation: (Rule) => Rule.required(),
      }),
    ]
  })