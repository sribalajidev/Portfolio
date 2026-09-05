export const sectionRegistry = [
  "navigation",
  "hero",
  "about",
  "skills",
  "experience",
  "footer",
] as const;

export const sectionReferences = sectionRegistry.map((type) => ({
  type,
}));