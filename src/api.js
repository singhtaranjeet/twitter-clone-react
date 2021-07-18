import axios from 'axios'
import { getAuthToken } from './helper/AuthHelper'

export const getAPIClient = () => {
  const headers = { 'Content-Type': 'application/json' }
  const authorization = getAuthorizationToken()
  if (authorization) {
    headers['Authorization'] = authorization
  }
  headers["Access-Control-Allow-Origin"] = "*"
  return axios.create({ baseURL: process.env.REACT_APP_BACKEND_BASE_URL, headers })
}

export const getAuthorizationToken = () => {
  const token = getAuthToken()
  return `Bearer ${token}`
}

export const generateURL = (url, UrlReplacements) => {
  if (!url) return url
  if (!UrlReplacements) return url
  let createdUrl = url
  Object.keys(UrlReplacements).forEach(
    (key) => (createdUrl = createdUrl.replace(`:${key}`, UrlReplacements[key]))
  )
  return createdUrl
}

export const APIEndPoints = {
  login: { url: '/login', method: 'post' },
  profile: { url: '/profile', method: 'get' },
  tweets: {
    create: { url: '/tweets', method: 'post' },
    show: { url: '/tweets/:id', method: 'get' },
    index: { url: '/tweets', method: 'get' },
    update: { url: '/tweets/:id', method: 'put' },
  },
  user: {
    create: { url: '/users', method: 'post' },
    index: { url: '/users', method: 'get' },
    update: { url: '/users/:id', method: 'put' },
    show: { url: '/users/:id', method: 'post' },
  },
}
