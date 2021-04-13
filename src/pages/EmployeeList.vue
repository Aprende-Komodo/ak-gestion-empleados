<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        title="Empleados"
        :data="list"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <div class="flex justify-around">
              <q-btn size="xs" @click.native="editEmployee(props.row.id)" round color="secondary" icon="mode_edit" />
              <q-btn size="xs" @click.native="deleteEmployee(props.row.id)"  round color="info" icon="delete" />
            </div>
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script lang="ts">
import { EmployeeInterface } from 'src/store/employee/state';
import { Vue, Component } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { namespace } from 'vuex-class'
import { DELETE_EMPLOYEE } from '../store/employee/constants';
import { Location } from 'vue-router';

const employeeModule = namespace('employee') 

const columnsDefine = [
        {
          name: 'firstname',
          required: true,
          label: 'Primer nombre',
          align: 'center',
          field: 'firstname',
          sortable: true
        },
        {
          name: 'middlename',
          required: true,
          label: 'Segundo nombre',
          align: 'center',
          field: 'middlename',
          sortable: true
        },
        {
          name: 'firstSurname',
          required: true,
          label: 'Primer Apellido',
          align: 'center',
          field: 'firstSurname',
          sortable: true
        },
        {
          name: 'secondSurname',
          required: true,
          label: 'Segundo apellido',
          align: 'center',
          field: 'secondSurname',
          sortable: true
        },
        {
          name: 'salary',
          required: true,
          label: 'Sueldo',
          align: 'center',
          field: 'salary',
          sortable: true
        },
        {
          name: 'action',
          label: 'Acción',
          align: 'center',
          sortable: false
        },
  ];

@Component({
  components: {  },
  computed: {
    ...mapState('employee', [
      'list'
    ])
  }
})
export default class EmployeeList extends Vue {

  columns:any = columnsDefine;
  list!: EmployeeInterface[];

  @employeeModule.Action(DELETE_EMPLOYEE) deleteEmployeAction!:(id: number) => Promise<void>

  async editEmployee(id: number): Promise<void>{
    const location: Location = { name: 'profile', params: { id: `${id}` } };
    await this.$router.push(location);
  }

  async deleteEmployee(id: number):Promise<void> {
    await this.deleteEmployeAction(id);
  }

}
</script>
