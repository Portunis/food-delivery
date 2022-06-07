<template>
  <NavBar />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar";
export default {
  name: "DeliveryLayout",
  components: { NavBar },
};
</script>

<style scoped lang="scss">
.container {
  padding: 32px 50px;
}
</style>
