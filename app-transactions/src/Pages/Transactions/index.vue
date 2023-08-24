<template>
  <div>
    <h1>Vuejs Transactions</h1>
    <p>Backend test: {{ test || "Token not found" }}</p>
    <ul>
      <li v-for="item in transactions" :key="item?.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import api from "../../Services/api";
import { getCookie } from "../../Utils";

export default {
  name: "Transactions",
  data() {
    return {
      transactions: [],
      globalInfos: null,
      backendToken: null,
      test: null,
    };
  },
  setup() {
    const backendToken = ref(null);

    onMounted(() => {
      const globalInfos = JSON.parse(getCookie("@app_myfinances"));
      backendToken.value = globalInfos.backendToken;
    });

    return {
      backendToken,
    };
  },
  methods: {
    async getAllTransactions() {
      if (this.backendToken) {
        const response = await api.get("/transactions/user/view", {
          headers: {
            Authorization: `Bearer Token ${this.backendToken}`,
          },
        });
        this.transactions = response?.data;
      }
    },
  },
  mounted() {
    this.getAllTransactions();
  },
};
</script>
