import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "mijntaken-api",
    },
    {
      type: "category",
      label: "Taken",
      items: [
        {
          type: "doc",
          id: "zoek-taken",
          label: "Haal een lijst van taken op",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "retrieve-taak",
          label: "Haal één taak op",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
