<template>
  <div class="home">
    <div class="column">
      <div class="title">Add/edit</div>
      <employee-form
        ref="employeeForm"
        v-on:add-employee="addEmployeeHandler"
        v-on:update-employee="updateEmployeeHandler"
      />
      <div class="title">Employees</div>
      <div class="list-options">
        <label>Limit:</label>
        <input type="number" min="1" v-model="limit" />
        <label>Role:</label>
        <input v-model="role" />
      </div>
      <employee-list
        v-bind:employees="employees"
        v-on:edit-employee="editEmployeeHandler"
        v-on:remove-employee="removeEmployeeHandler"
      />
    </div>
  </div>
</template>

<script>
import EmployeeForm from "../components/employee-form.vue";
import EmployeeList from "../components/employee-list.vue";
import employeeService from "../service/employee-service";

export default {
  name: "Home",
  components: {
    EmployeeForm,
    EmployeeList,
  },
  data: () => {
    return {
      limit: 5,
      role: "",
      employees: [],
    };
  },
  methods: {
    async addEmployeeHandler(employee) {
      let [, error] = await employeeService.add(employee);
      if (error) {
        return console.error("error adding employee", error);
      }
      this.refreshEmployees();
    },
    async updateEmployeeHandler(e) {
      let [, error] = await employeeService.update(e.id, e.employee);
      if (error) {
        return console.error("error updating employee", error);
      }
      this.refreshEmployees();
    },
    async editEmployeeHandler(employee) {
      this.$refs.employeeForm.edit(employee);
    },
    async removeEmployeeHandler(id) {
      let [, error] = await employeeService.remove(id);
      if (error) {
        return console.error("error removing employee", error);
      }
      this.refreshEmployees();
    },
    async refreshEmployees() {
      let [employees, error] = await employeeService.findAll(
        this.limit,
        this.role
      );
      if (error) {
        return console.error("error refreshing employees", error);
      }
      this.employees = employees;
    },
  },
  watch: {
    limit() {
      this.refreshEmployees();
    },
    role() {
      this.refreshEmployees();
    },
  },
  mounted() {
    this.refreshEmployees();
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 900px;
  min-width: 50%;
}

.title {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.list-options {
  display: grid;
  grid-auto-flow: column;
  gap: 3px;
}
</style>