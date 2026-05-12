<template>
  <v-container>
    <h2>Задание 3. Выберите дату подачи заявки</h2>
    <v-text-field :model-value="formattedDate" label="Дата" readonly></v-text-field>
    <v-date-picker v-model="selectedDate"></v-date-picker>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const selectedDate = ref(null);

const formattedDate = computed(() => {
  if (!selectedDate.value) return '';
  return format(new Date(selectedDate.value), 'EEEE, d MMMM', { locale: ru });
});
</script>
