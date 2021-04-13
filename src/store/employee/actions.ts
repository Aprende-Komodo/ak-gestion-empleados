import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { EmployeeStateInterface, IdentificationTypeEnum, EmployeeInterface } from './state';
import { GET_EMPLOYEE_LIST, SET_EMPLOYEE_LIST, DELETE_EMPLOYEE, SELECT_EMPLOYEE, SET_EMPLOYEE, SAVE_EMPLOYEE } from './constants';

/* Temporal */
const list = [
  {
    id: 1,
    firstname: 'Aprende',
    middlename: 'A',
    firstSurname: 'Komodo',
    secondSurname: 'K',
    birthdate: '2020/04/13',
    identificationType: IdentificationTypeEnum.cc,
    identificationNumber: '2314531',
    salary: 3000.0,
    photo: ''
  },
  {
    id: 2,
    firstname: 'Carl',
    middlename: 'Daniel',
    firstSurname: 'Michael',
    secondSurname: 'Wayne',
    birthdate: '2020/04/13',
    identificationType: IdentificationTypeEnum.ce,
    identificationNumber: '31354154',
    salary: 5000.0,
    photo: ''
  },
  {
    id: 3,
    firstname: 'Alex',
    middlename: 'Junior',
    firstSurname: 'Wesker',
    secondSurname: 'Parker',
    birthdate: '2020/04/13',
    identificationType: IdentificationTypeEnum.otro,
    identificationNumber: 'PAS21351454',
    salary: 2500.0,
    photo: ''
  },
];

const actions: ActionTree<EmployeeStateInterface, StateInterface> = {
  [GET_EMPLOYEE_LIST]({ commit }) {
    // await peticion
    commit(SET_EMPLOYEE_LIST, list);
  },
  async [DELETE_EMPLOYEE]({ dispatch }, id: number) {
    console.log('employee_id', id);
    // await peticion
    await dispatch(GET_EMPLOYEE_LIST);
  },
  async [SELECT_EMPLOYEE]({ commit }, id: number) {
    // await peticion
    commit(
      SET_EMPLOYEE,
      list.find(employee => employee.id === id)
    );
  },
  async [SAVE_EMPLOYEE]({ dispatch }, employeeData: EmployeeInterface) {
    // await peticion
    console.log(SAVE_EMPLOYEE, employeeData);
   await dispatch(SELECT_EMPLOYEE, employeeData.id);
  }
};

export default actions;
