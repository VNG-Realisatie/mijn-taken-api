import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "mijntaken-api",
    },
    {
      type: "category",
      label: "Context",
      items: [
        {
          type: "doc",
          id: "zoek-context",
          label: "Zoek context",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Taken",
      items: [
        {
          type: "doc",
          id: "retrieve-taak",
          label: "Haal één taak op",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Schemas",
      items: [
        {
          type: "doc",
          id: "schemas/contextquery",
          label: "ContextQuery",
          className: "schema",
        },
        {
          type: "doc",
          id: "schemas/contextresultaat",
          label: "ContextResultaat",
          className: "schema",
        },
        {
          type: "doc",
          id: "schemas/taakcontext",
          label: "TaakContext",
          className: "schema",
        },
        {
          type: "doc",
          id: "schemas/uitvoeringbeknopt",
          label: "UitvoeringBeknopt",
          className: "schema",
        },
        {
          type: "doc",
          id: "schemas/uitvoeringdefinitie",
          label: "UitvoeringDefinitie",
          className: "schema",
        },
        {
          type: "doc",
          id: "schemas/taaksamenvatting",
          label: "TaakSamenvatting",
          className: "schema",
        },
        {
          type: "doc",
          id: "schemas/taak",
          label: "Taak",
          className: "schema",
        },
        {
          type: "doc",
          id: "schemas/fout",
          label: "Fout",
          className: "schema",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
