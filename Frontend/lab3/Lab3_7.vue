<template>
  <v-container>
  <h2>Задание 7. Выберите форму(-ы) обучения</h2>
    <v-checkbox v-model="selectedItems" label="Очная" value="1"></v-checkbox>
    <v-checkbox v-model="selectedItems" label="Заочная" value="2"></v-checkbox>
    <v-checkbox v-model="selectedItems" label="Очно-заочная" value="3"></v-checkbox>
    <p>Выбрано: {{ selectedItems }}</p>
  </v-container>
</template>
<script>
export default {
  data: () => ({ selectedItems: [] })
}
</script>
