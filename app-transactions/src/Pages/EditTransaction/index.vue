<template>
  <div class="card-create-item">
    <h1>Editar um novo item</h1>
    <router-link v-if="isIndividualApp" to="/">⬅️ Voltar</router-link>
    <button class="button-navigator" v-else @click="redirectPage('/transactions')">⬅️ Voltar</button>
    <form @submit.prevent="handleSubmit">
      <div class="container">
        <div>
          <span>Título</span>
          <!-- <input v-model="transactionInfo.title" name="title" placeholder="Nome do item" /> -->
          <!-- <input v-model="transactionInfo.title" name="title" placeholder="Nome do item" /> -->
          <input v-model="transactionInfo.title" name="title" placeholder="Nome do item" />
        </div>
      </div>

      <div class="container">
        <div>
          <span>Valor</span>
          <input v-model="transactionInfo.value" name="value" placeholder="49.90" />
        </div>
        <div>
          <span>Tipo de transação</span>
          <select v-model="transactionInfo.type_transaction" name="type_transaction">
            <option value="income">Entrada</option>
            <option value="outcome">Saída</option>
          </select>
        </div>
        <div>
          <span>Status</span>
          <select v-model="transactionInfo.status" name="type_transaction">
            <option value="pendding">Pendente</option>
            <option value="finish">Finalizado</option>
          </select>
        </div>
      </div>
      <div class="container">
        <div>
          <span> Data de vencimento </span>
          <input v-model="transactionInfo.duo_date" name="duo_date" type="date" />
        </div>
        <div>
          <span> Data de pagamento </span>
          <input v-model="transactionInfo.payment_date" name="payment_date" type="date" />
        </div>
        <div>
          <span> Quantidade total</span>
          <input v-model="transactionInfo.total_quantity" name="total_quantity" type="number" placeholder="20" />
        </div>

        <div>
          <span>Quantidade atual </span>
          <input v-model="transactionInfo.current_quantity" name="current_quantity" type="number" placeholder="8" />
        </div>
      </div>
      <div class="container"></div>
      <button class="button-send" type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import { inject, nextTick, onMounted, ref } from "vue";
import "./styles.css";
import { validateIndividualApp, setNavigationCookies, getGlobalInfos } from "../../Utils";
import { TransactionsService } from "../../Services";
import { getParamId } from "../../Utils";

const transactionsService = new TransactionsService();

export default {
  name: "UpdateTransaction",

  data() {
    return {
      backendToken: null,
      transactionInfo: {
        title: "",
        value: "",
        type_transaction: "outcome",
        status: "pendding",
        duo_date: "",
        payment_date: "",
        total_quantity: null,
        current_quantity: null,
      },
    };
  },

  setup() {
    const dynamicProps = inject("dynamicProps");
    const isIndividualApp = validateIndividualApp();
    const selectedItem = null;
    const id = getParamId();

    const transactionInfo = {};

    const getGlobalToken = () => {
      const globalInfos = getGlobalInfos();
      // this.backendToken = globalInfos.backendToken;
      console.log("globalInfos", globalInfos);
    };

    const test = async () => {
      const globalInfos = getGlobalInfos();

      const response = await transactionsService.findById({
        id: id,
        backendToken: globalInfos.backendToken,
      });

      // console.log("response", response.data);
      transactionInfo.title = response.data.title;
      transactionInfo.value = response.data.value;
      transactionInfo.type_transaction = response.data.type_transaction;
      transactionInfo.status = response.data.status;
      transactionInfo.duo_date = response.data.duo_date;
      transactionInfo.payment_date = response.data.payment_date;
      transactionInfo.total_quantity = response.data.total_quantity;
      transactionInfo.current_quantity = response.data.current_quantity;

      await nextTick();
      console.log("transactionInfo", transactionInfo);
    };

    onMounted(async () => {
      getGlobalToken();
      await test();
    });

    const redirectPage = (path) => {
      setNavigationCookies(path);
    };

    return {
      dynamicProps,
      isIndividualApp,
      redirectPage,
      selectedItem,
      id,
      test,
      transactionInfo,
    };
  },
  methods: {
    async handleSubmit() {
      // Seu código de envio do formulário
      // ...
    },

    // async test() {
    // const response = await transactionsService.findById({
    //   id: getParamId(),
    //   backendToken: this.backendToken,
    // });
    // this.transactionInfo = response.data;
    // console.log(this.transactionInfo);
    // },
  },

  async mounted() {
    const response = await transactionsService.findById({
      id: this.id,
      backendToken: getGlobalInfos().backendToken,
    });
    this.transactionInfo.title = response.data.title;
  },
};
</script>

<style></style>

<!-- <script>
import { inject, onMounted, ref } from "vue";
import "./styles.css";
import { validateIndividualApp, setNavigationCookies, getGlobalInfos } from "../../Utils";
import { TransactionsService } from "../../Services";
import { getParamId } from "../../Utils";

const transactionsService = new TransactionsService();

export default {
  name: "UpdateTransaction",

  data() {
    return {
      backendToken: null,
      transactionInfo: {
        title: "",
        value: "",
        type_transaction: "outcome",
        status: "pendding",
        duo_date: "",
        payment_date: "",
        total_quantity: null,
        current_quantity: null,
      },
    };
  },

  setup() {
    const dynamicProps = inject("dynamicProps");
    const isIndividualApp = validateIndividualApp();
    const backendToken = ref(null);
    const selectedItem = null;
    const id = getParamId();

    onMounted(async () => {
      const globalInfos = getGlobalInfos();
      this.backendToken = globalInfos.backendToken;

      console.log("backendToken", globalInfos.backendToken);
    });

    const data = ref();

    const redirectPage = (path) => {
      setNavigationCookies(path);
    };

    return {
      dynamicProps,
      isIndividualApp,
      redirectPage,
      backendToken,
      selectedItem,
      data,
      id,
    };
  },
  methods: {
    async handleSubmit() {
      // Seu código de envio do formulário
      // ...
    },

    async test() {
      const response = await transactionsService.findById({
        id: this.id,
        backendToken: this.backendToken.value,
      });
      this.transactionInfo = response.data;

      console.log(this.transactionInfo);
    },
  },

  mounted() {
    this.test();
  },
};
</script>

<style></style> -->
