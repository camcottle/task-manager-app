export default function ({ store, redirect, app }) {
  app.$axios.setHeader('Content-Type', 'application/json', ['post'])
  return true
}
