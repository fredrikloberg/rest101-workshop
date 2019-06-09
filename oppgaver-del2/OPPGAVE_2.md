# Oppgave 2


## a)
Den observante fotballelskeren innser kanskje at resultater mangler. Det er fordi all data kommer fra en statisk fil som vi ikke har oppdatert enda.
For å få med resultater kan du enten være han kisen som oppdaterer resultater hvert minutt av VM. Eller så kan du være den typen som benytter seg av noen andre sine data.

På `https://fotballfest.herokuapp.com/api/matches` kan dere hente ut kamper med resultat.
Benytt endepunktet for å hente ut kamper i stedet for å benytte den statiske JSON-filen. 

OBS!
Tjenesten benytter Basic Auth (Brukernavn/Passord: kontraskjaeret/Sommerjobb2018).
Mye av hverdagen består i å google, så du kan like godt begynne i dag.

## Hint: 
* JSONP er ikke lov å benytte
* Prinsippet om at http://vg.no ikke kan gjøre requester til http://dagbladet.no gjelder ikke for server-til-server-kommunikasjon

## b)

Det er vanskelig å planlegge å dra på Kontraskjæret uten å vite hvilket vær som er meldt. 
På https://fotballfest-test.herokuapp.com/api/weather kjører et vær-API. Dette API-et forventer en query-param som heter time og består av et URIEncoded tidsstempel. Lag et API og tilhørende frontend for å hente ut været for en gitt kamp. 

