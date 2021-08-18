<template>
  <div class="employee-list">
    <EmployeeListItem
      v-for="e in employees"
      v-bind:key="e.id"
      v-bind:employee="e"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
import EmployeeListItem from "./employee-list-item.vue";

export default {
  name: "EmployeeList",
  props: ["employees"],
  components: { EmployeeListItem },
};
</script>

<style scoped>
.employee-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>