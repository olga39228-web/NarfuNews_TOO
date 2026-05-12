<template>
  <v-app>
  <Lab3 />
    <v-btn icon="clear" />
    <v-icon icon="mdi-home" />
  </v-app>
</template>
<script>
import Lab3 from './lab3/Lab3.vue'
export default {
  name: 'App',
  components: {
    Lab3
  }
};
</script>
