import React from 'react'
import faker from 'faker'
let userImages = {}

function UserAvatar({ onClick, userId }) {

  let randomImageUrl = userImages[userId]
  if (!randomImageUrl) {
    randomImageUrl = faker.image.avatar()
    userImages[userId] = randomImageUrl
  }

  return (
    <img className="user_avatar" onClick={onClick} src={randomImageUrl} alt="User avatar" />
  )
}

export default UserAvatar
