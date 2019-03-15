# Vue Typescript Base

Vue Typescript Base is a base project for Vue and TypeScript that is made to marry [aspnetboilerplate](https://github.com/aspnetboilerplate/aspnetboilerplate) with Vue.
While a Vue base project with aspnetboilerplate was the main reason to create the project, the base project can easily be updated to work with any backend.

---

## Quick Setup

A more detailed guide on using this project will be provided later. Though you can easily get started by cloning the repo and then run `npm install`.

You can then use `npm run serve` to start the development server up.

---

## Folder Structure

Below is a quick layout/structure of the project, with some comments on what some of the folders are there for to help you easily navigate the project.

```
src
|____assets
|____components # the main components that can be shared across the applications
|____core # core models/classes used all around the project
|    |____entities #  provides core entities
|    |____interfaces # core interfaces for core entities
|    |____user-interface-models # Core models used to make some core components (like a Snackbar)
|
|____lib # helpers used across project
|____models # Models used as the data object inside of the views/components
|____plugins # VueCLI Plugins
|____router # where the different routes and router logic is defined
|____services # services to communicate with apis
|____store # vuex state managment store
|    |____modules # the individual store modules
|
|____styles # styles used in the application
|____views # the main views/pages in the application
|____App.vue # the main componented that gets mounted
|____main.ts # the applications entry point
|____tsconfig.json # config for the TypeScript language
|____vue.config.js # can be used to configure some webpack modules
```
