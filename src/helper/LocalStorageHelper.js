export const storeInLocalStorage = ({ key, value }) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.log(error)
    return null
  }
}

export const fetchFromLocalStorage = ({ key }) => {
  try {
    const value = localStorage.getItem(key)
    return JSON.parse(value)
  } catch (error) {
    console.log(error)
    return null
  }
}
