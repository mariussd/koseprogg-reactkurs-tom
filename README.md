# React-kurs for Koseprogg
Laget med CodeSandbox

## Komponenter
React er bygget opp av komponenter som snakker sammen. En komponent er en del av et hierarki, og kan sende informasjon opp og ned i hierarkiet. Informasjon kan sendes nedover ved hjelp av **props** og oppover ved hjelp av **callbacks**. 

Et eksempel på hvordan man sender ned et prop kan være:\
\
`<Button title={"Legg til post"} onClick={handleButtonPress} />` \
\
Man deklarerer komponenten på samme måte som i HTML, og man legger til props i React på samme måte som man legger til attributter i HTML. I kodesnutten over er altså `title` og `onClick` det vi kaller for props.

I et prop kan man også sende ned **funksjoner**. Dette er det vi kaller for **callbacks**. Om man sender en funksjon ned som et prop, gir man datter-komponenten mulighet til å kjøre denne funksjonen *i moderkomponenten*. 

Ta kodesnutten over som et eksempel. Her sender vi ned funksjonen `handleButtonPress` til `Button`-komponenten. Dette er fordi vi kanskje har lyst til å gjøre noe spesielt i moderkomponenten når knappen trykkes på. `handleButtonPress` kan, for eksempel, se sånn ut:

```
const handleButtonPress = () => {
    if (verify(username) && verify(password)) {
      loginUser(username, password);
    } else {
      alert('Username or password is incorrect!);
    }
};
```

Her logger vi inn brukeren når login-knappen blir trykket på. Callbacks kan også ta inn *argumenter*, slik som dette:

```
const colorChanged = (color) => {
    setColor(color);
};

<ColorPicker onColorChange={colorChanged} />
```

**Merk at vi ikke skriver `onColorChange={colorChanged(color)}`!** Når man sender en funksjon nedover som et prop sender man *pekeren* til funksjonen, og da trenger man ikke definere hvilke argumenter funksjonen tar inn. Derimot er man nødt til å kalle funksjonen med de riktige argumentene når man bruker den *i datterkomponenten*.

Det første vi skal gjøre er å lage en Header-komponent, og sende ned en tittel. 

### Oppgave 1: Header-komponenten
Når vi lager en React-komponent er vi nødt til å importere React inn i JavaScript-fimen. Dette gjør man ved å skrive

```
import React from "react";
```

i toppen av fila. Gjør dette før du lager komponenten.
