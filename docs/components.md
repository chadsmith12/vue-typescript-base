## Basic

This project uses [vue-class-component](https://github.com/vuejs/vue-class-component) to make components. This uses TypeScript decorators so you can make class-style Vue Components.

### Quick Example

```
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class App extends Vue {
  // initial data
  msg = "Hello World";

  // lifecycle hook
  mounted () {
    this.sayHello()
  }

  sayHello() {
      console.log(this.msg);
  }
}
</script>
```

In this example we import in `Vue` and `Component` from `vue-class-component` and use the `@Component({})` define a component. We also have our component inherit from `Vue`. From using `vue-class-component` we get the following:

1.  `methods` can be declared directly as class member methods
2.  Computed properties can be declared as class property accessors
3.  Initial data can be declared as class properties
4.  All Vue lifecycle hooks can be declared directly as class members. They just cannot be invoked on the instance intself. This does mean that custom methods should avoid those reserved named.
5.  More options can be passed into the decorator function.

### Vue Property Decorator

This project also uses [Vue Property Decorator](https://github.com/kaorun343/vue-property-decorator), which fully depends on vue-class-decorator, to bring in 7 more decorators and 1 function. Using this we get the following decorators:

1.  `@Emit`
2.  `@Inject`
3.  `@Model`
4.  `@Prop`
5.  `@Provide`
6.  `@Watch`
7.  `@Component` - this is from vue-class-decorator
8.  `Mixins` - helper function called `mixins` provided by vue-class-decorator

You can read more about the usage of each of these on their github (linked above).

## Creating Components

Components are easy to create and the project even takes care of registering global components automatically.

The following shows an example of a component using features from both vue-class-component and vue-property-decorator:

```
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ExampleComponent from "@/views/example/ExampleComponent.vue";

// notice how we can define what components this component knows about in the decorator
// We can just use this component in this components template.
@Component({
 components: {
   ExampleComponent
 }
})
export default class Example extends Vue {
   // We can now use the @Prop decorator to define properties
   @Prop({ type: String, default: "Example" }) msg!: string;

   // directly declare data.
   isExample: boolean = true;

   //we can created computed properties as property accessors
   get exampleString() {
       if(this.isExample) {
           return this.msg;
       }
       else {
           return "Not an example";
       }
   }
}
</script>
```

This very basic example component shows using different features that vue-class-component and vue-property-decorator give us.

### Global Components

While you can tell other components about what components that they can use inside the `@Component` decorator, there are times when we want to create components that will be used everywhere and need to be global. This project will automatically register global components to Vue.

To register a global component you just need to create your component inside of the `components` folder. Any components under that directory will automatically be reigstered to Vue as a global component. An example of a global component in the project already is the `Snackbar` component.

The core layout components are global components and are located at `components/core/`. These components are automatically registered with `Core` prefixed with them and can see them being used as `core-toolbar`.
