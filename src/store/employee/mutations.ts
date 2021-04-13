import { MutationTree } from 'vuex';
import { EmployeeStateInterface, EmployeeInterface } from './state';
import { SET_EMPLOYEE_LIST, SET_EMPLOYEE } from './constants';

const mutation: MutationTree<EmployeeStateInterface> = {
  [SET_EMPLOYEE_LIST](state: EmployeeStateInterface, employeeList:EmployeeInterface[]) {
    state.list = employeeList;
  },
  [SET_EMPLOYEE](state: EmployeeStateInterface, employee:EmployeeInterface) {
    state.employee = employee;
  },
};

export default mutation;
