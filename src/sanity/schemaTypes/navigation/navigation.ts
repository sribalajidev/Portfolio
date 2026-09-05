import { defineField, defineType } from "sanity";

  export default defineType({
    name: "navigation",
    title: "Navigation",
    type: "document",
    fields: [
      // website logo
      defineField({
        name: "logo",
        title: "Logo",
        type: "imageObject",
        description: "Website logo displayed in the navigation.",
      }),
      // navigation title
      defineField({
        name: "title",
        title: "Title",
        type: "string"
      }),
      // website url field
      defineField({
        name: "website",
        title: "Website",
        type: "string",
        description: "The website URL shown in the navbar."
      }),
      // using navigationLink as a reference for the links field
      defineField({
        name: "links",
        title: "Links",
        type: "array",
        of: [{ type: "navigationLink"}],
        description: "The navigation links for the website."
      }),
      // using socialLink as a reference for the socialLinks field
      defineField({
        name: "socialLinks",
        title: "Social Media Links",
        type: "array",
        of: [{ type: "socialLink"}],
        description: "The social media links to be displayed in the navbar."
      })
    ]
});