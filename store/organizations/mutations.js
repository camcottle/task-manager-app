export default {
  setAll(state, organizations) {
    console.log(organizations)
    state.all = organizations
  },

  setSelected(state, selected) {
    state.selected = selected
  }
}
