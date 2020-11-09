# React-kurs for Koseprogg
Laget med CodeSandbox

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
