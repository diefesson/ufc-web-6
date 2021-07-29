<template>
  <div class="home">
    <div class="column">
      <div class="title">Add/edit</div>
      <car-form
        ref="carForm"
        v-on:add-car="addCarHandler"
        v-on:update-car="updateCarHandler"
      />
      <div class="title">Cars</div>
      <div class="list-options">
        <label>Limit:</label>
        <input type="number" min="1" v-model="limit" />
        <label>Brand:</label>
        <input v-model="brand" />
      </div>
      <car-list
        v-bind:cars="cars"
        v-on:edit-car="editCarHandler"
        v-on:remove-car="removeCarHanlder"
      />
    </div>
  </div>
</template>

<script>
import CarForm from "../components/car-form.vue";
import CarList from "../components/car-list.vue";
import carService from "../service/car-service";

export default {
  name: "Home",
  components: {
    CarForm,
    CarList,
  },
  data: () => {
    return {
      limit: 5,
      brand: "",
      cars: [],
    };
  },
  methods: {
    async addCarHandler(car) {
      await carService.add(car);
      this.refreshCars();
    },
    async updateCarHandler(e) {
      await carService.update(e.id, e.car);
      this.refreshCars();
    },
    async editCarHandler(car) {
      this.$refs.carForm.edit(car);
    },
    async removeCarHanlder(id) {
      await carService.remove(id);
      this.refreshCars();
    },
    async refreshCars() {
      this.cars = await carService.getAll(this.limit, this.brand);
    },
  },
  watch: {
    limit() {
      this.refreshCars();
    },
    brand() {
      this.refreshCars();
    },
  },
  mounted() {
    this.refreshCars();
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

.list-options{
  display: grid;
  grid-auto-flow: column;
  gap: 3px;
}
</style>