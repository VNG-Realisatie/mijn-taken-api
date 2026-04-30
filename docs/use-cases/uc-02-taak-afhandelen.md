---
sidebar_position: 3
---

# [UC-02] Taak afhandelen

**Actor:** klant (burger of ondernemer)

**Doel:** een aan de klant toegewezen taak raadplegen en als afgerond markeren.

**Voorwaarden:**

- Klant is ingelogd in MijnOverheid of MijnOmgeving.
- Er is minstens één taak met status `open` of `in_behandeling` voor deze klant.

## A1 — Hoofdflow

1. Klant opent [`SCR-TAAK-LIJST`](../schermen/taken-overzicht.md) en ziet de eigen taken.
2. Klant filtert optioneel op status — interactie [L.1](../schermen/taken-overzicht.md#interacties).
3. Klant klikt een rij aan — interactie [L.2](../schermen/taken-overzicht.md#interacties) — en komt op [`SCR-TAAK-IN-CONTEXT`](../schermen/taak-in-context.md).
4. Klant leest de toelichting en eventuele bijlagen.
5. Klant klikt op _Afronden_ — interactie [C.5](../schermen/taak-in-context.md#interacties--detailpaneel) — en bevestigt de actie.
6. Systeem markeert de taak als `afgerond` en navigeert terug naar `SCR-TAAK-LIJST`.

## Alternatieve flows

- **A2 — Taak is al afgerond:** de knop _Afronden_ ([C.5](../schermen/taak-in-context.md#interacties--detailpaneel)) is niet zichtbaar; klant kan alleen raadplegen.
- **A3 — Conflict bij afronden:** de API geeft `409` (bv. status inmiddels gewijzigd door backend). UI toont een melding en herlaadt de taak.
- **A4 — Taak vereist betaling:** in plaats van _Afronden_ wordt de klant via een redirect doorgestuurd naar het portaal van de lokale overheid, dat een betaalprovider aanroept. Na geslaagde betaling werkt het portaal de taakstatus bij via `PATCH /taken/{taakId}` en redirect de klant terug naar MijnOverheid/MijnOmgeving met een statusmelding.

  ```mermaid
  sequenceDiagram
      actor Gebruiker
      Gebruiker->>+MO: Klik betalen TAAK 123
      MO->>+Portaal LO: Redirect naar portaal van lokale overheid<br>bijv. portaal.gemeente.nl/mo-acties/taken/123?hash=xyz&return=MO-url
      Portaal LO->>+LO Taken API: Haal TAAK 123 op
      LO Taken API-->>-Portaal LO: TAAK 123 (JSON)
      Portaal LO->>Portaal LO: Valideer taak hash (URL "hash" waarde)
      Portaal LO->>+Betaal provider: Redirect met betaal parameters
      Betaal provider-->>Gebruiker: Toon betaal pagina
      Gebruiker->>Betaal provider: Betalen
      Betaal provider-->>-Portaal LO: Betaald
      Portaal LO->>+LO Taken API: Status van TAAK 123 bijwerken
      LO Taken API-->>-Portaal LO: OK
      Portaal LO->>Portaal LO: Redirect actie bepalen (URL "return" waarde)
      Portaal LO-->>-MO: Redirect met status
      MO-->>-Gebruiker: Toon status
  ```

## Resultaat

De taak heeft status `afgerond` en verdwijnt uit het standaardfilter _Open_ op
[`SCR-TAAK-LIJST`](../schermen/taken-overzicht.md).
