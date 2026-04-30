# [SCR-TAAK-NIEUW] Nieuwe taak

Scherm waarin een klant zelf een proces start waarbij een nieuwe taak
ontstaat (bijvoorbeeld een melding of aanvraag indienen).

**Figma:** _nog toe te voegen_

## Interacties

| ID      | Element             | Interactie | Bedoeling / resultaat                      | API              |
| :------ | :------------------ | :--------- | :----------------------------------------- | :--------------- |
| **N.1** | Dropdown _Taaktype_ | Open       | Lijst met beschikbare taaktypen ophalen    | `GET /taaktypen` |
| **N.2** | Veld _Titel_        | Invoer     | Titel van de taak vastleggen               | —                |
| **N.3** | Knop _Opslaan_      | Klik       | Taak aanmaken; bij succes terug naar lijst | `POST /taken`    |

## Gebruikt in use cases

_Nog geen use case uitgewerkt._

## Verschillen per portaal

_Geen — scherm is identiek in MijnOverheid en MijnOmgeving._
