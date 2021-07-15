import React from 'react'
import TweetsListView from './common/TweetsListView'
import CreateTweet from './CreateTweet'
import Divider from "./common/Divider"

function TwitterHomeFeed() {
  return (
    <>
      <CreateTweet></CreateTweet>
      <Divider/>
      <TweetsListView></TweetsListView>
    </>
  )
}

export default TwitterHomeFeed
