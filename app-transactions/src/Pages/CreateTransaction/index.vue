<template>
  <div>
    <h1>Create transactions Here</h1>
    <!-- <button @click="dynamicProps.redirectDynamicPage(isIndividualApp ? '/' : '/transactions')">⬅️ Home</button> -->
    <!-- <button @click="isIndividualApp ? dynamicProps.goBackPage() : dynamicProps.redirectDynamicPage('/transactions')">
      ⬅️ Voltar
    </button> -->
    <!-- <button @click="dynamicProps.goBackPage()">⬅️ Voltar</button> -->
    <router-link v-if="isIndividualApp" to="/">⬅️ Voltar</router-link>
    <button v-else @click="redirectPage('/transactions')">⬅️ Voltar</button>
    <!-- <button @click="remove">Remove</button> -->
  </div>
</template>

<script>
import { inject } from "vue";
import Cookies from "js-cookie";
import { validateIndividualApp, setNavigationCookies } from "../../Utils";
export default {
  name: "CreateTransaction",
  // watch: {
  //   $route(to, from) {
  //     console.log(to, from);
  //   },
  // },
  setup() {
    // const currentDomain = window.location.hostname;
    const dynamicProps = inject("dynamicProps");
    const isIndividualApp = validateIndividualApp();

    const redirectPage = (path) => {
      // Cookies.set("app_myfinances_navigation", JSON.stringify(navigationInfo));
      // Cookies.set("app_myfinances_navigation", path);
      setNavigationCookies(path);
    };

    // const remove = () => {
    //   Cookies.remove("app_myfinances_navigation");
    // };
    return {
      dynamicProps,
      isIndividualApp,
      redirectPage,
    };
  },
};
</script>

<style></style>
