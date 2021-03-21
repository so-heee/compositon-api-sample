<template>
  <v-btn dark color="green darken-2" @click="success()">
    Success Snackbar
  </v-btn>
</template>
<script lang="ts">
import { defineComponent, inject } from '@nuxtjs/composition-api'
import { SnackbarMessageKey } from '@/composables/snackbar'

export default defineComponent({
  components: {},
  props: {},
  setup() {
    const useSnackbar = inject(SnackbarMessageKey)
    const success = () => {
      useSnackbar!.openSnackbar({
        level: 'success',
        message: 'スポットを新規登録しました',
      })
    }
    return {
      success,
    }
  },
})
</script>
