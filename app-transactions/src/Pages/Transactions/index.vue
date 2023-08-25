<template>
  <section id="transactions">
    <div id="transactions-status">
      <div id="card-balance" class="income">
        <div class="text-center">
          <span class="text-center">Previsão Entradas</span>
          <p class="text-center">{{ income }}</p>
        </div>
      </div>
      <div id="card-balance" class="outcome">
        <div class="text-center">
          <span class="text-center">Previsão Saídas</span>
          <p class="text-center">{{ outcome }}</p>
        </div>
      </div>
      <div id="card-balance" class="balance">
        <div class="text-center">
          <span class="text-center">Saldo</span>
          <p class="text-center">{{ balance }}</p>
        </div>
      </div>
    </div>
    <div class="filter-month">
      <div class="text-right"><span>Outubro</span> - <span>2023</span></div>
    </div>

    <table class="transactions-list">
      <thead class="transaction-labels">
        <tr>
          <th v-for="(item, index) in transactionLabels" :key="index" class="text-center">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr id="element" v-for="item in transactions" :key="item?.id">
          <td>{{ item.title }}</td>
          <td>R$ {{ item.value }}</td>
          <td>{{ item.type_transaction }}</td>
          <td>{{ item.duo_date }}</td>
          <td>{{ item.payment_date }}</td>
          <td>{{ item.total_quantity }}</td>
          <td>{{ item.current_quantity }}</td>
          <td>{{ item.status === "pendding" ? "❌" : "✅" }}</td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <button v-if="transactions.length < totalItems" @click="loadMore()">Carregar mais...</button>
      <h5 v-if="transactions.length === totalItems">Não existem mais itens para serem carregados ...</h5>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import { getGlobalInfos } from "../../Utils";
import { getBalance, getIncomeValue, getOutcomeValue } from "./Functions";
import { TransactionsService } from "../../Services";
import "./styles.css";

const transactionsService = new TransactionsService();

export default {
  name: "Transactions",
  data() {
    return {
      transactions: [],
      transactionLabels: [
        "Descrição",
        "Valor",
        "Tipo",
        "Data de Vencimento",
        "Data de Pagamento",
        "Quantidade Total",
        "Quantidade Atual",
        "Status",
      ],
      income: null,
      outcome: null,
      balance: null,
      nextPage: null,
      totalItems: null,
    };
  },
  setup() {
    const backendToken = ref(null);

    onMounted(() => {
      const globalInfos = getGlobalInfos();
      backendToken.value = globalInfos.backendToken;
    });

    return {
      backendToken,
    };
  },
  methods: {
    async setPaginationData() {
      this.transactions = response?.data?.results;
      this.nextPage = response?.data?.next;
      this.totalItems = response?.data?.count;
    },
    async getAllTransactions() {
      if (this.backendToken) {
        // const response = await transactionsService.index(this.backendToken);
        const response = await transactionsService.findByPeriod({ backendToken: this.backendToken });
        this.transactions = response?.data?.results;
        this.nextPage = response?.data?.next;
        this.totalItems = response?.data?.count;

        console.log("totalItems", this.totalItems);
        console.log("transactions", this.transactions.length);
        this.getTransactionsStatus();
      }
    },
    getTransactionsStatus() {
      this.income = getIncomeValue(this?.transactions);
      this.outcome = getOutcomeValue(this?.transactions);
      this.balance = getBalance(this.income, this?.transactions);
    },

    async loadMore() {
      if (this.nextPage) {
        const response = await transactionsService.getNextPage({
          backendToken: this.backendToken,
          nextPage: this.nextPage,
        });
        this.transactions = [...this.transactions, ...response?.data?.results];
        this.nextPage = response?.data?.next;
        this.totalItems = response?.data?.count;
      }

      console.log("clicou");
    },
  },
  mounted() {
    this.getAllTransactions();
  },
};
</script>
