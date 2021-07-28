<template>
  <div class="car-list-item">
    <div>
      <div>Marca: {{ car.brand }} Modelo: {{ car.name }}</div>
      <div>Ano: {{ car.manufactureYear }} / {{ car.modelYear }}</div>
      <div>Data da venda: {{ car.sellDate }}</div>
    </div>
    <div>
      <button v-on:click="editClickHandler">edit</button>
      <button class="remove" v-on:click="removeClickhandler">remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarListItem",
  props: ["car"],
  methods: {
    editClickHandler() {
      this.$emit("edit-car", this.car);
    },
    removeClickhandler() {
      this.$emit("remove-car", this.car.id);
    },
  },
};
</script>

<style scoped>
.car-list-item {
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