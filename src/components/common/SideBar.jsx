import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { NavLink, Link} from 'react-router-dom'

const sideBarData = [
  {
    key: 'home',
    icon: <HomeIcon />,
    label: "Home",
    path: "/home"
  },
  {
    key: 'explore',
    icon: <SearchIcon />,
    label: "Explore",
    path: "/explore"
  },
  {
    key: 'notifications',
    icon: <NotificationsIcon />,
    label: "Notifications",
    path: "/notifications"
  },
  {
    key: 'messages',
    icon: <MailOutlineIcon />,
    label: "Messages",
    path: "/messages"
  },
  {
    key: 'bookmarks',
    icon: <BookmarkBorderIcon />,
    label: "Bookmarks",
    path: "/bookmarks"
  },
  {
    key: 'lists',
    icon: <ListAltIcon />,
    label: "Lists",
    path: "/lists"
  },
  {
    key: 'profile',
    icon: <PersonIcon />,
    label: "Profile",
    path: "/profile"
  },
  {
    key: 'more',
    icon: <MoreHorizIcon />,
    label: "More",
    path: "/more"
  },
]

function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBar_item">
        <Link to="/home">
          <TwitterIcon style={{color: "hsl(202.8, 89.1%, 53.1%)"}}/>
        </Link>
      </div>
      {
        sideBarData.map((item) => {
          return (<div key={item.key} className="sideBar_item">
            <NavLink to={item.path}>
              <div>
                {item.icon}
                <h2>{item.label}</h2>
              </div>
            </NavLink>
          </div>)
        })
      }
      <button className="sideBar__tweet-button">Tweet</button>

    </div>
  )
}

export default SideBar
