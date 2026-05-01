---
sidebar_position: 5
---

# [SCR-DIGID-EH] DigiD eenvoudige herauthenticatie

Tussenliggend scherm dat verschijnt tijdens een **portaalwissel van MijnOverheid (MO) naar MijnOmgeving (LO)**. De taak is zichtbaar bij MijnOverheid, maar wordt uitgevoerd in het portaal van de lokale overheid. Omdat de klant een nieuwe sessie start in een ander portaal, is een eenvoudige DigiD-herauthenticatie vereist voordat de taakuitvoering kan beginnen. De klant logt niet opnieuw volledig in, maar bevestigt zijn identiteit met een lichtgewicht herauthenticatiestap.

## Context: portaalwissel MO → LO

Dit scherm is alleen van toepassing op taken die **niet uitvoerbaar zijn in MijnOverheid**. Taken die MijnOverheid wel zelf kan afhandelen (betaling, bestandsupload; later formulieren) doorlopen dit scherm niet.

Er zijn twee instappaden, afhankelijk van of de taak aan een zaak is gekoppeld:

```
Pad 1 — taak niet gekoppeld aan zaak:
SCR-RECENT
  └─ klant klikt op taak
       └─ SCR-DIGID-EH  ← dit scherm
            └─ na succesvolle herauthenticatie
                 └─ SCR-TAAK-UITVOEREN (LO)
                      deeplink opent direct de specifieke taak
                      klant voert de taak uit zonder opnieuw te kiezen

Pad 2 — taak gekoppeld aan zaak:
SCR-RECENT
  └─ klant klikt op taak
       └─ SCR-TAKEN-IN-CONTEXT (MijnOverheid, zaakcontext)
            └─ klant klikt Uitvoeren (C.8)
                 └─ SCR-DIGID-EH  ← dit scherm
                      └─ na succesvolle herauthenticatie
                           └─ SCR-TAAK-UITVOEREN (MijnOmgeving / LO)
                                deeplink opent direct de specifieke taak
                                klant voert de taak uit zonder opnieuw te kiezen
```

## Schermvoorbeeld

_Mockup nog toe te voegen._

**Figma:** _nog toe te voegen_

## Interacties

| ID       | Element                     | Interactie  | Bedoeling / resultaat                                                                                                                                                                    | API |
| :------- | :-------------------------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-- |
| **EH.1** | DigiD-herauthenticatie knop | Klik        | Stuurt klant naar DigiD voor eenvoudige herauthenticatie; na succesvolle verificatie terugkeer naar de taak in het LO-portaal                                                            | —   |
| **EH.2** | Terugkeer na authenticatie  | Automatisch | Het LO-portaal opent [`SCR-TAAK-UITVOEREN`](./taak-uitvoeren.md) via een deeplink naar de specifieke taak; de klant hoeft geen keuze te maken in een lijst en start direct met uitvoeren | —   |
| **EH.3** | Annuleren                   | Klik        | Klant annuleert de portaalwissel; terugkeer naar het vorige scherm ([`SCR-RECENT`](./recent.md) of [`SCR-TAKEN-IN-CONTEXT`](./taken-in-context.md))                                        | —   |

:::note[Geen directe API-aanroepen]
Dit scherm verloopt via de DigiD-koppeling van het LO-portaal. De MijnTaken API wordt pas aangeroepen nadat de herauthenticatie is geslaagd en het LO-portaal de taak opent.
:::

## Gebruikt in use cases

- [UC-02 Taak afhandelen](../use-cases/uc-02-taak-afhandelen.md)

## Verschillen per portaal

Dit scherm verschijnt uitsluitend in het **LO-portaal** (MijnOmgeving), als onderdeel van de instap via een deeplink vanuit MijnOverheid. Binnen MijnOverheid zelf treedt dit scherm niet op.
