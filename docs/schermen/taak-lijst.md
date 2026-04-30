# [SCR-TAAK-LIJST] Takenoverzicht

Overzicht van de aan de klant (burger of ondernemer) toegewezen taken, met
filter- en sorteermogelijkheden.

**Figma:** _nog toe te voegen_

## Interacties

| ID      | Element             | Interactie      | Bedoeling / resultaat                       | API                           |
| :------ | :------------------ | :-------------- | :------------------------------------------ | :---------------------------- |
| **L.1** | Filter _Status_     | Keuze wijzigt   | Lijst toont alleen taken met gekozen status | `GET /taken?status={val}`     |
| **L.2** | Kolom _Titel_       | Klik op rij     | Opent taakdetail (`SCR-TAAK-DETAIL`)        | `GET /taken/{taakId}`         |
| **L.3** | Kolom _Vervaldatum_ | Sorteren        | Lijst wordt gesorteerd op vervaldatum       | `GET /taken?sort=vervaldatum` |
| **L.4** | Paginering          | Volgende pagina | Volgende set resultaten laden               | `GET /taken?page={n}`         |
| **L.5** | Knop _Nieuwe taak_  | Klik            | Navigeert naar `SCR-TAAK-NIEUW`             | —                             |

## Gebruikt in use cases

- [UC-01 Taak afhandelen](../use-cases/uc-01-taak-afhandelen.md)

## Verschillen per portaal

_Geen — scherm is identiek in MijnOverheid en MijnOmgeving._
