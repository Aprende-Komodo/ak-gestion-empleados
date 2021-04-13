<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Editar perfil de {{employeeName}}
        </q-toolbar-title>
        
        <q-btn @click="goEmployeePage" flat round dense icon="close" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { EmployeeInterface } from 'src/store/employee/state';
import { Vue, Component } from 'vue-property-decorator';

import { namespace } from 'vuex-class'
const employeeModule = namespace('employee') 

@Component({
  components: {  }
})
export default class ManageProfile extends Vue {

  @employeeModule.State('employee') employeeState!: EmployeeInterface;

  employeeName = '...';

  async mounted() {
    if (!this.employeeState.id) return await this.$router.push({ name: 'employees' })
    this.employeeName = `${this.employeeState.firstname} ${this.employeeState.secondSurname}`
  }

  async goEmployeePage(){
    await this.$router.push({ name: 'employees' })
  }

}
</script>
