import { type SchemaTypeDefinition } from 'sanity';

// import schemaTypes
import { objectSchemas } from "./objects";
import { navigationSchemas } from "./navigation";
import { heroSchemas } from './hero';
import { aboutSchemas } from "./about";
import { skillsSchemas } from "./skills";
import { experienceSchemas } from "./experience";
import { footerSchemas } from "./footer";

// page schemas
import pageSchemas from "./page";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ...objectSchemas,
    ...navigationSchemas,
    ...heroSchemas,
    ...aboutSchemas,
    ...skillsSchemas,
    ...experienceSchemas,
    ...footerSchemas,

    // page schemas
    ...pageSchemas,
  ],
}
