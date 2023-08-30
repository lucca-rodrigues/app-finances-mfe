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
    <form @submit.prevent="handleSubmit">
      <div class="container">
        <div>
          <span>Título</span>
          <input v-model="data.title" name="title" />
        </div>
      </div>
      <div class="container">
        <div>
          <span>Valor</span>
          <input v-model="data.value" name="value" />
        </div>
        <div>
          <span>Tipo de transação</span>
          <select v-model="data.type_transaction" name="type_transaction">
            <option value="income">Entrada</option>
            <option value="outcome">Saída</option>
          </select>
        </div>
        <div>
          <span>Status</span>
          <select v-model="data.status" name="type_transaction">
            <option value="pendding">Pendente</option>
            <option value="finish">Finalizado</option>
          </select>
        </div>
      </div>
      <div class="container">
        <div>
          <span> Data de vencimento </span>
          <input v-model="data.duo_date" name="duo_date" type="date" />
        </div>
        <div>
          <span> Data de pagamento </span>
          <input v-model="data.payment_date" name="payment_date" type="date" />
        </div>
      </div>
      <div class="container">
        <div>
          <span> Quantidade total</span>
          <input v-model="data.total_quantity" name="total_quantity" type="number" />
        </div>

        <div>
          <span>Quantidade atual </span>
          <input v-model="data.current_quantity" name="current_quantity" type="number" />
        </div>
      </div>
      <button class="button-send" type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import { inject, onMounted, ref } from "vue";

import "./styles.css";
import { validateIndividualApp, setNavigationCookies, getGlobalInfos } from "../../Utils";
import { TransactionsService } from "../../Services";

const transactionsService = new TransactionsService();

export default {
  name: "CreateTransaction",

  data() {
    return {
      formattedValue: "",
    };
  },

  computed: {
    numericValue() {
      return this.formattedValue.replace(/\D/g, "");
    },
  },
  setup() {
    // const currentDomain = window.location.hostname;
    const dynamicProps = inject("dynamicProps");
    const isIndividualApp = validateIndividualApp();
    const backendToken = ref(null);

    const redirectPage = (path) => {
      setNavigationCookies(path);
    };

    onMounted(() => {
      const globalInfos = getGlobalInfos();
      backendToken.value = globalInfos.backendToken;
    });

    const data = ref({
      title: "",
      value: "",
      type_transaction: "income",
      status: "pendding",
      duo_date: "",
      payment_date: "",
      total_quantity: "",
      current_quantity: "",
    });

    return {
      dynamicProps,
      isIndividualApp,
      redirectPage,
      data,
      backendToken,
    };
  },
  methods: {
    async handleSubmit() {
      const { title, value, type_transaction, status, duo_date, payment_date, total_quantity, current_quantity } =
        this.data;

      const data = {
        title,
        value: Number(value),
        type_transaction,
        status,
        duo_date,
        payment_date,
        total_quantity,
        current_quantity,
      };

      console.log("data", data);
      await transactionsService.create({
        data,
        backendToken: this.backendToken,
      });

      this.isIndividualApp ? this.dynamicProps.goBackPage() : this.redirectPage("/transactions");
    },
  },
};
</script>

<style></style>
