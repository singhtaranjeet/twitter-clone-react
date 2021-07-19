import { deserialise } from 'kitsu-core'
import { getAPIClient, APIEndPoints } from '../api'

export default class UserService {
  static me = async () => {
    const apiEndPoint = APIEndPoints['me']
    const apiClient = getAPIClient()
    try {
      const response = await apiClient.request({
        url: apiEndPoint['url'],
        method: apiEndPoint['method'],
      })
      console.log(response.data)
      const deserialisedData = deserialise(response.data)
      return deserialisedData.data 
    } catch (e) {
      console.log(e)
    }
  }

}
