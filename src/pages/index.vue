<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <successSnackbar />
        <errorSnackbar />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import successSnackbar from '@/components/successSnackbar.vue'
import errorSnackbar from '@/components/errorSnackbar.vue'

export default defineComponent({
  components: {
    successSnackbar,
    errorSnackbar,
  },
  props: {},
  setup() {
    return {}
  },
})
</script>
