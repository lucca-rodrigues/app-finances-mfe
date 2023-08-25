<template>
  <div>
    <h1>Create transactions Here</h1>
    <!-- <router-link id="prev-page-transaction" to="/">⬅️ Voltar</router-link> -->
    <!-- <button id="prev-page-transaction" to="/">⬅️ Voltar</button> -->
    <button @click="redirectVuePage">⬅️ Voltar</button>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "CreateTransaction",
  // watch: {
  //   $route(to, from) {
  //     console.log(to, from);
  //   },
  // },
  setup() {
    const redirectVuePage = inject("redirectVuePage");

    return {
      redirectVuePage,
    };
  },
};
</script>

<style></style>
