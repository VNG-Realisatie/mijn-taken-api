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
          id: "query-taken",
          label: "Haal een lijst van taken op",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
