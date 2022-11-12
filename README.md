# Siami WaterPark✨👙

[Read this in english](https://github.com/OrnellaGrigolato/Siami_WaterPark/blob/main/README.en.md)

Siami WaterPark es una SPA de promoción de un parque acuático con función de e-commerce para la venta de entradas y servicios.

<br />

## Aplicación en funcionamiento

![Siami WaterPark en funcionamiento](https://github.com/OrnellaGrigolato/Siami_WaterPark/blob/main/Siami_Waterpark_Running.gif)

<br />

## Características y Detalles Técnicos

- Filtro por categorías.
- Listado de ventajas.
- Listado de productos: vista general de productos con foto y detalles parciales.
- Vista de detalles: vista con todos los detalles del producto.
- Proceso de compra en pasos.
- Feedback instantáneo
- Validación de todos los datos del formulario de compra.
- Interfaz adaptable a móviles.
- Uso de Context para almacenar y pasar información. 
- Llamada a la API de [Unsplash](https://unsplash.com/es) para utilizar fotos en una galería de imágenes.
- Datos de los productos almacenados en [Firebase](https://firebase.google.com/?hl=es), llamada a su API para mostrarlos al usuario.

<br />

## Cómo trabajé en este proyecto

Mi objetivo era simular un entorno de trabajo profesional 👩🏻‍💻. 

- Creé una identidad de marca, incluyendo nombre, logo y paleta de colores.

- Separé cada requerimiento en subtareas.

- Escribí código ordenado y reutilizable, separé componentes en carpetas y comenté secciones que lo requerían.

<br />

## Cómo navegar por este proyecto: sus partes más interesantes

Validación del formulario de compra: 

Carrito de compra y su funcionamiento:

El Context:

Llamada a Api:

<br />

## Por qué construí el proyecto de esta manera ❔
Este proyecto requería de una librería como React debido a sus ventajas. React me permitió crear componentes reutilizables, ahorrándome tiempo y trabajo. Además, hace que el mantenimiento de un proyecto de esta escala sea algo mucho más sencillo.
El uso del State y el Context de React me facilito el manejo y actualización de la información. 
React Router me ayudo a crear el enrutamiento de esta aplicación, hizo que el filtro de los distintos productos sea mucho más fácil de desarrollar.
Almacenar la información de los productos en Firebase redujo la carga del proyecto, mejorando el rendimiento.

<br />

## Que más agregaría a este proyecto? 🚀

* Posibilidad de ver historial de compras almacenando la información en el Local Storage o en Firebase.
* Interfaz de administrador, para agregar/quitar/modificar productos en caso de ser necesario y facilitar el mantenimiento.
* Posibilidad de registrarse, para la implementación de un blog donde compartir fotos, comentarios y opiniones.

<br />

## Dependencias

Uso de [Ant Design](https://ant.design/) para dar estilo a la aplicación y acceder a componentes de utilidad. 

Uso de [React Router Dom](https://reactrouter.com/) para la navegación.

Uso de [Frammer Motion](https://www.framer.com/motion/) para agregar animaciones.

Uso de [Formik](https://formik.org/) para facilitar la validación de formularios y el manejo de errores.

Uso de [ESLint](https://eslint.org/) y [Prettier](https://prettier.io/) para mejorar la calidad del código.

<br />

## Instalación

1. Forkeá y cloná el repositorio

2. Parado en la raíz del proyecto corré el comando 

   ```
   npm install
   ```

    para instalar todas las dependencias del proyecto

3. Usá 

   ```
   npm start
   ```

    para correr el proyecto, que estará disponible en http://localhost:3000

<br />

### Autor

Ornella Grigolato

2022




