import store from "@/store"

export function isAuth(value) {
  return store.getters.btnPermission.includes(value)
}
