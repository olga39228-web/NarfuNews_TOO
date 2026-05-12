<template>
  <v-autocomplete
    v-model="selection"
    :items="items"
    label="Выберите направления"
    multiple
  ></v-autocomplete>
</template>
<script>
export default {
  data: () => ({
    selection: null,
    items: ['Информатика и вычислительная техника', 
    'Кораблестроение', 'Машиностроение', 'Проектирование и постройка кораблей']
  })
}
</script>

