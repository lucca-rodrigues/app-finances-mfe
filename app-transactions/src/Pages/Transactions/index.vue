<template>
  <section id="transactions">
    <div id="transactions-status">
      <v-card id="card-balance" class="income">
        <span class="text-center">Previsão Entradas</span>
      </v-card>
      <v-card id="card-balance" class="outcome">
        <span class="text-center">Previsão Saídas</span>
      </v-card>
      <v-card id="card-balance" class="balance">
        <span class="text-center">Saldo</span>
      </v-card>
    </div>

    <table class="transactions-list">
      <thead class="transaction-labels">
        <tr>
          <th v-for="(item, index) in transactionLabels" :key="index" class="text-left">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in transactions" :key="item?.id">
          <td>{{ item.title }}</td>
          <td>{{ item.value }}</td>
          <td>{{ item.type_transaction }}</td>
          <td>{{ item.duo_date }}</td>
          <td>{{ item.payment_date }}</td>
          <td>{{ item.total_quantity }}</td>
          <td>{{ item.current_quantity }}</td>
          <td>{{ item.status }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import { getGlobalInfos } from "../../Utils";
import { TransactionsService } from "../../Services";
import "./styles.css";

const transactionsService = new TransactionsService();

export default {
  name: "Transactions",
  data() {
    return {
      transactions: [],
      backendToken: null,
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
    async getAllTransactions() {
      if (this.backendToken) {
        const response = await transactionsService.index(this.backendToken);
        this.transactions = response?.data;
      }
    },
  },
  mounted() {
    this.getAllTransactions();
  },
};
</script>
