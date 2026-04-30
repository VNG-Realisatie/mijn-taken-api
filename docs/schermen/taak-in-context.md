---
sidebar_position: 3
---

import AnnotatedPreview from '@site/src/components/AnnotatedPreview';

# [SCR-TAAK-IN-CONTEXT] Taak in context

Gecombineerd scherm dat de klant bereikt vanuit een zaak, product of ander
object — bijv. via een deeplink vanuit MijnZaken of een erfpachtportaal. Het
scherm toont links de gefilterde takenlijst voor dat object en rechts het detail
van de geselecteerde taak. Er is geen apart navigatiescherm voor het taakdetail.

## Schermvoorbeeld

<AnnotatedPreview
src="https://nl-design-system.github.io/mijn-services/iframe.html?id=mijn-omgeving-mijnzaken-detailpagina--default&viewMode=story"
height={750}
title="Taak in context schermvoorbeeld (MijnOmgeving zaakdetail als placeholder)"
annotations={[
{ id: 'C.2', x: '25%', y: '45%', label: 'Taak selecteren in lijst' },
{ id: 'C.5', x: '72%', y: '38%', label: 'Knop Afronden' },
{ id: 'C.6', x: '84%', y: '38%', label: 'Knop Verwijderen' },
{ id: 'C.7', x: '55%', y: '55%', label: 'Veld Toelichting (inline bewerken)' },
]}
/>

:::note[Placeholder]
Dit voorbeeld gebruikt de _zaakdetail_-template als tijdelijke invulling — er bestaat nog geen losse taak-in-context-template in de [MijnServices Storybook](https://nl-design-system.github.io/mijn-services/). Klik op een bolletje om de bijbehorende interactie te zien.
:::

**Figma:** _nog toe te voegen_

## Interacties — lijstpaneel

| ID      | Element         | Interactie      | Bedoeling / resultaat                                               | API                                         |
| :------ | :-------------- | :-------------- | :------------------------------------------------------------------ | :------------------------------------------ |
| **C.1** | Filter _Status_ | Keuze wijzigt   | Lijst toont alleen taken met gekozen status                         | `GET /taken?object={urn}&status={val}`      |
| **C.2** | Kolom _Titel_   | Klik op rij     | Detailpaneel toont de geselecteerde taak                            | `GET /taken/{taakId}`                       |
| **C.3** | Paginering      | Volgende pagina | Volgende set resultaten laden                                       | `GET /taken?object={urn}&page={n}`          |
| **C.4** | Terug-navigatie | Klik            | Navigeert terug naar het bovenliggende object (zaak, product, e.d.) | — (deeplink return-URL van het bronportaal) |

## Interacties — detailpaneel

| ID      | Element            | Interactie             | Bedoeling / resultaat                                                        | API                                                    |
| :------ | :----------------- | :--------------------- | :--------------------------------------------------------------------------- | :----------------------------------------------------- |
| **C.5** | Knop _Afronden_    | Klik (met bevestiging) | Status gaat naar `afgerond`; alleen zichtbaar bij `open` of `in_behandeling` | `PATCH /taken/{taakId}` met `{ "status": "afgerond" }` |
| **C.6** | Knop _Verwijderen_ | Klik (met bevestiging) | Taak wordt verwijderd, detailpaneel sluit                                    | `DELETE /taken/{taakId}`                               |
| **C.7** | Veld _Toelichting_ | Inline bewerken        | Bijwerken van toelichting                                                    | `PATCH /taken/{taakId}`                                |

## Gebruikt in use cases

- [UC-01 Taken raadplegen](../use-cases/uc-01-taken-raadplegen.md)
- [UC-02 Taak afhandelen](../use-cases/uc-02-taak-afhandelen.md)

## Verschillen per portaal

_Geen — scherm is identiek in MijnOverheid en MijnOmgeving._
