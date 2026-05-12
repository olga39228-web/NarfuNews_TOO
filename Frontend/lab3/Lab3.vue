<template>
  <div>Здравствуйте! Заполните поля.</div>
    <div>
    <Lab3_1 />
    <hr />
    <Lab3_2 />
    <hr />
    <Lab3_3 />
    <hr />
    <Lab3_4 />
    <hr />
    <Lab3_5 />
    <hr />
    <Lab3_6 />
    <hr />
    <Lab3_7 />
  </div>
</template>

<script>
import Lab3_1 from './Lab3_1.vue'
import Lab3_2 from './Lab3_2.vue'
import Lab3_3 from './Lab3_3.vue'
import Lab3_4 from './Lab3_4.vue'
import Lab3_5 from './Lab3_5.vue'
import Lab3_6 from './Lab3_6.vue'
import Lab3_7 from './Lab3_7.vue'

export default {
  name: "Lab3",
components: {
    Lab3_1,
    Lab3_2,
    Lab3_3,
    Lab3_4,
    Lab3_5,
    Lab3_6,
    Lab3_7
    }
}
</script>