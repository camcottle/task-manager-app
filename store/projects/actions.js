export default {
  fetchAll({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/projects')
        .then((response) => {
          commit('setAll', response.data.projects)
          console.log(response.data)
          resolve(response.data.projects)
        })
        .catch(err => reject(err))
    })
  },

  getProject({ commit }, projectId) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`/projects/${projectId}`)
        .then((response) => {
          commit('setCurrent', response.data)
          resolve(response.data)
        })
        .catch(err => reject(err))
    })
  },

  updateProject({ commit }, project) {
    return new Promise((resolve, reject) => {
      this.$axios.put(
        `/projects/${project._id}`,
        project
      )
        .then((response) => {
          commit('setCurrent', response.data)
          resolve(response.data)
        })
        .catch(err => reject(err))
    })
  },

  createProject({ commit }, project) {
    return new Promise((resolve, reject) => {
      this.$axios.post(
        `/projects`,
        project
      )
        .then((response) => {
          commit('setCurrent', response.data)
          resolve(response.data)
        })
        .catch(err => reject(err))
    })
  },

  deleteProject({ commit }, projectId) {
    return new Promise((resolve, reject) => {
      this.$axios.delete(`/projects/${projectId}`)
        .then((response) => {
          resolve(response)
        })
        .catch(err => reject(err))
    })
  }
}
