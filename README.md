# React-kurs for Koseprogg
Laget med CodeSandbox

## Intro

React er et bibliotek til JavaScript. Syntaksen minner om en blanding av JavaScript og HTML, som man kan se i kodesnuttene lenger ned. Noe av det kuleste med React er at det lar deg lage *single page applications*. Om man kun bruker vanlig JavaScript, HTML og CSS må man ofte ha flere forskjellige filer for å vise de forskjellige delene av nettsiden. For eksempel `index.html`, `profile.html`, `user.html` og så videre.

Dette er ikke nødvendigvis et problem, men det legger ikke til rette for at de forskjellige undersidene snakker sammen. Man laster én side om gangen, og den siden har kun informasjon om seg selv. React, derimot, legger til rette for at de forskjellige undersidene vet hva som skjer på de andre sidene, og lar deg bruke den informasjonen til å *oppdatere alle sider fortløpende*. Om man har vanlige statiske filer må man lage kompliserte funksjoner for å oppdatere alle andre deler av siden når det skjer en endring. Om man skriver React riktig gjør den alt det for deg, helt magisk. 

Når en endring skjer i programmet eller DOM-en, vil React finne ut hvor mye den trenger å re-rendre på grunn av endringen. Deretter endrer den *kun den delen av siden der endringen gjør noe forskjell*. Se bildet under: 

<img src="https://i.stack.imgur.com/I9sFR.gif" />

Her ser man at kun HTML-elementet med klokkeslettet re-rendres, ikke hele siden. Dette er en av grunnene til at React fungerer såpass bra som det gjør. 

## Komponenter
React er bygget opp av komponenter som snakker sammen. En komponent er en del av et hierarki, og kan sende informasjon opp og ned i hierarkiet. Slik kan en komponent se ut:

```
const App = () => {
  return (
    <div>
      <h1>Hei, koseprogg!</h1>
    </div>
  );
}

export default App;
```

Informasjonsflyten mellom komponenter er noe av det som gjør React *genialt*, men å forstå hvordan det fungerer kan være en liten kneik å komme over. Vi prøver vårt beste på å forklare det. 

Informasjon kan sendes nedover ved hjelp av **props** og oppover ved hjelp av **callbacks**. 
Et eksempel på hvordan man sender ned et prop kan være:\
\
`<Button title={"Legg til post"} onClick={handleButtonPress} />` \
\
I kodesnutten over er altså `title` og `onClick` det vi kaller for props. Man deklarerer komponenten på samme måte som i HTML, og man legger til props i React på samme måte som man legger til attributter i HTML. 

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

Komponenten `App` vi definerte tidligere kan nå se slik ut:

```
const App = () => {

  const handleButtonPress = () => {
      if (verify(username) && verify(password)) {
        loginUser(username, password);
      } else {
        alert('Username or password is incorrect!);
      }
  };

  const colorChanged = (color) => {
      setColor(color);
  };

  return (
    <div>
      <h1>Hei, koseprogg!</h1>
      <ColorPicker onColorChange={colorChanged} />
      <Button title={"Legg til post"} onClick={handleButtonPress} />
    </div>
  );
}

export default App;
```

**Merk at vi ikke skriver `onColorChange={colorChanged(color)}`!** 

Når man sender en funksjon nedover som et prop sender man *pekeren* til funksjonen, og da trenger man ikke definere hvilke argumenter funksjonen tar inn. Derimot er man nødt til å kalle funksjonen med de riktige argumentene når man bruker den *i datterkomponenten*.

For å bruke et prop i en datterkomponent må vi sende inn props som et argument når vi lager komponenten, og kalle propet. O eksempelet over ville vi i datterkomponenten skrevet `props.onColorChange('red');`

Det første vi skal gjøre er å lage en Header-komponent, og sende ned en tittel. 

### Oppgave 1: Header-komponenten
I samme mappe som komponenten `App`, lag en ny fil som heter `Header.js`.
Når vi lager en React-komponent er vi nødt til å importere React inn i JavaScript-fimen. Dette gjør man ved å skrive

```
import React from "react";
```

i toppen av fila. Gjør dette før du lager komponenten.

I dette kurset skal vi lage funksjonelle komponenter, de kan deklareres på denne måten:

```
const Header = (props) => {
    return ();
};

export default Header;
```

`export default Header` betyr at Header-komponenten er det som blir importert av andre JavaScript-filer som importerer Header.js-fila. 


**Oppgave 1a: Bruk det du kan av HTML-syntaks, og få Header til å returnere en `<div>` med en `<h1>` inni**
<details>
  <summary>Hint</summary>
  
  ```
  const Header = (props) => {
    return (
        <div>
            ...
        </div>
    );
  };
  ```
</details>

**Oppgave 1b: Få `<h1>` til å ta inn en tekst fra props.
    
#### Oppgave 2: 
