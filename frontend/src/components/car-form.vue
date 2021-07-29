<template>
  <div class="car-form">
    <div class="entries">
      <label>ID:</label>
      <input v-model="id" readonly />
      <label>Name:</label>
      <input v-model="name" />
      <label>Brand:</label>
      <input v-model="brand" />
      <label>Manufacture year:</label>
      <input v-model="manufactureYear" type="number" />
      <label>Model year:</label>
      <input v-model="modelYear" type="number" />
      <label>Sell date:</label>
      <input v-model="sellDate" type="date" />
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
  name: "CarForm",
  data() {
    return {
      editing: false,
      id: "",
      name: "",
      brand: "",
      manufactureYear: new Date().getFullYear(),
      modelYear: new Date().getFullYear(),
      sellDate: todayUTC(),
    };
  },
  methods: {
    reset() {
      this.editing = false;
      this.id = "";
      this.name = "";
      this.brand = "";
      this.manufactureYear = new Date().getFullYear();
      this.modelYear = new Date().getFullYear();
      this.sellDate = todayUTC();
    },
    edit(car) {
      this.editing = true;
      this.id = car.id;
      this.name = car.name;
      this.brand = car.brand;
      this.manufactureYear = car.manufactureYear;
      this.modelYear = car.modelYear;
      this.sellDate = car.sellDate;
    },
    save() {
      if (this.name.length < 3 || this.brand.length < 3) {
        alert("Name and brand should have at least 3 characters");
        return;
      }
      var car = {
        name: this.name,
        brand: this.brand,
        manufactureYear: this.manufactureYear,
        modelYear: this.modelYear,
        sellDate: this.sellDate,
      };
      if (this.editing) {
        this.$emit("update-car", {
          id: this.id,
          car: car,
        });
      } else {
        this.$emit("add-car", car);
      }
    },
  },
};
</script>

<style scoped>
.car-form {
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
  background-color: #E5E5E5;
}
</style>