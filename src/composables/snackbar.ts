import { InjectionKey, reactive } from '@nuxtjs/composition-api'
export type SnackbarLevel = 'success' | 'info' | 'error' | 'warning' | null

export interface Snackbar {
  visible?: boolean
  message: string
  level?: SnackbarLevel
  code?: number
}

export type UseSnackbarType = ReturnType<typeof useSnackbar>
export const SnackbarMessageKey: InjectionKey<UseSnackbarType> = Symbol(
  'UseSnackbarType'
)

export function useSnackbar() {
  const snackbar = reactive<Snackbar>({
    visible: false,
    message: '',
  })
  const openSnackbar = (_snackbar: Snackbar) => {
    snackbar.visible = !snackbar.visible
    snackbar.level = _snackbar.level
    snackbar.message = _snackbar.message
  }
  const closeSnackbar = () => {
    snackbar.visible = false
    snackbar.message = ''
  }
  return {
    snackbar,
    openSnackbar,
    closeSnackbar,
  }
}
