import { TwoColumn } from "../blocks/TwoColumn";
import { Hero } from "../blocks/Hero";
import { Carousel } from "../blocks/Carousel";

export const Pages = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [Hero, Carousel, TwoColumn],
    },
  ],
};
