<template>
  <v-btn dark color="red darken-2" @click="error()"> Error Snackbar </v-btn>
</template>
<script lang="ts">
import { defineComponent, inject } from '@nuxtjs/composition-api'
import { SnackbarMessageKey } from '@/composables/snackbar'

export default defineComponent({
  setup() {
    const useSnackbar = inject(SnackbarMessageKey)
    const error = () => {
      useSnackbar!.openSnackbar({ level: 'error', message: 'error' })
    }
    return {
      error,
    }
  },
})
</script>
