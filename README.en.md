
# Siami WaterPark✨👙

[Leer esto en español](https://github.com/OrnellaGrigolato/Siami_WaterPark/blob/main/README.md)

Siami Water Park is a SPA promoting a water park. It functions as e-commerce, for the sale of tickets and services.

<br/>

## Application running

![Siami WaterPark running](https://github.com/OrnellaGrigolato/Siami_WaterPark/blob/main/Siami_Waterpark_Running.gif)

<br/>


## Features & Technical Details

- Filter by category.
- List of advantages.
- Product list: product overview with photo and partial details.
- Details view: view with all product details.
- Purchase process in steps.
- Instant feedback.
- Validation of all data in the purchase form using regular expressions.
- Mobile-friendly interface.
- Use of Context to store and pass information.
- Product data stored in [Firebase](https://firebase.google.com/?hl=es), call to its API to display it to the user.

<br/>

## How I worked on this project

My goal was to simulate a professional working environment 👩🏻‍💻. 

- I created a brand identity, including name, logo and colour palette.

- I separated each requirement into sub-tasks.

- I wrote tidy and reusable code, separated components into folders and commented out sections that required it.

<br/>

## How to navigate through this project: its most interesting parts

Validation of the purchase form: [Code](https://github.com/OrnellaGrigolato/Siami_WaterPark/blob/6080d7c79efe2eb827ed070951a825c95bff67e6/src/Components/Cart/Cart.js#L112)

Shopping cart and how it works: [Code](https://github.com/OrnellaGrigolato/Siami_WaterPark/blob/6080d7c79efe2eb827ed070951a825c95bff67e6/src/Components/Cart/Cart.js#L58)

The Context: [Code](https://github.com/OrnellaGrigolato/Siami_WaterPark/blob/6080d7c79efe2eb827ed070951a825c95bff67e6/src/Context/CartContext.js#L4)

Api call: [Code](https://github.com/OrnellaGrigolato/Siami_WaterPark/blob/6080d7c79efe2eb827ed070951a825c95bff67e6/src/Container/ItemDetailContainer/ItemDetailContainer.js#L16)

<br/>

## Why I built the project this way ❔
This project required a library like React because of its benefits. React allowed me to create reusable components, saving me time and effort. It also makes maintaining a project of this size much easier.
The use of State and Context made it easy for me to manage and update information. 
React Router helped me create the routing for this application, it made filtering the different products much easier to develop.
Storing the product information in Firebase reduced the load on the project and improved performance.

<br/>

## What else would I add to this project? 🚀

* Ability to view purchase history by storing information in Local Storage or Firebase.
* Administrator interface, to add/remove/modify products as required and facilitate maintenance.
* The ability to register to create a blog to share photos, comments and opinions.

<br/>

## Dependencies

Using [Ant Design](https://ant.design/) to style the application and access useful components.

Using [React Router Dom](https://reactrouter.com/) for navigation.

Using [Frammer Motion](https://www.framer.com/motion/) to add animations.

Using [Formik](https://formik.org/) to facilitate form validation and error handling.

Using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to improve code quality.

## Installation

1. Fork and clone the repository.

2. At the root of the project, run the command

   ```
   npm install
   ```
   to install all project dependencies.

3. Use 

   ```
   npm start
   ```

   to run the project, which will be available at http://localhost:3000


### Author

Ornella Grigolato

2022


