<template>
  <q-page padding>
    
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="profile" label="Perfil" />
        <q-tab name="photo" label="Foto" />
        <q-tab name="history" label="Historial" />
      </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="profile">
        <div class="text-h6">Datos del empleado</div>
        <EmployeeInfo />
      </q-tab-panel>

      <q-tab-panel name="photo">
        <div class="text-h6">Alarms</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="history">
        <div class="text-h6">Movies</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>

    </q-card>
  </q-page>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';
import EmployeeInfo from '../components/employee/EmployeeInfo.vue';

@Component({
  components: { 
    EmployeeInfo
  }
})
export default class EditProfile extends Vue {
  tab = 'profile';
}
</script>
