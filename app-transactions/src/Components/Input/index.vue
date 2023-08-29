<template>
  <div>
    teste
    <p>label aqui{{ label }}</p>
    <input :type="inputType" :name="name" :placeholder="placeholder" />
  </div>
</template>
<script>
export default {
  name: "Input",
  props: {
    inputType: "text",
    teste: {
      type: String,
      required: false,
    },
    name: "",
    placeholder: "",
  },
};
</script>
