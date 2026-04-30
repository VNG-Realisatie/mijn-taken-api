# [UC-01] Taak afhandelen

**Actor:** klant (burger of ondernemer)

**Doel:** een aan de klant toegewezen taak raadplegen en als afgerond markeren.

**Voorwaarden:**

- Klant is ingelogd in MijnOverheid of MijnOmgeving.
- Er is minstens één taak met status `open` of `in_behandeling` voor deze klant.

## Hoofdflow

1. Klant opent [`SCR-TAAK-LIJST`](../schermen/taak-lijst.md) en ziet de eigen taken.
2. Klant filtert optioneel op status — interactie [L.1](../schermen/taak-lijst.md#interacties).
3. Klant klikt een rij aan — interactie [L.2](../schermen/taak-lijst.md#interacties) — en komt op [`SCR-TAAK-DETAIL`](../schermen/taak-detail.md).
4. Klant leest de toelichting en eventuele bijlagen.
5. Klant klikt op _Afronden_ — interactie [D.1](../schermen/taak-detail.md#interacties) — en bevestigt de actie.
6. Systeem markeert de taak als `afgerond` en navigeert terug naar `SCR-TAAK-LIJST`.

## Alternatieve flows

- **A1 — Taak is al afgerond:** de knop _Afronden_ ([D.1](../schermen/taak-detail.md#interacties)) is niet zichtbaar; klant kan alleen raadplegen.
- **A2 — Conflict bij afronden:** de API geeft `409` (bv. status inmiddels gewijzigd door backend). UI toont een melding en herlaadt de taak.

## Resultaat

De taak heeft status `afgerond` en verdwijnt uit het standaardfilter _Open_ op
[`SCR-TAAK-LIJST`](../schermen/taak-lijst.md).
