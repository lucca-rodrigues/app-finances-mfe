<template>
  <div class="dropdown" @click="toggleDropdown">
    {{ title }}
    <ul v-if="isOpen" class="dropdown-content">
      <li v-for="(item, index) in items" :key="index" @click="item.callback">{{ item.text }}</li>
    </ul>
  </div>
</template>

<script>
import "./styles.css";

export default {
  props: {
    title: String,
    items: Array,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
