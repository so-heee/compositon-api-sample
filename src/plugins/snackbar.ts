import { onGlobalSetup, provide } from '@nuxtjs/composition-api'
import { useSnackbar, SnackbarMessageKey } from '@/composables/snackbar'

export default () => {
  onGlobalSetup(() => {
    provide(SnackbarMessageKey, useSnackbar())
  })
}
