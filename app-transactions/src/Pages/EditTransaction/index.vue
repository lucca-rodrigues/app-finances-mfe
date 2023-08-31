<template>
  <div class="card-create-item">
    <h1>Editar um novo item</h1>
    <router-link v-if="isIndividualApp" to="/">⬅️ Voltar</router-link>
    <button class="button-navigator" v-else @click="redirectPage('/transactions')">⬅️ Voltar</button>
    <form @submit.prevent="handleSubmit">
      <div class="container">
        <div>
          <span>Título</span>

          <input v-model="selectedItem.title" name="title" placeholder="Nome do item" />
        </div>
      </div>

      <div class="container">
        <div>
          <span>Valor</span>
          <input v-model="selectedItem.value" name="value" placeholder="49.90" />
        </div>
        <div>
          <span>Tipo de transação</span>
          <select v-model="selectedItem.type_transaction" name="type_transaction">
            <option value="income">Entrada</option>
            <option value="outcome">Saída</option>
          </select>
        </div>
        <div>
          <span>Status</span>
          <select v-model="selectedItem.status" name="status">
            <option value="pendding">Pendente</option>
            <option value="finish">Finalizado</option>
          </select>
        </div>
      </div>
      <div class="container">
        <div>
          <span> Data de vencimento </span>
          <input v-model="selectedItem.duo_date" name="duo_date" type="date" />
        </div>
        <div>
          <span> Data de pagamento </span>
          <input v-model="selectedItem.payment_date" name="payment_date" type="date" />
        </div>
        <div>
          <span> Quantidade total</span>
          <input v-model="selectedItem.total_quantity" name="total_quantity" type="number" placeholder="20" />
        </div>

        <div>
          <span>Quantidade atual </span>
          <input v-model="selectedItem.current_quantity" name="current_quantity" type="number" placeholder="8" />
        </div>
      </div>
      <div class="container"></div>
      <button class="button-send" type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import { defineComponent, computed, onMounted, inject, ref, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { TransactionsService } from "../../Services";
import "./styles.css";
import { getGlobalInfos, validateIndividualApp } from "../../Utils";

const transactionsService = new TransactionsService();

export default defineComponent({
  setup() {
    const dynamicProps = inject("dynamicProps");
    const store = useStore();
    const selectedItem = computed(() => store?.state?.selectedItem) ?? null;
    const id = computed(() => store?.state?.selectedItem?.id) ?? null;
    const isIndividualApp = validateIndividualApp();
    const backendToken = ref("");

    const redirectPage = (path) => {
      setNavigationCookies(path);
    };

    onMounted(() => {
      const globalInfos = getGlobalInfos();
      backendToken.value = globalInfos.backendToken;
    });

    onBeforeMount(() => {
      // loadSelectedItem();
      console.log("id", id.value);
      console.log("selectedItem", selectedItem);
      if (!id.value || !selectedItem) {
        isIndividualApp ? dynamicProps.goBackPage() : redirectPage("/transactions");
      }
    });

    return {
      id,
      isIndividualApp,
      redirectPage,
      selectedItem,
      backendToken,
      dynamicProps,
    };
  },
  methods: {
    async handleSubmit() {
      await transactionsService.updateTransaction({
        backendToken: this.backendToken,
        id: this.id,
        data: { ...this.selectedItem },
      });

      this.isIndividualApp ? this.dynamicProps.goBackPage() : this.redirectPage("/transactions");
    },
  },
});
</script>
