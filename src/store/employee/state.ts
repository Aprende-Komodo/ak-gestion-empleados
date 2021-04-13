export enum IdentificationTypeEnum {
  cc = 'cc',
  ce = 'ce',
  otro = 'otro',
}

export interface EmployeeInterface {
  id?: number; 
  firstname: string;
  middlename: string;
  firstSurname: string;
  secondSurname: string;
  birthdate: string;
  identificationType: IdentificationTypeEnum;
  identificationNumber: string;
  salary: number;
  photo?: string;
}

export interface EmployeeStateInterface {
  list: EmployeeInterface[];
  employee: EmployeeInterface;
}

function state(): EmployeeStateInterface {
  return {
    list: [],
    employee: {
      id: 0,
      firstname:'',
      middlename:'',
      firstSurname:'',
      secondSurname:'',
      birthdate: '',
      identificationType: IdentificationTypeEnum.cc,
      identificationNumber:'',
      salary: 0,
      photo:'',
    }
  };
}

export default state;
