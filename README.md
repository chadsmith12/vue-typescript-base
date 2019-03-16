# Vue Typescript Base

Vue Typescript Base is a base project for Vue and TypeScript that is made to marry [aspnetboilerplate](https://github.com/aspnetboilerplate/aspnetboilerplate) with Vue.
While aspnetboilerplate was the main reason to create the project, the base project can easily be updated to work with any API.

## Technology/Frameworks

Below is a list of the main technology and frameworks that this project was built using.

- [Vue.Js](https://vuejs.org) - built using version 2.6.6
- [VueCLI](https://cli.vuejs.org) - Project originally generated with version 3.x
- [VueRouter](https://router.vuejs.org) - used to manage routing across the application
- [Vuex](https://vuex.vuejs.org) - used for state managment
- [TypeScript](http://www.typescriptlang.org)
- [Vuetify](https://vuetifyjs.com/en/)
- [vue-class-component](https://github.com/vuejs/vue-class-component) - TypeScript decorator for class style Vue Components
- [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) - Depends on vue-class-component and provides a few helper decorators
- [vuex-module-decorators](https://github.com/championswimmer/vuex-module-decorators) - TypeScript decorators to make Vuex modules easier
- [aspnetboilerplate](https://github.com/aspnetboilerplate/aspnetboilerplate) - Provides the base project/API for the server side code

**Special Thanks**
Specials thanks to creative-tim for providing the easy to use [Vuetify Material Dashboard](https://www.creative-tim.com/product/vuetify-material-dashboard). The base styling of the project and layout are based off this template.

---

## Quick Setup

A more detailed guide on using this project will be provided later. Though you can easily get started by cloning the repo and then run `npm install`.

You can then use `npm run serve` to start the development server up.

---

### Folder Structure

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
