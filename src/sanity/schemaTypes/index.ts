// ./src/sanity/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";
import { authorType } from "./author";
import { blockContentType } from "./blockContent";
import { categoryType } from "./category";
import { postType } from "./post";
import hero from "./hero";
import callOutWithImageLeft from './callOutWithImageLeft'; // Import
import callOutWithImageRight from './callOutWithImageRight'; // Import
import testimonial from './testimonial'; // Import
import testimonialsSection from './testimonialsSection'; // Import 
import callToAction from "./callToAction";
import orderButton from "./orderButton";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, blockContentType, categoryType, postType, hero, callOutWithImageLeft, callOutWithImageRight, testimonial, testimonialsSection, callToAction, orderButton], // Add the new schema
};