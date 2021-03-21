<template>
  <v-app dark>
    <v-main>
      <v-container>
        <!-- <base-snackbar /> -->
        <nuxt />
      </v-container>
    </v-main>
    <CommonSnackbar />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import CommonSnackbar from '@/components/CommonSnackbar.vue'

export default defineComponent({
  components: {
    CommonSnackbar,
  },
  props: {},
  setup() {
    return {}
  },
})
</script>
