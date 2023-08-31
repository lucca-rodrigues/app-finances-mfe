<template>
  <section id="transactions">
    <div id="transactions-status">
      <div id="card-balance" class="income">
        <div class="text-center">
          <span class="text-center">Previsão Entradas</span>
          <p class="text-center">{{ formatCurrencyValue(income) }}</p>
        </div>
      </div>
      <div id="card-balance" class="outcome">
        <div class="text-center">
          <span class="text-center">Previsão Saídas</span>
          <p class="text-center">{{ formatCurrencyValue(outcome) }}</p>
        </div>
      </div>
      <div id="card-balance" class="balance">
        <div class="text-center">
          <span class="text-center">Saldo</span>
          <p class="text-center">{{ formatCurrencyValue(balance) }}</p>
        </div>
      </div>
    </div>
    <div class="filter-month">
      <router-link v-if="isIndividualApp" to="/new">📝 Criar novo</router-link>
      <!-- <button v-else @click="dynamicProps.redirectDynamicPage('/transactions/new')">📝 Criar novo</button> -->
      <button class="button-navigator" v-else @click="redirectPage('/transactions/new')">📝 Criar novo</button>
      <div class="text-right"><span>Outubro</span> - <span>2023</span></div>
    </div>

    <table class="transactions-list">
      <thead class="transaction-labels">
        <tr>
          <th v-for="(item, index) in transactionLabels" :key="index" class="text-center">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr id="transaction-item" v-for="item in transactions" :key="item?.id" @click="getSelectedItem(item)">
          <td>{{ item.title }}</td>
          <td>{{ formatCurrencyValue(item.value) }}</td>
          <td class="text-left">{{ item.type_transaction === "income" ? "🟢 Entrada" : "🔴 Saída" }}</td>
          <td>{{ formatedDate(item.duo_date) }}</td>
          <td>{{ formatedDate(item.payment_date) }}</td>
          <td>{{ item.total_quantity }}</td>
          <td>{{ item.current_quantity }}</td>
          <td>{{ item.status === "pendding" ? "❌" : "✅" }}</td>

          <td>
            <DropdownMenu title="⚙️" :items="dropdownItems" :item="item"> </DropdownMenu>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <button v-if="transactions.length < totalItems" @click="loadMore()">Carregar mais...</button>
      <h5 v-else>Não existem mais itens para serem carregados ...</h5>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, inject } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { getGlobalInfos, validateIndividualApp, setNavigationCookies } from "../../Utils";
import { getBalance, getIncomeValue, getOutcomeValue } from "./Functions";
import { TransactionsService } from "../../Services";
import "../../../src/globalStyles.css";
import "./styles.css";
import { formatCurrency, formatDate } from "../../Utils";
import { DropdownMenu } from "../../Components";
const transactionsService = new TransactionsService();

export default {
  name: "Transactions",
  components: {
    DropdownMenu,
  },
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
        "Ações",
      ],
      income: null,
      outcome: null,
      balance: null,
      nextPage: null,
      totalItems: null,
      showDropdown: null,
      dropdownItems: [
        { text: "Editar", callback: () => this.editItem() },
        { text: "Duplicar", callback: () => this.duplicateTransaction() },
        { text: "Remover", callback: () => this.removeTransaction() },
        { text: "Finalizar pagamento", callback: () => this.checkTransaction() },
      ],
      selectedItem: null,
    };
  },
  setup() {
    const dynamicProps = inject("dynamicProps");
    const backendToken = ref(null);
    const isIndividualApp = validateIndividualApp();
    const router = useRouter();

    const store = useStore();

    const redirectPage = (path) => {
      setNavigationCookies(path);
    };
    const formatCurrencyValue = (value) => {
      return formatCurrency(value);
    };

    onMounted(() => {
      const globalInfos = getGlobalInfos();
      backendToken.value = globalInfos.backendToken;
    });

    return {
      dynamicProps,
      backendToken,
      isIndividualApp,
      redirectPage,
      formatCurrencyValue,
      router,
      store,
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
        const response = await transactionsService.findByPeriod({ backendToken: this.backendToken });
        this.transactions = response?.data?.results;
        this.nextPage = response?.data?.next;
        this.totalItems = response?.data?.count;

        this.getTransactionsStatus();
      }
    },

    async checkTransaction() {
      if (this.backendToken) {
        const data = {
          status: "done",
          payment_date: new Date().toISOString().split("T")[0],
        };

        await transactionsService.updateTransaction({
          backendToken: this.backendToken,
          id: this.selectedItem.id,
          data,
        });

        this.getAllTransactions();
      }
    },

    async removeTransaction() {
      if (this.backendToken) {
        await transactionsService.delete({
          backendToken: this.backendToken,
          id: this.selectedItem.id,
        });

        this.transactions = this.transactions.filter((item) => item.id !== this.selectedItem.id);
        this.totalItems = this.totalItems - 1;
      }
    },

    async duplicateTransaction() {
      const originalDate = new Date(this.selectedItem.duo_date);
      originalDate.setMonth(originalDate.getMonth() + 1);

      if (this.backendToken && this.selectedItem) {
        const data = {
          ...this.selectedItem,
          duo_date: originalDate.toISOString().split("T")[0],
          payment_date: null,
          status: "pendding",
        };

        await transactionsService.create({
          backendToken: this.backendToken,
          data,
        });
      }
    },

    async editItem() {
      console.log("editar item");
      if (this.backendToken && this.selectedItem) {
        this.store.dispatch("updateSelectedItem", this.selectedItem);
        this.router.push("/edit");
      }
    },

    getTransactionsStatus() {
      this.income = getIncomeValue(this?.transactions);
      this.outcome = getOutcomeValue(this?.transactions);
      this.balance = getBalance(this.income, this?.transactions);
    },

    getSelectedItem(item) {
      this.selectedItem = item;
    },

    formatedDate(date) {
      return formatDate(date);
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
    },

    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    this.getAllTransactions();
  },
};
</script>
