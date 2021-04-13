import { myStore } from 'src/store';
import { GET_EMPLOYEE_LIST, SELECT_EMPLOYEE } from 'src/store/employee/constants';
import { Route, NavigationGuardNext } from 'vue-router';

const beforeEnter = async (
  to: Route,
  from: Route,
  next: NavigationGuardNext<Vue>
) => {
  await myStore.dispatch(`employee/${GET_EMPLOYEE_LIST}`);
  next();
};

const beforeEnterEmployee = async (
  to: Route,
  from: Route,
  next: NavigationGuardNext<Vue>
) => {
  await myStore.dispatch(`employee/${SELECT_EMPLOYEE}`, parseInt(to.params.id));
  next();
};

export { beforeEnter, beforeEnterEmployee };
