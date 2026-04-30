---
sidebar_position: 2
---

import AnnotatedPreview from '@site/src/components/AnnotatedPreview';

# [SCR-TAAK-LIJST] Takenoverzicht

Overzicht van de aan de klant (burger of ondernemer) toegewezen taken, met
filter- en sorteermogelijkheden.

## Schermvoorbeeld

<AnnotatedPreview
src="https://nl-design-system.github.io/mijn-services/iframe.html?id=mijn-omgeving-taken--default&viewMode=story"
height={700}
title="Takenoverzicht schermvoorbeeld (MijnOmgeving)"
annotations={[
{ id: 'L.2', x: '68%', y: '42%', label: 'Klik op taak (→ Taakdetail)' },
]}
/>

**Figma:** _nog toe te voegen_

## Interacties

| ID      | Element             | Interactie      | Bedoeling / resultaat                         | API                           |
| :------ | :------------------ | :-------------- | :-------------------------------------------- | :---------------------------- |
| **L.1** | Filter _Status_     | Keuze wijzigt   | Lijst toont alleen taken met gekozen status   | `GET /taken?status={val}`     |
| **L.2** | Kolom _Titel_       | Klik op rij     | Opent taak in context (`SCR-TAAK-IN-CONTEXT`) | `GET /taken/{taakId}`         |
| **L.3** | Kolom _Vervaldatum_ | Sorteren        | Lijst wordt gesorteerd op vervaldatum         | `GET /taken?sort=vervaldatum` |
| **L.4** | Paginering          | Volgende pagina | Volgende set resultaten laden                 | `GET /taken?page={n}`         |

## Gebruikt in use cases

- [UC-01 Taken raadplegen](../use-cases/uc-01-taken-raadplegen.md)
- [UC-02 Taak afhandelen](../use-cases/uc-02-taak-afhandelen.md)

## Verschillen per portaal

_Geen — scherm is identiek in MijnOverheid en MijnOmgeving._
