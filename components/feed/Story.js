/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Story = ({ username, userImg }) => {
  return (
    <div className=''>
      <img
        className='h-14 rounded-full p-[1.5px] border-2 border-red-500 cursor-pointer hover:scale-110 transition transform duration-200 ease-out'
        src={userImg}
        alt={username}
      />
      <p className='text-xs w-14 truncate'>{username}</p>
    </div>
  )
}

export default Story
