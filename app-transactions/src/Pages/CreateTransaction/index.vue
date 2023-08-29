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
    <form>
      <div class="container">
        <div>
          <span>Título</span>
          <input name="title" teste="`Título`" />
        </div>
      </div>
      <div class="container">
        <div>
          <span>Valor</span>
          <input name="value" teste="Valor" />
        </div>
        <div>
          <span>teste</span>
          <input />
        </div>
        <!-- <input name="type_transaction" teste="Tipo de transação" /> -->

        <!-- <select name="type_transaction">
          <option value="income">Entrada</option>
          <option value="outcome">Saída</option>
        </select>
        <input name="status" :teste="Status" /> -->
      </div>
      <!-- <div class="container">
        <input name="duo_date" :teste="`Data de vencimento`" type="date" />

        <input name="payment_date" :teste="`Data de pagamento`" type="date" />
      </div>
      <div class="container">
        <input name="total_quantity" :teste="`Quantidade total`" type="number" />

        <input name="current_quantity" :teste="`Quantidade atual`" type="number" />
      </div> -->
      <button class="button-send" type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import { inject } from "vue";
import Cookies from "js-cookie";
import { Input } from "../../Components";
import "./styles.css";
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
