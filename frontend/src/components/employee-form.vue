<template>
  <div class="employee-form">
    <div class="entries">
      <label>ID:</label>
      <input v-model="id" readonly />
      <label>Name:</label>
      <input v-model="name" />
      <label>Role:</label>
      <input v-model="role" />
      <label>Birthday:</label>
      <input v-model="birthday" type="date" />
      <label>Admission day:</label>
      <input v-model="admissionDay" type="date" />
    </div>

    <div>
      <button v-on:click="reset">Reset</button>
      <button v-on:click="save">Save</button>
    </div>
  </div>
</template>

<script>
function todayUTC() {
  var today = new Date();
  var year = String(today.getUTCFullYear());
  var month = String(today.getUTCMonth() + 1);
  var day = String(today.getUTCDate());
  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }
  return year + "-" + month + "-" + day;
}

export default {
  name: "EmployeeForm",
  data() {
    return {
      editing: false,
      id: "",
      name: "",
      role: "",
      birthday: todayUTC(),
      admissionDay: todayUTC(),
    };
  },
  methods: {
    reset() {
      this.editing = false;
      this.id = "";
      this.name = "";
      this.role = "";
      this.birthday = todayUTC();
      this.admissionDay = todayUTC();
    },
    edit(employee) {
      this.editing = true;
      this.id = employee.id;
      this.name = employee.name;
      this.role = employee.role;
      this.birthday = employee.birthday;
      this.admissionDay = employee.admissionDay;
    },
    save() {
      let textRegex = "[A-z]{3,}";
      if (!this.name.match(textRegex)) {
        alert("Name should be composed of at least 3 alphabetic chars");
        return;
      }
      if (!this.role.match(textRegex)) {
        alert("Role should be composed of at least 3 alphabetic chars");
        return;
      }
      var employee = {
        name: this.name,
        role: this.role,
        birthday: this.birthday,
        admissionDay: this.admissionDay,
      };
      if (this.editing) {
        this.$emit("update-employee", {
          id: this.id,
          employee: employee,
        });
      } else {
        this.$emit("add-employee", employee);
      }
    },
  },
};
</script>

<style scoped>
.employee-form {
  width: 400px;
  min-width: fit-content;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  border-color: #101010;
  border-radius: 10px;
  border-width: 3px;
  border-style: solid;
}

.entries {
  width: 100%;
  display: grid;
  grid-template-columns: min-content auto;
  row-gap: 2px;
  column-gap: 4px;

  padding-left: 10px;
  padding-right: 10px;
}

label {
  text-align: right;
  white-space: pre;
}

input:read-only {
  background-color: #e5e5e5;
}
</style>