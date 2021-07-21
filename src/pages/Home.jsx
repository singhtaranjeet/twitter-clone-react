import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import TwitterHomeFeed from '../components/TwitterHomeFeed';
import UserService from '../service/user_service'

export default function Home() {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const userInfo = await UserService.me()
      setCurrentUser(userInfo)
    }
    fetchCurrentUser()
  }, [])

  return (
    <div className="home_page">
      <div className="home_content">
        <div className="page_stickey_header">
        <div className="page_topBar">
          <span className="page_title">Home</span>
          <button className="twitter_action_button">
            <ArrowUpwardIcon />
          </button>
        </div>
        </div>
        <TwitterHomeFeed currentUser={currentUser}></TwitterHomeFeed>
      </div>
      <div className="trending_section">Trending Page</div>
    </div>

  )
}