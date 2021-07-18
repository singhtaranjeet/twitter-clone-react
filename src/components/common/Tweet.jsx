import React from 'react'
import UserAvatar from "./UserAvatar"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Tweet({ tweet }) {
  console.log(tweet)
  return (
    <div className="tweet">
      <UserAvatar />
      <div className="tweet_box">
        <div className="tweet__user_info">
          <div>
            <span className="tweet_creator">
              {tweet.user.data.name}
            </span>
            <span className="tweet_username">
              @{tweet.user.data.email}
            </span>
          </div>
          <div>
            <MoreHorizIcon className="twitter_action_button tweet__user_actions" />
          </div>
        </div>
        <div className="tweet_post">
          {tweet.post}
        </div>
      </div>
    </div>
  )
}

export default Tweet
