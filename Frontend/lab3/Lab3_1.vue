<template>
  <div>
    <h2>Задание 1. Введите ФИО</h2>

    <v-text-field
      v-model="text"
      label="Введите ФИО"
    ></v-text-field>

    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>
