import Cookie from 'js-cookie'

export function setAuthToken(token) {
  if (process.client) localStorage.setItem('token', token)
  Cookie.set('token', token)
}

export function resetAuthToken() {
  if (process.client) localStorage.removeItem('token')

  Cookie.remove('token')
}

export function getToken() {
  console.log('getToken')
  if (process.client) {
    return localStorage.getItem('token')
  }

  return Cookie.get('token')
}

export async function checkToken(store) {
  if (process.client && !!getToken()) {
    setAuthToken(getToken())
  }

  if (!store.state.auth.user && !getToken()) {
    setAuthToken(getToken())
    try {
      await store.dispatch('auth/fetch')
    } catch (e) {
      resetAuthToken()
      return false
    }
  }
  return true
}
