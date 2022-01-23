# Lector RSS para Intelygenz

## Introducción

Esta prueba técnica consiste en implementar un lector RSS básico.

<br>

## Tabla de contenidos

* [Prueba técnica](#prueba-tecnica)
* [Revisión](#revision)
* [Tecnologías](#tecnologias)
* [Estructura](#estructura)
* [Ejecución](#ejecucion)

<br>

## Prueba tecnica 

El lector RSS debe contar con las siguientes características:
- La pantalla principal de la aplicación será un listado de noticias ordenadas por fecha (o por algún campo que
devuelva el RSS).
- Cada fila debe contener el título, una descripción de no más de dos líneas y la imagen de la noticia
correspondiente.
- Al seleccionar una fila se debe abrir una pantalla con el detalle de la noticia.
- La pantalla de detalle contendrá el título, la descripción completa y la imagen de la noticia.
- En caso de utilizar librerías externas de terceros, justificar brevemente el motivo de cada una.
- El origen de datos es libre: cualquier feed JSON Feed o xml dinámico online. Como por ejemplo el feed de Xataka
Android ( http://www.xatakandroid.com/tag/feeds/rss2.xml )
- Se debe crear un repositorio gratuito en GitLab (https://gitlab.com/) Github (https://github.com/) o Bitbucket
(https://bitbucket.org/) y hacer buen uso de la herramienta para la elaboración y evolución del código de la App
Lector RSS.

Se darán puntos adicionales por:
- Buscar en el listado de noticias por título.
- Breve descripción de los patrones de diseño utilizados y motivo de su uso.
- Realizar tests.
- Añadir funcionalidad básica extra.
- Crear un buen README.md
- El aspecto gráfico de la app, puedes añadir si quieres cualquier librería de componentes o de CSS.
Se valorará especialmente:
- Corrección del código: organización de métodos y clases, reutilización de componentes, arquitectura,
dependencias, posibilidad de escalado futuro.
- Comentarios y mantenibilidad del código.

<br>

## Revision

En esta prueba he desarrollado un buscador de feeds que admite urls acabadas en rss, xml y rss aunque se podría modificar para admitir otras opciones.

He intentado no usar ninguna librería externa para tratar URLs y formularios para evitar aumentar el peso y para demostrar que puedo realizar la gestión de estas tareas.

He seguido algunos de los métodos organizativos sugerido por desarrolladores más experimentados en diversos blogs, dado que, por lo que he leído, no hay un consenso generalizado.

Mi intención era realizar componentes lo más reusables posible con el conocimiento que tengo. Están hechos específicamente para los atributos esperados para esta prueba pero son fácilmente extendibles cuando se requieran ampliar las funcionalidades.

Los componentes y páginas están en organizados en carpetas por la posibilidad de añadir los archivos de tests y archivos de estilos dentro de la unidad que representa el componente aunque finalmente, con Bootstrap, un poco de css en linea y en App.css he añadido el estilo dentro del tiempo que tenía.

He extraido las funciones con la lógica de mapeo de la información requerida para el feed (título, descripción e imagen) en utils/feeds.js porque me parecía que quedaba un componente más limpio y quedaba todo más ordenado.

En este README, en los títulos faltan los acentos para que coja el hipervínculo interno de la sección "Tabla de contenidos"

Para mi, ha sido un gran desafío y me he resultado complicado en varios puntos:
- Particularmente dificil gestionar los XML ya que dependiendo del sitio url al que se hicera la solicitud, la respuesta XML venía con ciertos campos con HTML embebido con muchos espacios en blanco entre tags y de mil formas diferentes, como por ejemplo con CDATA.
- No he conseguido obtener ningún ejemplo de url para JSON feeds con imagenes por lo que no he podido realizar todas las pruebas y lo he realizado acorde la estructura oficial en https://www.jsonfeed.org/version/1.1/.

Por falta de tiempo, no he realizado en el momento de la entrega tests unitarios ni funcionalidad de la búsqueda de noticias por títulos.

Soy consciente de que aún le queda trabajo pero lo he hecho lo mejor que podido en el tiempo que he tenido.

<br>

## Tecnologias

    "@testing-library/jest-dom": "^5.14.1"
    "@testing-library/react": "^12.0.0"
    "@testing-library/user-event": "^13.2.1"
    "bootstrap": "^5.1.3"
    "react": "^17.0.2"
    "react-dom": "^17.0.2"
    "react-scripts": "^3.0.1"
    "web-vitals": "^2.1.0"

<br>

## Estructura

```
public/
src/
|_ App.js
|_ App.css
|_ App.test.js
|_ index.js
|_ reportWebVitals.js
|_ setupTests.js
    |_ components/
        |_ Buttons/
            |_ Button.jsx
        |_ Feed/
            |_ Feed.jsx
        |_ Forms/
            |_ Form/
                |_ Form.jsx
            |_ InputForm/
                |_ InputForm.jsx
            |_ RSSUrlForm/
                |_ RSSUrlForm.jsx
        |_ Title/
            |_ Title.jsx
    |_ pages/
        |_ FeedDetailedPage/
            |_ FeedDetailedPage.jsx
        |_ HomePage/
            |_ HomePage.jsx
    |_ utils/
        |_ feeds.js
        |_ strings.js

``` 
<br>

## Ejecucion

Desde la carpeta principal (basic-rss-reader-intelygenz):
```
npm install
```
Con esto se instalaran las dependencias, y para ejecutar la app:
```
npm start
```