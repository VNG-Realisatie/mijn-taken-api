---
sidebar_position: 8
---

# Vragen

## Taken functioneel

- Kunnen taken ook geweigerd worden
- Kunnen taken ingetrokken worden
- Kunnen er meer dan 1 tak(en) in context zijn?
- Wat gebeurt er als de termijn verstrijkt?
- Hebben alle taken een termijn?
- Is er een vernietigingsdatum? En is dat afhankelijk van de status?
- Wat willen we met uitgevoerde taken? Kun je die terugzien? Is dit contextafhankelijk (m.a.w. kun je bij een product ook zien dat je je betaling hebt uitgevoerd?)
- Kom je na het uitvoeren van een taak altijd terug op de plek waar je deze begon uit te voeren? Dus als je een taak uitvoert bij LO, kom je dan terug bij MO.
- Is er een resultaatscherm? Ook voor negatieve resultaten?
- Is de scope beperkt tot taken die aan zaken hangen?
- Moeten we kijken naar een ondertekentaak? / Toestemming geven-taak
- Gaat een taak (behorende bij een zaak) zelfstandig in het “Recent” overzicht getoond worden, of wordt dit weergegevens als een wijziging op een zaak? Indien de taak zelfstandig wordt weergegeven, is het dan – enkel op basis van de omschrijving – altijd duidelijk genoeg op welke zaak de taak betrekking heeft?
  Voorbeeld: Een burger heeft twee aanvragen voor parkeervergunningen lopen, voor twee verschillende auto’s. Twee taken voor het uploaden van een kentekenbewijs worden toegewezen. Is het duidelijk welke taak bij welke vergunningsaanvraag hoort?

## Betaling

- Waar keer je naartoe terug als de betaling is uitgevoerd?
- Wat voor soorten exception schermen zijn er (definitief fout, probeer opnieuw?)
- Is er geen staging area?

## Bestandsupload

- Is er een staging area? _Wij nemen aan van wel_
- Zijn meerdere bestanden uploaden in scope? _Ja_
- Kun je een overzicht zien van geuploade bestanden? In het scherm van de zaak of andere context? _Ja, bij de context waar het betrekking op heeft_
- Moet je je in te leveren bestanden kunnen editen?
- Zijn er taken waarbij er maar 1 bestand bij mag?
- Bestandseisen: maximale grootte, formaten, etc.?
- Hoe dekken we veiligheid af?

## Technisch

- Moet MO een resultaat kunnen tonen nadat je terug geredirect wordt naar MO (zowel via redirect als cloudevent?)
- Lossen we CORS op met proxies of anders?

## Schermen

- Eenvoudige herauthenticatie / DigiD flow
- Taak volbracht / bevestiging? Alleen bij MO of ook bij LO (waarschijnlijk niet wenselijk).
- Als je een taak hebt uitgevoerd bij LO, wordt je dan geredirect naar MO?
- Als het niet gelukt is om een taak uit te voeren? Popup / modal / nonmodal informatie?
- Overzichtsscherm MijnOverheid (TODO achtig scherm)
- Bestandsuploadscherm. Commentaar bij bestand(en).
- Flow van formulieren bij gemeent(en)

## Out-of-scope

- Centrale takenlijst / takenregister. Zelfde als met zaken

## Ideeën

# Scope MijnOverheid

- Scope is beperkt tot de taken die aan zaken gekoppeld zijn.
- Meertaligheid (EU)
- Overstap tussen portalen is ongewenst
- Formuliertaken
  - flow builder
  - validatie
  - verrijking van data (adres op basis van postcode e.g.). Prefilling
  - governance. goedgekeurd / door een teststraat / digital signature?

# Brainstorm naamgeving

Intraportaal
Binnen één portaal - ook de gewenste scenario
Binnenportaals

Interportaal
Tussen portalen - van een andere gemeente of bank
Tussenportaals

Eén omgeving - wisselende omgevingen
deeplink = portaalwissel

---
