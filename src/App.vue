<script>
import AppHeader from "./components/AppHeader.vue";


export default {
  data() {
    return {
    }
  },

  components: { AppHeader },

};
</script>

<template>
  <AppHeader />
  <main>
    <!-- Inserire router -->
    <router-view />
  </main>
</template>

<style lang="scss" scoped></style>