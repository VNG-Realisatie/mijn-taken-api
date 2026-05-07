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
          id: "schemas/contextlink",
          label: "ContextLink",
          className: "schema",
        },
        {
          type: "doc",
          id: "schemas/uitvoeringinfo",
          label: "UitvoeringInfo",
          className: "schema",
        },
        {
          type: "doc",
          id: "schemas/uitvoering",
          label: "Uitvoering",
          className: "schema",
        },
        {
          type: "doc",
          id: "schemas/uploaduitvoering",
          label: "UploadUitvoering",
          className: "schema",
        },
        {
          type: "doc",
          id: "schemas/formulieruitvoering",
          label: "FormulierUitvoering",
          className: "schema",
        },
        {
          type: "doc",
          id: "schemas/betaaluitvoering",
          label: "BetaalUitvoering",
          className: "schema",
        },
        {
          type: "doc",
          id: "schemas/onbekendeuitvoering",
          label: "OnbekendeUitvoering",
          className: "schema",
        },
        {
          type: "doc",
          id: "schemas/taakinfo",
          label: "TaakInfo",
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
          id: "schemas/probleem",
          label: "Probleem",
          className: "schema",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
