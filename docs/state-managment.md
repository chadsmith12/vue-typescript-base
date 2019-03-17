## Basic

Vuex is installed and is used as the state managment pattern across the project. This serves as a centrailized store for all components in the project with rules to ensure that the state is only mutated in a predictable fashion.

Vuex is inspired by Flux, Redux, and the Elm Architecture. While the pattern is based on these, Vuex is a library implemtantion tailored specifically for Vue.Js so it can take advantage of the reactivity system for efficient updates.

## You can learn more about Vuex its website, [here](https://vuex.vuejs.org).

### Marrying with TypeScript

We use [vuex-module-decorators] to make Vuex modules a breeze. Vuex Module Decorators uses is inspired by `vuex-class-component` You used to have to do the following to make modules:

```
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA
  }
})
```

when you use the Vuex Module Decorators you no longer have to do that. The following is a simple module.

```
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module
export default class CounterModule extends VuexModule {
  // our count state
  count = 0

  // define mutations to mutate the state.
  @Mutation
  increment(delta: number) {
    this.count += delta
  }
  @Mutation
  decrement(delta: number) {
    this.count -= delta
  }

  // action 'incr' commits mutation 'increment' when done with return value as payload
  @Action({ commit: 'increment' })
  incr() {
    return 5
  }
  // action 'decr' commits mutation 'decrement' when done with return value as payload
  @Action({ commit: 'decrement' })
  decr() {
    return 5
  }
}
```

### Dynamic Modules

We can event register modules into the store at runtime. So we can define dynamic modules. When we define a dynamic module, the module will register itself automatically. All we have to do is pass in the store that the module will be injected into. The example below is the Snackbar module that is used across the project to manage snackbars.

```
// we say the module is dynamic, and we must give it a name
@Module({ dynamic: true, store, name: "snackbar" })
export default class SnackBarState extends VuexModule {
  public snackBar = new SnackbarMessage(SnackbarType.Success, "");

  /**
   * Shows a snackbar to the user of the type and message passed in.
   * @param payload The snackbar mesasge
   */
  @Mutation
  public SHOW_SNACKBAR(payload: SnackbarMessage): void {
    this.snackBar.message = payload.message;
    this.snackBar.snackBarType = payload.snackBarType;
    this.snackBar.isShown = true;
  }

  /**
   * Hides the snackbar that was currently being shown to the user.
   */
  @Mutation
  public HIDE_SNACKBAR(): void {
    this.snackBar.resetSnackbar();
  }
}

export const SnackbarModule: SnackBarState = getModule(SnackBarState);
```

### Learning More

You can learn more abot Vuex-Module-Decorators and how it is used [here](https://championswimmer.in/vuex-module-decorators/).
