export default {
  fetchAll({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/tasks')
        .then((response) => {
          commit('setAll', response.data.tasks)
          resolve(response.data.tasks)
        })
        .catch(err => reject(err))
    })
  },

  getTask({ commit }, taskId) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`/tasks/${taskId}`)
        .then((response) => {
          commit('setCurrent', response.data)
          resolve(response.data)
        })
        .catch(err => reject(err))
    })
  },

  updateTask({ commit }, task) {
    return new Promise((resolve, reject) => {
      this.$axios.put(
        `/tasks/${task._id}`,
        task
      )
        .then((response) => {
          commit('setCurrent', response.data)
          resolve(response.data)
        })
        .catch(err => reject(err))
    })
  },

  createTask({ commit }, task) {
    return new Promise((resolve, reject) => {
      this.$axios.post(
        `/tasks`,
        task
      )
        .then((response) => {
          commit('setCurrent', response.data)
          resolve(response.data)
        })
        .catch(err => reject(err))
    })
  },

  deleteTask({ commit }, taskId) {
    return new Promise((resolve, reject) => {
      this.$axios.delete(`/tasks/${taskId}`)
        .then((response) => {
          resolve(response)
        })
        .catch(err => reject(err))
    })
  }
}
