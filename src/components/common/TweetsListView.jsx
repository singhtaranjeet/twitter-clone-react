import React, { useEffect, useState } from 'react'
import TweetService from '../../service/tweet_service'
import Tweet from './Tweet'

function TweetsListView(props) {
  const [tweets, setTweets] = useState([])
  useEffect(() => {
    const fetchTweets = async () => {
      const tweetsResponse = await TweetService.index()
      setTweets(tweetsResponse.data)
    }

    fetchTweets()
  }, [])
  return (
    <div className="tweets_list_view">
      {tweets.map((tweet) => (<Tweet key={tweet.id} tweet={tweet} />))}
    </div>
  )
}

export default TweetsListView
