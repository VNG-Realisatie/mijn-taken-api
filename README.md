| Eigenaar                                                  | Ingevuld door   |
| --------------------------------------------------------- | --------------- |
| Project Omnichannel - MijnServices / Team Dienstverlening | Rutger ter Borg |

<hr/>

# MijnTaken API

> **Concept** — deze specificatie is in ontwikkeling en kan wijzigen.

De **MijnTaken API** is een conceptstandaard voor overheidsbrede klantinteractie, ontwikkeld als onderdeel van de MijnServices-bouwsteen. De API standaardiseert hoe portalen (zoals MijnOverheid en MijnOmgeving) taken tonen aan burgers en hen in staat stelt die taken uit te voeren — ongeacht welke organisatie de taak beheert.

## Kern

- **Uniform contract** — alle providers implementeren dezelfde interface; portalen hoeven niet te weten hoe een provider intern is georganiseerd.
- **Additief model** — de response bevat alle beschikbare velden; portalen gebruiken wat ze ondersteunen en negeren onbekende velden. Providers en portalen kunnen onafhankelijk groeien.
- **Uitvoering bij de bron** — taakdata verlaat de bronorganisatie niet structureel; portalen tonen, providers voeren uit.

## Uitvoeringsscenario's

Portalen kiezen per taak het hoogste scenario dat ze ondersteunen:

1. **Portaalwissel** — doorsturen naar de provider via `canonicalUrl`
2. **Type-specifieke call-to-action** — herkend type (bijv. betaling), doorsturen via `canonicalUrl`
3. **Lokale uitvoering** — uitvoeringsdefinitie aanwezig, taak wordt binnen het portaal afgehandeld

## Documentatie

Zie de volledige documentatie op [vng-realisatie.github.io/mijn-taken-api](https://vng-realisatie.github.io/mijn-taken-api):

- [Uitgangspunten](https://vng-realisatie.github.io/mijn-taken-api/docs/uitgangspunten) — ontwerpkeuzes en compatibiliteitsmodel
- [Use cases](https://vng-realisatie.github.io/mijn-taken-api/docs/use-cases) — UC-01 Taken raadplegen, UC-02 Taak afhandelen
- [Schermen](https://vng-realisatie.github.io/mijn-taken-api/docs/schermen) — schermflow per portaal en taaktype
- [API-referentie](https://vng-realisatie.github.io/mijn-taken-api/api/mijntaken-api) — OpenAPI-specificatie

## Gerelateerd

| Naam                                 | Link                                                                                                                                                           |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Open VTB — Taken API                 | [API-documentatie](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/maykinmedia/open-vtb/main/src/openvtb/components/taken/openapi.yaml) |
| Externe klanttaak binnen Objects API | [Documentatie](https://dienstverleningsplatform.gitbook.io/platform-generieke-dienstverlening-public/patronen/taken/externe-klanttaak)                         |

## Licentie

EUPL 1.2 — zie [LICENSE](LICENSE).
