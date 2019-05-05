export default {
  fetchAll({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/users')
        .then((response) => {
          console.log(response.data)
          commit('setAll', response.data.users)
          resolve(response.data.users)
        })
        .catch(err => reject(err))
    })
  },

  getUser({ commit }, userId) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`/users/${userId}`)
        .then((response) => {
          commit('setCurrent', response.data)
          resolve(response.data)
        })
        .catch(err => reject(err))
    })
  },

  updateUser({ commit }, user) {
    return new Promise((resolve, reject) => {
      this.$axios.put(
        `/users/${user._id}`,
        user
      )
        .then((response) => {
          commit('setCurrent', response.data)
          resolve(response.data)
        })
        .catch(err => reject(err))
    })
  },

  createUser({ commit }, user) {
    return new Promise((resolve, reject) => {
      this.$axios.post(
        `/users`,
        user
      )
        .then((response) => {
          commit('setCurrent', response.data)
          resolve(response.data)
        })
        .catch(err => reject(err))
    })
  },

  deleteUser({ commit }, userId) {
    return new Promise((resolve, reject) => {
      this.$axios.delete(`/users/${userId}`)
        .then((response) => {
          resolve(response)
        })
        .catch(err => reject(err))
    })
  }
}
