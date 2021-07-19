import React, {useState} from 'react'
import TweetsListView from './common/TweetsListView'
import CreateTweet from './CreateTweet'
import Divider from "./common/Divider"

function TwitterHomeFeed({currentUser}) {

  return (
    <>
      <CreateTweet></CreateTweet>
      <Divider/>
      <TweetsListView currentUser={currentUser}></TweetsListView>
    </>
  )
}

export default TwitterHomeFeed
