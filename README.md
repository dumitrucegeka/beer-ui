# About the app

A simple React app which allows you to search, view details, rate beers provided by a free external api: https://api.punkapi.com/v2/
Application was deployed at https://dumitrucegeka.github.io/beer-ui/ using gh-pages.

The goal of the app is to showcase a simple end to end application written in React with typescript and material ui components.

The app allows searching by two predefined search criteria: name and food pairing at the moment.
Changing the value of the Search criteria dropdown will change the params with which the api is called.
The user has the possibility to rate or add a certain item to favourites.
The application interface can be configured via the sidemenu.
The possible parameters that can be changed are:
- Theme(dark or Light mode)
- View mode(List view or Grid view)
- Three predefined item filters(All - no filter, Favourites and Rated)

For api interactions axios was used.
Components from Material UI were imported and used.
Application deployed using gh-pages.

Feel free to explore some of the world's finest craft beers and why not, try them responsibly
Made by Dumitru Cernei and Radu Luca

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`
We are using react testing library for the first tests but we plan to introduce jest for future testing

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run deploy`

Deploys the application using github pages.

