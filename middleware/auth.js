import { checkToken, getToken } from '@/utils/auth'

console.log('doop')

export default async function ({ store, redirect, app }) {
  const success = await checkToken(store)

  if (!success) {
    return redirect('/login')
  }

  const token = getToken()
  app.$axios.setToken(token, 'Bearer')
  console.log('token', token)
  app.$axios.setHeader('Content-Type', 'application/json')

  const user = store.state.auth.user
  const loggedIn = !!user

  if (!loggedIn) {
    return redirect('/login')
  } else {
    console.log('logged in')
  }

  return true
}
