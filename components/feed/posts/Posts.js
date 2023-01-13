import Post from './Post'

const Posts = () => {
  const posts = [
    {
      id: 1,
      username: 'johndoe',
      userImg: 'https://i.pravatar.cc/150?img=32',
      img: 'https://i.pravatar.cc/150?img=32',
      caption: 'This is a caption',
    },
    {
      id: 2,
      username: 'deepdark',
      userImg: 'https://i.pravatar.cc/150?img=22',
      img: 'https://i.pravatar.cc/150?img=52',
      caption: 'This is a caption',
    },
  ]
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
