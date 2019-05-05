export default {
  fetchAll({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/sprints')
        .then((response) => {
          commit('setAll', response.data.sprints)
          resolve(response.data.sprints)
        })
        .catch(err => reject(err))
    })
  },

  getTask({ commit }, sprintId) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`/sprints/${sprintId}`)
        .then((response) => {
          commit('setCurrent', response.data)
          resolve(response.data)
        })
        .catch(err => reject(err))
    })
  },

  updateTask({ commit }, sprint) {
    return new Promise((resolve, reject) => {
      this.$axios.put(
        `/sprints/${sprint._id}`,
        sprint
      )
        .then((response) => {
          commit('setCurrent', response.data)
          resolve(response.data)
        })
        .catch(err => reject(err))
    })
  },

  createTask({ commit }, sprint) {
    return new Promise((resolve, reject) => {
      this.$axios.post(
        `/sprints`,
        sprint
      )
        .then((response) => {
          commit('setCurrent', response.data)
          resolve(response.data)
        })
        .catch(err => reject(err))
    })
  },

  deleteTask({ commit }, sprintId) {
    return new Promise((resolve, reject) => {
      this.$axios.delete(`/sprints/${sprintId}`)
        .then((response) => {
          resolve(response)
        })
        .catch(err => reject(err))
    })
  }
}
