<template>
  <div>
    <h1>Create transactions Here</h1>
    <button @click="dynamicProps.redirectDynamicPage(isIndividualApp ? '/' : '/transactions')">⬅️ Home</button>
    <button @click="dynamicProps.goBackPage">⬅️ Voltar</button>
  </div>
</template>

<script>
import { inject } from "vue";
import { validateIndividualApp } from "../../Utils";
export default {
  name: "CreateTransaction",
  // watch: {
  //   $route(to, from) {
  //     console.log(to, from);
  //   },
  // },
  setup() {
    const dynamicProps = inject("dynamicProps");
    const isIndividualApp = validateIndividualApp();

    return {
      dynamicProps,
      isIndividualApp,
    };
  },
};
</script>

<style></style>
