# Schermen

Elk scherm krijgt een eigen pagina met:

- Een korte omschrijving en (later) een Figma-link of screenshot
- De **interactietabel**: per UI-element een ID, de interactie en de bijbehorende API-aanroep
- Welke [use cases](../use-cases/index.md) het scherm gebruiken

Schermen worden geïdentificeerd met het patroon `SCR-<ONDERWERP>-<VARIANT>`,
elementen met `SCR-<ONDERWERP>-<VARIANT>.<element>`. Deze IDs zijn stabiel en
worden door use cases aangehaald.

## Overzicht

| ID                | Scherm                            |
| :---------------- | :-------------------------------- |
| `SCR-TAAK-LIJST`  | [Takenoverzicht](./taak-lijst.md) |
| `SCR-TAAK-DETAIL` | [Taakdetail](./taak-detail.md)    |
| `SCR-TAAK-NIEUW`  | [Nieuwe taak](./taak-nieuw.md)    |

## Portalen

De MijnTaken-schermen worden in twee portalen getoond: **MijnOverheid** (MO)
en **MijnOmgeving** (MG, decentrale overheid). Verschillen per portaal worden
per scherm onderaan de pagina gedocumenteerd; als een scherm identiek is voor
beide portalen hoeft daar niets te staan.
