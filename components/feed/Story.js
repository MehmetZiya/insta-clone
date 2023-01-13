import React from 'react'

const Story = ({ username, userImg }) => {
  return (
    <div>
      <img src={userImg} alt={username} />
      <p>{username}</p>
    </div>
  )
}

export default Story
