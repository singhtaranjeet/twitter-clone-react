import { deserialise } from 'kitsu-core'
import { getAPIClient, APIEndPoints } from '../api'

export default class TweetService {
  static apiEndPoints = APIEndPoints['tweets']

  static index = async () => {
    const apiEndPoint = this.apiEndPoints['index']
    const apiClient = getAPIClient()
    const response = await apiClient.request({
      url: apiEndPoint['url'],
      method: apiEndPoint['method'],
    })
    console.log(response.data)
    const deserialisedResponse = deserialise(response.data)
    return deserialisedResponse
  }
  static create = async (tweet) => {
    const apiEndPoint = this.apiEndPoints['create']
    const apiClient = getAPIClient()

    const data = {
      tweet: {
        post: tweet,
      },
    }

    const response = await apiClient.request({
      url: apiEndPoint['url'],
      method: apiEndPoint['method'],
      data: data,
    })
    const responseData = response.data.data
    const deserialisedResponse = deserialise(responseData)
    return deserialisedResponse
  }
}
