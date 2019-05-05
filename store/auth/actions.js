import { setAuthToken, resetAuthToken } from '~/utils/auth'

export default {
  async login({ commit }, data) {
    try {
      const res = await this.$axios.$post('/login', data)
      commit('setUser', res)
      setAuthToken(res.token)
      return res
    } catch ({ response }) {
      return response
    }
  },

  logout({ commit }) {
    try {
      commit('resetUser')
      resetAuthToken()
    } catch (err) {
    }
  }
}
