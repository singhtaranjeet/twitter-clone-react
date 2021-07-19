import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import TweetService from '../service/tweet_service'
import UserService from '../service/user_service'
import UserAvatar from "../components/common/UserAvatar"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import { MenuItem } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


function TweetShow(props) {
  const params = useParams()
  const [tweet, setTweet] = useState({})
  const [currentUser, setUser] = useState({})
  const id = params.id
  const [loadingTweet, setLoadingTweet] = useState(true)
  const [loadingUser, setLoadingUser] = useState(true)
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null)
  const tweetOwnerOptions = [{ id: "delete", name: "Delete" }]
  const tweetViewerOptions = [{ id: "report", name: "Report" }, { id: "follow", name: "Follow" }]
  const history = useHistory()

  useEffect(() => {
    const fetchUser = async () => {
      setLoadingUser(true)
      const user = await UserService.me()
      setUser(user)
      setLoadingUser(false)
    }
    const fetchTweet = async () => {
      setLoadingTweet(true)
      const tweetResponse = await TweetService.show(id)
      setTweet(tweetResponse)
      setLoadingTweet(false)
    }
    fetchTweet()
    fetchUser()
  }, [])

  const handleMoreButtonClick = (event) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
    setIsMenuOpened(!isMenuOpened)
  }
  const handleBackButtonClick = () => {
    history.goBack()
  }

  const handleClose = (event) => {
    console.log(event.target.textContent)
    event.stopPropagation()
    setAnchorEl(null)
    setIsMenuOpened(false)
  }
  return (
    <div className="tweet_show">
      <>
        <div className="tweet_show_page">
          <div className="tweet_show_topBar">
            <>
              <IconButton area-label="Back" area-haspopup="true" size="small" className="back_button" onClick={handleBackButtonClick}  >
                <KeyboardBackspaceIcon className="twitter_action_button tweet__user_actions" />
              </IconButton>
              Thread
            </></div>
          {loadingTweet || loadingUser
            ? <div>Loading</div>
            :
            <div className="show_tweet_box">
              <div className="tweet_show_header">
                <UserAvatar />
                <div className="tweet_header_box">
                  <div className="tweet_user_info">
                    <div className="tweet_creator">
                      {tweet.user.data.name}
                    </div>
                    <div className="tweet_show_username">
                      @{tweet.user.data.email}
                    </div>
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
                <div>
                </div>
              </div>
              <div className="show_tweet_post">
                {tweet.post}
              </div>
            </div>
          }
        </div>
        <div className="tweet_show_trending_section"> Search User</div>
      </>
    </div>

  )
}

export default TweetShow