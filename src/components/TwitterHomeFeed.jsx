import React, { useState, useEffect } from 'react'
import TweetsListView from './common/TweetsListView'
import CreateTweet from './CreateTweet'
import Divider from "./common/Divider"
import TweetService from '../service/tweet_service'

function TwitterHomeFeed({ currentUser }) {

  const [tweets, setTweets] = useState([])
  const [loading, setLoading] = useState(false)
  const [meta, setMeta] = useState({})
  useEffect(() => {
    const fetchTweets = async () => {
      setLoading(true)
      const tweetsResponse = await TweetService.index()
      setTweets((previousTweets) => [...previousTweets, ...tweetsResponse.data])
      setMeta(tweetsResponse.meta)
      setLoading(false)
    }
    fetchTweets()
  }, [])

  return (
    <>
      <CreateTweet onTweetCreated={setTweets} />
      <Divider />
      {loading
        ? <div className="loading_tweet">Loading...</div>
        : <TweetsListView currentUser={currentUser} tweets={tweets} setTweets={setTweets} meta={meta}/>}
    </>
  )
}

export default TwitterHomeFeed
