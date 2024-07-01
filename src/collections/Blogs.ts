import { CollectionConfig } from "payload/types";

const Blogs: CollectionConfig = {
  slug: "blogs",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "placedBy",
      type: "relationship",
      relationTo: "customers",
      required: true,
    },
  ],
};

export default Blogs;
