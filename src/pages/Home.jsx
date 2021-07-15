import React from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import TwitterHomeFeed from '../components/TwitterHomeFeed';

export default function Home() {
  return (
    <div className="home_page">
      <div className="home_content">
        <div className="page_topBar">
          <span className="page_title">Home</span>
          <button className="twitter_action_button">
            <ArrowUpwardIcon/>
          </button>
        </div>
        <TwitterHomeFeed></TwitterHomeFeed>
      </div>
      <div className="trending_section">Trending Page</div>
    </div>

  )
}