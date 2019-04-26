export default {
  fetchAll({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/organizations')
        .then((organizations) => {
          commit('setAll', organizations.data.data)
        })
        .catch(err => reject(err))
    })
  },

  getOrganization({ commit }, organizationId) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`/organizations/${organizationId}`)
        .then((organization) => {
          commit('setCurrent', organization.data)
          resolve(organization.data)
        })
        .catch(err => reject(err))
    })
  },

  updateOrganization({ commit }, organization) {
    return new Promise((resolve, reject) => {
      console.log(organization)
      this.$axios.put(
        `/organizations/${organization._id}`,
        organization
      )
        .then((organization) => {
          commit('setCurrent', organization.data)
          resolve(organization.data)
        })
        .catch(err => reject(err))
    })
  },

  createOrganization({ commit }, organization) {
    return new Promise((resolve, reject) => {})
  },

  deleteOrganization({ commit }, organizationId) {
    return new Promise((resolve, reject) => {})
  }
}
