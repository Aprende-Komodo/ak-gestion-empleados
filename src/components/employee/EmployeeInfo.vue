<template>
  <div class="q-pa-md">

    <q-form
      @submit="onSubmit"
      class="q-gutter-md ak-form-employee"
    >
      <div class="row">
        <div class="col-lg-4 col-md-6 col-xs-12 q-px-md q-py-md">
          <q-input
            filled
            v-model="employeeInfo.firstname"
            label="Primer Nombre *"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12 q-px-md q-py-md">
          <q-input
            filled
            v-model="employeeInfo.middlename"
            label="Segundo Nombre "
          />
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12 q-px-md q-py-md">
          <q-input
            filled
            v-model="employeeInfo.firstSurname"
            label="Primer Apellido *"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12 q-px-md q-py-md">
          <q-input
            filled
            v-model="employeeInfo.secondSurname"
            label="Segundo Apellido "
          />
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12 q-px-md q-py-md">
          <q-input
            filled
            v-model="employeeInfo.birthdate"
            label="Fecha de nacimiento *"
            mask="date"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="employeeInfo.birthdate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Cerrar" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12 q-px-md q-py-md">
          <q-input
            filled
            v-model="employeeInfo.identificationNumber"
            label="Número de identificación *"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12 q-px-md q-py-md">
          <q-input
            filled
            v-model="employeeInfo.identificationType"
            label="Tipo de identificación *"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12 q-px-md q-py-md">
          <q-input
            filled
            v-model="employeeInfo.salary"
            label="Sueldo *"
          />
        </div>
      </div>

      <div class="row justify-end">
        <q-btn class="ak-button-info" label="Guardar" type="submit" color="primary"/>
      </div>
    </q-form>

  </div>
</template>

<script lang="ts">

import { SAVE_EMPLOYEE } from 'src/store/employee/constants';
import { EmployeeInterface, IdentificationTypeEnum } from 'src/store/employee/state';
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class'
const employeeModule = namespace('employee') 

@Component({
  components: {  }
})
export default class EmployeeInfo extends Vue {

  employeeInfo:EmployeeInterface = {
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
  age = '';

  @employeeModule.State('employee') employeeState!: EmployeeInterface;
  @employeeModule.Action(SAVE_EMPLOYEE) saveEmployeeAction!:(employeeData:EmployeeInterface) => Promise<void>

  mounted(){
    this.setEmployeeInfo(this.employeeState);
  }

  setEmployeeInfo(data: EmployeeInterface){
    this.employeeInfo = { ...this.employeeInfo, ...data };
  }

  onSubmit ():void {

    this.saveEmployeeAction(this.employeeInfo)
      .then(() => {
        this.$q.notify({
          color: 'green-5',
          textColor: 'white',
          icon: 'done',
          message: 'Empleado actualizado'
        })
      })
      .catch(() => {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Error al actualizar empleado'
        })
      })
    
  }

}
</script>

<style scoped>
.ak-button-info { 
  margin-right: 5px;
  margin-left: 5px;
}
@media (max-width: 1023px) {
  .ak-button-info { 
    width: 100%;
  }
}
</style>