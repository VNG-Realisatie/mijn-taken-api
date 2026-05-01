---
sidebar_position: 8
---

# Vragen

## Taken functioneel

**Is de scope beperkt tot taken die aan zaken hangen?**

Ja, voor MijnOverheid nu wel. Voor de MijnOmgeving is deze beperking er niet.

**Kunnen taken ook geweigerd worden?**

Nee.

**Kunnen taken ingetrokken worden?**

Ja.

**Worden taken altijd in context getoond?**

Ja, behalve in een overzichtspagina zoals Recent of MijnTaken.

**Kun je nog iets met een reeds uitgevoerde taak?**

Nee.

**Kunnen er meer dan 1 taak(en) tegelijkertijd uitgezet zijn voor dezelfde context?**

Ja.

**Wat gebeurt er als de termijn verstrijkt?**

Niets buiten een notificatie of visuele indicatie.

**Hebben alle taken een termijn?**

Nee — maar klopt dit wel?

**Is er een vernietigingsdatum? En is dat afhankelijk van de status?**

Nog onbeantwoord.

**Wat willen we met uitgevoerde taken? Kun je die terugzien? Is dit contextafhankelijk (m.a.w. kun je bij een product ook zien dat je je betaling hebt uitgevoerd?)**

Geen idee. Hoe doet LO dit?

**Kom je na het uitvoeren van een taak altijd terug op de plek waar je deze begon uit te voeren? Dus als je een taak uitvoert bij LO, kom je dan terug bij MO?**

Ja, terug naar waar je begon.

**Is er een resultaatscherm? Ook voor negatieve resultaten?**

Ja, dit is helder voor een gebruiker.

**Moeten we kijken naar een ondertekentaak / toestemming geven-taak?**

Ja, kan nog buiten scope blijven maar wel rekening mee houden in het technisch ontwerp.

**Gaat een taak (behorende bij een zaak) zelfstandig in het "Recent" overzicht getoond worden, of wordt dit weergegeven als een wijziging op een zaak?**

Ja, deze wordt weergegeven maar linkt naar de zaak. Onder de zaak zie je dan de taak.

**Indien de taak zelfstandig wordt weergegeven, is het dan — enkel op basis van de omschrijving — altijd duidelijk genoeg op welke zaak de taak betrekking heeft?**

Voorbeeld: Een burger heeft twee aanvragen voor parkeervergunningen lopen, voor twee verschillende auto's. Twee taken voor het uploaden van een kentekenbewijs worden toegewezen. Is het duidelijk welke taak bij welke vergunningsaanvraag hoort?

Deze taak wordt getoond onder de zaak. Maar de titel van de zaak is niet onderscheidend genoeg.

## Betaling

**Waar keer je naartoe terug als de betaling is uitgevoerd?**

Naar de plek waar je hem begon.

**Wat voor soorten exception-schermen zijn er (definitief fout, probeer opnieuw)?**

Nog uit te werken.

**Is er geen staging area?**

Klopt, selectie betaalmiddel etc. volgen later pas.

## Bestandsupload

**Is er een staging fase?**

Wij nemen aan van wel, zie beschrijving hieronder.

**Kun je per bestand optionele opmerkingen plaatsen?**

Ja, we nemen aan van wel.

**Kruisjes naast bestanden die al geüpload zijn?**

Ja, lijkt ons van wel.

**Bestand ook nog even in te zien?**

Nog onbeantwoord.

**Zijn meerdere bestanden uploaden in scope?**

Ja.

**Kun je een overzicht zien van geüploade bestanden? In het scherm van de zaak of andere context?**

Ja, bij de context waar het betrekking op heeft.

**Moet je je in te leveren bestanden kunnen editen (verwijderen en commentaar geven)?**

Ja, zie hierboven.

**Zijn er taken waarbij er maar 1 bestand bij mag?**

Nog onbeantwoord.

**Bestandseisen: maximale grootte, formaten, etc.?**

Nog onbeantwoord.

**Inline foto's uploaden?**

Out of scope, technisch mogelijk houden.

**Hoe dekken we veiligheid/virusscanner af?**

Niet, dat doet de ontvanger.

## Technisch

**Moet MO een resultaat kunnen tonen nadat je terug geredirect wordt naar MO (zowel via redirect als cloudevent)?**

Ja, zie ook het sequence diagram.

**Lossen we CORS op met proxies of anders?**

Nog uit te zoeken.

## Schermen

**Eenvoudige herauthenticatie / DigiD flow**

Nog uit te werken.

**Taak volbracht / bevestiging?**

Laat dit lijken op de betaalflow.

**Keer je na het uitvoeren van een taak terug naar de aanroepende applicatie?**

Ja.

Uit te werken schermen, onder andere:

- Als het niet gelukt is om een taak uit te voeren? Popup / modal / non-modal informatie?
- Overzichtsscherm taken (TODO-achtig scherm)
- Bestandsuploadscherm, inclusief commentaar bij bestand(en)
- Flow van formulieren bij gemeente(n)

:::note Huidige situatie
De API is opgezet als API-first: elke portaal kan de API aanroepen. Op dit moment is het recent-scherm alleen uitgewerkt voor MijnOverheid, en valt MijnTaken onder de Lokale Omgeving. In beide gevallen documenteren we de API-aanroep, zodat een Lokale Omgeving in de toekomst ook een eigen recent-scherm kan bouwen.
:::

## Out-of-scope

- Centrale takenlijst / takenregister — zelfde als met zaken
