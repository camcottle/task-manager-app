export default {
  fetchAll({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/milestones')
        .then((response) => {
          commit('setAll', response.data.milestones)
        })
        .catch(err => reject(err))
    })
  },

  getMilestone({ commit }, milestoneId) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`/milestones/${milestoneId}`)
        .then((response) => {
          commit('setCurrent', response.data)
          resolve(response.data)
        })
        .catch(err => reject(err))
    })
  },

  updateMilestone({ commit }, milestone) {
    return new Promise((resolve, reject) => {
      console.log(milestone)
      this.$axios.put(
        `/milestones/${milestone._id}`,
        milestone
      )
        .then((response) => {
          commit('setCurrent', response.data)
          resolve(response.data)
        })
        .catch(err => reject(err))
    })
  },

  createMilestone({ commit }, milestone) {
    return new Promise((resolve, reject) => {
      this.$axios.post(
        `/milestones`,
        milestone
      )
        .then((response) => {
          commit('setCurrent', response.data)
          resolve(response.data)
        })
        .catch(err => reject(err))
    })
  },

  deleteMilestone({ commit }, milestoneId) {
    return new Promise((resolve, reject) => {
      this.$axios.delete(`/milestones/${milestoneId}`)
        .then((response) => {
          resolve(response)
        })
        .catch(err => reject(err))
    })
  }
}
