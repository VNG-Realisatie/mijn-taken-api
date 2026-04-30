import AnnotatedPreview from '@site/src/components/AnnotatedPreview';

# [SCR-TAAK-DETAIL] Taakdetail

Detailscherm van één taak, waar de klant de taak kan raadplegen en afhandelen.

## Schermvoorbeeld

<AnnotatedPreview
src="https://nl-design-system.github.io/mijn-services/iframe.html?id=mijn-omgeving-mijnzaken-detailpagina--default&viewMode=story"
height={750}
title="Taakdetail schermvoorbeeld (MijnOmgeving)"
annotations={[
{ id: 'D.1', x: '72%', y: '38%', label: 'Knop Afronden' },
{ id: 'D.2', x: '84%', y: '38%', label: 'Knop Verwijderen' },
{ id: 'D.3', x: '55%', y: '55%', label: 'Veld Toelichting (inline bewerken)' },
]}
/>

:::note Placeholder
Dit voorbeeld gebruikt de _zaakdetail_-template als tijdelijke invulling — er bestaat nog geen losse taakdetail-template in de [MijnServices Storybook](https://nl-design-system.github.io/mijn-services/). Klik op een bolletje om de bijbehorende interactie te zien.
:::

## Interacties

| ID      | Element            | Interactie             | Bedoeling / resultaat                                                        | API                                                    |
| :------ | :----------------- | :--------------------- | :--------------------------------------------------------------------------- | :----------------------------------------------------- |
| **D.1** | Knop _Afronden_    | Klik (met bevestiging) | Status gaat naar `afgerond`; alleen zichtbaar bij `open` of `in_behandeling` | `PATCH /taken/{taakId}` met `{ "status": "afgerond" }` |
| **D.2** | Knop _Verwijderen_ | Klik (met bevestiging) | Taak wordt verwijderd, terug naar lijst                                      | `DELETE /taken/{taakId}`                               |
| **D.3** | Veld _Toelichting_ | Inline bewerken        | Bijwerken van toelichting                                                    | `PATCH /taken/{taakId}`                                |

## Gebruikt in use cases

- [UC-01 Taak afhandelen](../use-cases/uc-01-taak-afhandelen.md)

## Verschillen per portaal

_Geen — scherm is identiek in MijnOverheid en MijnOmgeving._
