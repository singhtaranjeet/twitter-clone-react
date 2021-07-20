import React from 'react'
import faker from 'faker'

function UserAvatar({ onClick }) {
  let randomImageUrl = faker.image.avatar()
  return (
    <img className="user_avatar" onClick={onClick} src={randomImageUrl} alt="User avatar" />
  )
}

export default UserAvatar
