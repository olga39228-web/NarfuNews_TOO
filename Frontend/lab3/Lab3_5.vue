<template>
  <v-container>
    <h2>Задание 5. Откройте диалог и введите сообщение</h2>
    <v-btn @click="dialog = true">Открыть диалог</v-btn>

    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-text>
          <v-text-field v-model="field1" label="Поле 1"></v-text-field>
          <v-text-field v-model="field2" label="Поле 2"></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="logData">Отправить</v-btn>
          <v-btn @click="dialog = false">Закрыть</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      field1: '',
      field2: ''
    }
  },
  methods: {
    logData() {
      console.log('Поле 1:', this.field1);
      console.log('Поле 2:', this.field2);
    }
  }
}
</script>
