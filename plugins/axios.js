import { getToken } from '@/utils/auth.js'

export default function ({ $axios, store }) {
  $axios.onRequest((config) => {
    console.log('getDatTok!')
    if (getToken()) {
      config.headers.common.Authorization = `Bearer ${getToken()}`
    }
  })
}
