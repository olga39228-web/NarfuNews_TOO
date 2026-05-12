<template>
  <div>
    <h2>Задание 2. Введите число и степень, чтобы получить число</h2>

    <v-text-field
      v-model.number="number"
      label="Число"
      type="number"
    ></v-text-field>

    <v-text-field
      v-model.number="power"
      label="Степень"
      type="number"
    ></v-text-field>

    <p>Результат: {{ result }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      power: 0
    }
  },

  computed: {
    result() {
      return Math.pow(this.number, this.power)
    }
  }
}
</script>
