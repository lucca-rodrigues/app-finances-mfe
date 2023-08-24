<template>
  <div>
    <Transactions :backendToken="backendToken" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Transactions from "./Pages/Transactions/";

const backendToken = ref(""); // Inicialize com o valor adequado
console.log("window.backendToken", window?.globalInfos?.backendToken);
// Simulando a obtenção do token (pode ser uma requisição assíncrona, etc.)
backendToken.value = window?.globalInfos?.backendToken; // Substitua pelo token real obtido
</script>
