<template>
  <div class="car-list">
    <CarListItem v-for="c in cars" v-bind:key="c.id" v-bind:car="c" v-bind="$attrs"/>
  </div>
</template>

<script>
import CarListItem from "./car-list-item.vue";

export default {
  name: "CarList",
  props: ["cars"],
  components: {CarListItem},
};
</script>

<style scoped>
.car-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>