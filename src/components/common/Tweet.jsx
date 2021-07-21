import React, { useState } from 'react'
import UserAvatar from "./UserAvatar"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import { MenuItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import { RoutesHelper } from '../../helper/RoutesHelper';
import TweetService from '../../service/tweet_service'

function Tweet({ tweet, currentUser, showHoverClick = true, setTweets, tweetRef }) {
  const tweetOwnerOptions = [{ id: "delete", name: "Delete" }]
  const tweetViewerOptions = [{ id: "report", name: "Report" }, { id: "follow", name: "Follow" }]
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null)
  const history = useHistory()

  const handleMoreButtonClick = (event) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
    setIsMenuOpened(!isMenuOpened)
  }
  const handleClose = (event) => {
    event.stopPropagation()
    const userAction = event.target.textContent
    handleUserAction(userAction)
    setAnchorEl(null)
    setIsMenuOpened(false)
  }
  const handleTweetClicked = (event) => {
    if (!showHoverClick) return
    history.push(`tweets/${tweet.id}`, [currentUser, tweet])
  }
  const handleAvatarClicked = (event) => {
    event.stopPropagation()
  }
  const handleUserAction = (action) => {
    if (action === "Delete") {
      deleteTweet()
    }
  }
  const deleteTweet = async () => {
    const response = TweetService.delete(tweet.id)
    if (!response) { return }
    setTweets((tweets) => {
      return tweets.filter((t) => t.id !== tweet.id)
    })
  }

  return (
    <div className="tweet" ref={tweetRef} onClick={handleTweetClicked}>
      <UserAvatar onClick={handleAvatarClicked} userId={tweet.user.data.id} />
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
            <IconButton area-label="More" area-haspopup="true" size="small" onClick={handleMoreButtonClick}  >
              <MoreHorizIcon className="twitter_action_button tweet__user_actions" />
            </IconButton>
            <Menu open={isMenuOpened} onClose={handleClose} anchorEl={anchorEl}
              children={tweet.user.data.id === currentUser.id
                ? (tweetOwnerOptions.map((action) => (<MenuItem onClick={handleClose} key={action.id} >{action.name}</MenuItem>)))
                : (tweetViewerOptions.map((action) => (<MenuItem onClick={handleClose} key={action.id}>{action.name}</MenuItem>)))}
            />
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
