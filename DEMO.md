# DEMO

## React from scratch

Le code minimal pour utiliser ReactJs.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Don't use this in production: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
    
      function MyApp() {
        return <h1>Hello, world!</h1>;
      }

      const container = document.getElementById('root');
      const root = ReactDOM.createRoot(container);
      root.render(<MyApp />);

    </script>
    <!--
      Note: this page is a great way to try React but it's not suitable for production.
      It slowly compiles JSX with Babel in the browser and uses a large development build of React.

      Read this page for starting a new React project with JSX:
      https://react.dev/learn/start-a-new-react-project

      Read this page for adding React with JSX to an existing project:
      https://react.dev/learn/add-react-to-an-existing-project
    -->
  </body>
</html>
```

## Créer une application React

- Pré-requis :
  - NodeJs et Npm

>- [Créer une application React](https://create-react-app.dev/docs/getting-started)

## Créer des composants
- JSX
- Style en ligne
- ClassName

## Les props
- Déstructuration
- Props pilling
## Le state
- useState()
- Affichage conditionnel
## Gestion du CSS
- import d'un fichier css