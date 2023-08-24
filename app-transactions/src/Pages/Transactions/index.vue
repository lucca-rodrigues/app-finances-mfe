<template>
  <div class="container">
    <h1>Vuejs Transactions list here</h1>
    {{ userToken ?? "Token not found" }}
    <ul>
      <li v-for="item in transactions" :key="item?.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../../Services/api";
import { setToken } from "../../Utils";
export default {
  name: "Transactions",
  // props: ["userToken"],

  data() {
    return {
      transactions: [],
      // token:
      //   "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2OTI5OTcyNDd9.XEMb0Oq5I3CYYMyFj5NLjfj9gSeWm4IdH6H343-CB7M",
      token: null,
    };
  },
  methods: {
    async getAllTransactions() {
      console.log("userToken in getAllTransactions:", this.userToken);

      const response = await api.get("/transactions/user/view", {
        headers: {
          Authorization: `Bearer Token ${this.token}`,
        },
      });
      this.transactions = response.data;
      console.log("Response data:", response.data);
    },

    // async test() {
    //   const testOi = document.getElementById("transactions").getAttribute("oi");
    //   const Token = document.getElementById("transactions").getAttribute("userToken");
    //   console.log("OIOIOI", testOi);
    //   console.log("Token", Token);
    // },

    async getToken() {
      window.addEventListener("load", () => {
        const token = document.getElementById("transactions").getAttribute("userToken");
        console.log("Token", token);
        this.token = token;
      });

      const token = window.localStorage.getItem("MFE_Token");
      this.token = token;
      console.log("token parsed", token);
      setToken(token);
    },
  },
  mounted() {
    console.log("userToken in mounted:", this.userToken);
    console.log("props", this.props);
    // console.log("Oi", this.oi);
    // console.log("Oi", this.oi);
    this.getToken();
    this.getAllTransactions();
    // this.test();
  },
};
</script>
