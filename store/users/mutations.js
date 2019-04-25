export default {
  setAll(state, users) {
    state.users = { ...users }
  },

  setSelected(state, selected) {
    state.selected = selected
  }
}
