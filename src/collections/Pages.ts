import { TwoColumn } from "../blocks/TwoColumn";
import { Hero } from "../blocks/Hero";
import { Carousel } from "../blocks/Carousel";
import { CollectionConfig } from "payload/types";

const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
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

export default Pages;
