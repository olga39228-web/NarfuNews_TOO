<template>
  <v-container>
    <v-radio-group v-model="group">
    <h2>Задание 6. Вы студент филиала САФУ в г. Северодвинск?</h2>
      <v-radio label="Да" value="A"></v-radio>
      <v-radio label="Нет" value="B"></v-radio>
    </v-radio-group>
</v-container>
</template>
<script>
export default {
  data: () => ({ group: 'A' })
}
</script>
