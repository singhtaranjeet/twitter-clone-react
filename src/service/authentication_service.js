import { APIEndPoints, getAPIClient } from '../api'

export default class AuthenticationService {
  static login = async ({ userName, password }) => {
    const apiEndPoint = APIEndPoints['login']
    const apiClient = getAPIClient()
    const data = {
      email: userName,
      password,
    }
    
    let response = await apiClient.request({
      url: apiEndPoint['url'],
      method: apiEndPoint['method'],
      data: data,
    })
    const responseData = response.data.data
    return responseData
  }
}
