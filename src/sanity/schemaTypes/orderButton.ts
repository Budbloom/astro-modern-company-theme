import { defineType, defineField } from "sanity";

export default defineType({
  name: "orderButton",
  type: "object",
  title: "Order Button",
  fields: [
    defineField({ name: "cta text", type: "string"}),
    defineField({ name: "href", type: "string"}),
  ],
});