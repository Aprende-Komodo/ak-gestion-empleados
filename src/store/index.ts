import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import employeeModule from './employee/index';

// import example from './module-example';
// import { ExampleStateInterface } from './module-example/state';
import { Store } from 'vuex';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  example: unknown;
}

let myStore: Store<StateInterface>;

export default store(({ Vue }) => {
  Vue.use(Vuex);
  const Store = new Vuex.Store<StateInterface>({
    modules: {
      employee: employeeModule
    },
  
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  });
  myStore = Store;
  return Store;
});

export { myStore }