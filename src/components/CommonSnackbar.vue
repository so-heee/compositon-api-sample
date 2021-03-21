<template>
  <v-snackbar v-model="snackbar.visible" vertical>
    {{ snackbar.message }}

    <template #action="{ attrs }">
      <v-btn :color="snackbar.level" text v-bind="attrs" @click="close()">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script lang="ts">
import { defineComponent, inject } from '@nuxtjs/composition-api'
import { SnackbarMessageKey, UseSnackbarType } from '@/composables/snackbar'

export default defineComponent({
  setup() {
    const { snackbar, closeSnackbar } = inject(
      SnackbarMessageKey
    ) as UseSnackbarType
    const close = () => {
      closeSnackbar()
    }
    return {
      snackbar,
      close,
    }
  },
})
</script>
