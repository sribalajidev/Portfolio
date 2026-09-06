import { defineField } from "sanity";

export const anchorField = defineField({
  name: "anchor",
  title: "Section Anchor",
  type: "string",
  description:
    "Optional custom section id used for navigation (e.g. hero, about, experience).",
  validation: (Rule) =>
    Rule.regex(/^[a-z0-9-]+$/)
      .error("Use lowercase letters, numbers and hyphens only."),
});