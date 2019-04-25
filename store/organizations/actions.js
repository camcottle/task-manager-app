export default {
  fetchAll({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$axios.get('http://localhost:3000/v1/organizations')
        .then((organizations) => {
          console.log(organizations)
          commit('setAll', organizations.data.data)
          resolve({ organizations })
        })
        .catch(err => reject(err))
    })
  },

  getOrganization({ commit }, organizationId) {
    return new Promise((resolve, reject) => {})
  },

  updateOrganization({ commit }, organization) {
    return new Promise((resolve, reject) => {})
  },

  createOrganization({ commit }, organization) {
    return new Promise((resolve, reject) => {})
  },

  deleteOrganization({ commit }, organizationId) {
    return new Promise((resolve, reject) => {})
  }
}
