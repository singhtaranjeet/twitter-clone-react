import { deserialise } from 'kitsu-core'
import { getAPIClient, APIEndPoints, generateURL } from '../api'

export default class TweetService {
  static apiEndPoints = APIEndPoints['tweets']

  static index = async () => {
    const apiEndPoint = this.apiEndPoints['index']
    const apiClient = getAPIClient()
    try {
      const response = await apiClient.request({
        url: apiEndPoint['url'],
        method: apiEndPoint['method'],
      })
      console.log(response.data)
      return deserialise(response.data)
    } catch (e) {
      console.log(e)
    }
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
    return deserialise(responseData)
  }

  static show = async (id) => {
    const apiEndPoint = this.apiEndPoints['show']
    const apiClient = getAPIClient()
    const url = generateURL(apiEndPoint['url'], { id })
    const response = await apiClient.request({
      url: url,
      method: apiEndPoint['method'],
    })
    const responseData = response.data
    const dd = deserialise(responseData)
    return dd.data
  }
}
