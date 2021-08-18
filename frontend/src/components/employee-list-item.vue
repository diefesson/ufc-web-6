<template>
  <div class="employee-list-item">
    <div>
      <div>Name: {{ employee.name }} Role: {{ employee.role }}</div>
      <div>Birthday: {{ employee.birthday }}</div>
      <div>Admission day: {{ employee.admissionDay }}</div>
    </div>
    <div>
      <button v-on:click="editClickHandler">edit</button>
      <button class="remove" v-on:click="removeClickhandler">remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeeListItem",
  props: ["employee"],
  methods: {
    editClickHandler() {
      this.$emit("edit-employee", this.employee);
    },
    removeClickhandler() {
      this.$emit("remove-employee", this.employee.id);
    },
  },
};
</script>

<style scoped>
.employee-list-item {
  padding: 5px;
  height: fit-content;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;

  color: #202020;
  background-color: #d0d0d0;
  border-color: #ffffff;
}

button {
  border: none;

  margin-right: 10px;
}

button.remove {
  color: rgb(187, 29, 29);
}
</style>