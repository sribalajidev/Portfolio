import type { componentRegistry } from "@/components/layout/componentRegistry";

export interface  Section {
  _id: string;
  _type: keyof typeof componentRegistry;
  [key: string]: unknown;
}

export interface Page {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  sections: Section[];
} 