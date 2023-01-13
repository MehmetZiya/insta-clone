import minifaker from 'minifaker'
import 'minifaker/locales/en'
import { useState, useEffect } from 'react'
import Story from './Story'

const Stories = () => {
  const [storyUsers, setStoryUsers] = useState([])
  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      userImg: `https://i.pravatar.cc/150?img=${Math.floor(
        Math.random() * 70
      )}`,
      id: minifaker.uuid.v4(),
    }))
    setStoryUsers(storyUsers)
  }, [])

  return (
    <div>
      {storyUsers.map((storyUser) => (
        <Story
          key={storyUser.id}
          username={storyUser.username}
          userImg={storyUser.userImg}
        />
      ))}
    </div>
  )
}

export default Stories
