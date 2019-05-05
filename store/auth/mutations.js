export default {
  setUser(store, data) {
    store.user = data
  },
  resetUser(store) {
    store.user = {}
  }
}
