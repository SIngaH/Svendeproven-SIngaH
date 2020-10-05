# Svendeprøvens Dokumentation

```bash
    Opgavens navn: Svendeproven-SIngaH
    Elev: Sigurros Inga Helgadottir
    Holdnummer: WU HF02
    Dato: 29/09/2020 - 05/10/2020
    Sidens url: http://localhost:8080/
    Url til login-formular: http://localhost:8080/admin.html
    Brugernavn: admin
    Adgangskode: $2a$15$C/P2eefzIlX.E2vUqjoBKeM9th6v796JCo0JBsyrkIwOt5rxYA.Vq
    Stack: gulp, ejs og sass
```

---

## Vudering af din egen indsats og gennemførsle af opgaveforløbet

    Jeg syns svendeprøven gik meget godt, jeg nåede næsten alt.
    Jeg syns i hvert faldt at jeg gjorde det meget godt.
    Der var kun et par ting jeg havde problemer med.
    Jeg havde problemmer med administrationssiden.
    Jeg syns det var lidt svært at POST og DELETE udefra en form, men jeg fik det til at virke.
    Jeg havde det også svært med at hente nyt token efter det gamle er udløbet, men jeg fik det til at virke.
    Udeover det havde jeg kun et lille problem, det var det jeg forklarer i kodeeksemplet nedenfor, det var noget jeg aldrig har gjort før men det virkede til sidst.

---

## Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

    I bliv frivillig sektionen havde jeg et andet problem, med flex så denne sektion underligt ud, så indeni min fetch lavede jeg mit grid. Jeg brugte result.length og dividerede det med 100 for at jeg kunne give min klasse gridTemplateRows = "repeat(3, 33%)" som ændres til (4, 25%) hvis man tilføjer en anden. Der var et lille problem med da man er kommet til en mindre størrelse, man skal genfriske siden for at layoutet ændres rigtigt, men jeg tænker, fleste mennesker ændrer ikke skærmstørrelsen på deres browser.

    I Dyr hos os sektionen skulle man gøre plads til at der kan komme flere dyr på listen, derfor lavede jeg det med grids. Jeg lavede grid rows til 10% auto, 10% for overskriften og auto som gør at der kan komme 100 til og den bliver ved med at lave plads til dem.

    For min slider brugte jeg billederne fra adoptsections fordi de var de eneste billeder som vil passe godt til en slider, man kan lave slider med de andre billeder men det ville ikke være lige så flot. Grunden til at jeg har sat slideren på kvitteringssiden er fordi der ender man hvis man vil afmelde nyhedsbrevet og slideren motiverer derfor kunden til ikke at afmelde nyhedsbrevet.

---

## Redegørelse for oprindelsen af evt. tredjeparts kode andvendt i opgaveløsningen

    Jeg brugte ikke nogen tredjeparts kode for at lave min side.

---

## En beskrivelse af særlige punkter til bedømmelse (supplerende kodeesempler skal indlejes markdown kode blokke)

    ```bash
        let d = new Date(dyr.createdAt)
        function days_passed(previous) {
          let current = new Date()
          return Math.ceil((current - previous) / 86400000)
        }
    ```
    I sektionen dyr hos os, er der et p element som siger hvor længe dyret har været hos dem, denne kode er hvordan jeg gør det.
    dyr.createdAt er det dato hvor dyret blev oprettet på APIet.
    Der hvor dagene skal være kalder jeg på funktionen med days_passed(d).
    Variablet current kigger på den dato der er i dag.
    Så bruger jeg Math.ceil for at runde op tallet hvor jeg trækker datoen på oprettelsen af dyret, fra datoen i dag og dividerer det med 86400000 som er en dag i sekunder.
    Så får jeg hvor mange dage dyret har været der ind i koden.

---

## Kanban link (trello)

Så har jeg også et kanban bord på trello: https://trello.com/b/4qWBh2bL
