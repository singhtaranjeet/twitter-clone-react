import {
  fetchFromLocalStorage,
  storeInLocalStorage,
} from './LocalStorageHelper'

const authTokenKey = 'auth_token'
export const setAuthToken = (token) => {
  if (!token) return

  storeInLocalStorage({
    key: authTokenKey,
    value: token,
  })
}

export const getAuthToken = () => {
  return fetchFromLocalStorage({ key: authTokenKey })
}

export const isLoggedIn = () => {
  const token = fetchFromLocalStorage({ key: authTokenKey })
  if (!token) return false

  return true
}

export const removeTokens = () => {
  storeInLocalStorage({
    key: authTokenKey,
    value: null,
  })
}
