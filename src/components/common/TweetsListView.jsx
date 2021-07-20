import React, { useState, useRef, useCallback, useEffect } from 'react'

import Tweet from './Tweet'
import TweetService from "../../service/tweet_service"

function TweetsListView({ currentUser, tweets, setTweets, meta }) {
  console.log(tweets)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [pageMeta, setPageMeta] = useState(meta)
  const observer = useRef()

  const lastTweetRef = useCallback((tweetNode) => {

    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        if (hasMore && !loading) {
          console.log("Visible")
          // setPage((page) => pageMeta.next)
          fetchNextTweets()
        }
      }
    })
    if (tweetNode) observer.current.observe(tweetNode)
    console.log(tweetNode)
  }, [hasMore, loading])

  const fetchNextTweets = async () => {
    setLoading(true)
    const tweetsResponse = await TweetService.index(pageMeta.next)
    setTweets((previousTweets) => [...previousTweets, ...tweetsResponse.data])
    setPageMeta(tweetsResponse.meta)
    if (tweetsResponse.meta.next) {
      setHasMore(true)
    } else {
      setHasMore(false)
    }
    setLoading(false)
  }

  return (
    <div className="tweets_list_view">
      {tweets.map((tweet, index) => {
        return tweets.length === index + 1
          ? <Tweet tweet={tweet} key={tweet.id} tweetRef={lastTweetRef} currentUser={currentUser} setTweets={setTweets} />
          : <Tweet tweet={tweet} key={tweet.id} currentUser={currentUser} setTweets={setTweets} />
      }
      )
      }
      {loading ? <div className="loading_tweet">Loading...</div> : <></>}
    </div>
  )
}

export default TweetsListView
