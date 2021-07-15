import React, { useState } from 'react'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
function CreateTweet() {
  const [tweet, setTweet] = useState("")
  function handleSubmit(event) {
    event.preventDefault();
    console.log(tweet)
  }
  function handleOnChange(event) {
    let currentTweet = event.target.value
    setTweet(currentTweet)
  }
  return (
    <div className="create_new_tweet">
      <div className="user_avatar"></div>
      <div className="create_new_tweet_box">
        <form className="create_tweet_form" onSubmit={handleSubmit}>
          
          <textarea name="tweet" className="tweet_input_box" value={tweet} type="text" placeholder="Whats Happening?" onChange={handleOnChange}></textarea>
          <div className="tweet_actions">
            <button className="twitter_action_button">
              <ImageOutlinedIcon />
            </button>
            <button className="tweet_action twitter_action_button">
              <div className="gif_div">
                <GifOutlinedIcon />
              </div>
            </button>
            <button className="tweet_action twitter_action_button">
              <EqualizerOutlinedIcon />
            </button>
            <button className="tweet_action twitter_action_button">
              <SentimentSatisfiedOutlinedIcon />
            </button>
            <button className="tweet_action twitter_action_button">
              <EventOutlinedIcon />
            </button>
            <button className="create-tweet-button" type="submit">Tweet</button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default CreateTweet
