---
sidebar_position: 2
---

# [UC-01] Taken raadplegen

**Actor:** klant (burger of ondernemer)

**Doel:** een overzicht krijgen van de eigen openstaande taken en de details van een specifieke taak bekijken.

**Voorwaarden:**

- Klant is ingelogd in MijnOverheid of MijnOmgeving.
- Er is minstens één taak beschikbaar voor deze klant.

## R1 — Hoofdflow

1. Klant opent [`SCR-MIJN-TAKEN`](../schermen/mijn-taken.md) en ziet de eigen taken.
2. Klant filtert optioneel op status — interactie [L.1](../schermen/mijn-taken.md#interacties).
3. Klant sorteert optioneel op vervaldatum — interactie [L.3](../schermen/mijn-taken.md#interacties).
4. Klant klikt een rij aan — interactie [L.2](../schermen/mijn-taken.md#interacties) — en komt op [`SCR-TAKEN-IN-CONTEXT`](../schermen/taken-in-context.md).
5. Klant leest de toelichting en eventuele bijlagen.

## Alternatieve flows

- **R2 — Geen taken beschikbaar:** `SCR-MIJN-TAKEN` toont een lege-staat melding; er zijn geen rijen om op te klikken.
- **R3 — Klant paginateert:** de klant laadt de volgende pagina resultaten via interactie [L.4](../schermen/mijn-taken.md#interacties).
- **R4 — Taken in context:** de klant benadert [`SCR-TAKEN-IN-CONTEXT`](../schermen/taken-in-context.md) vanuit een zaak, product of ander object (bijv. via een deeplink vanuit MijnZaken of een erfpachtportaal). De lijst is vooraf gefilterd op het gerelateerde object via `GET /taken?object={urn}`. De klant ziet alleen de taken die bij dat object horen en kan ze raadplegen en afhandelen zonder het overzicht van alle taken te zien.

## Resultaat

De klant heeft de inhoud van één taak gelezen en staat op `SCR-TAKEN-IN-CONTEXT`. Vanuit dit punt kan de klant [UC-02 Taak afhandelen](./uc-02-taak-afhandelen.md) starten.
