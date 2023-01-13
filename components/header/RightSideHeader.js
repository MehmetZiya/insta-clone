/* eslint-disable react/jsx-no-comment-textnodes */
import { PlusCircleIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

const RightSideHeader = () => {
  const router = useRouter()
  const currentUser = null
  return (
    <div className='flex space-x-4 items-center'>
      <HomeIcon
        onClick={() => router.push('/')}
        className='hidden md:inline-flex  h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out'
      />
      {currentUser ? (
        <>
          <PlusCircleIcon
            onClick={() => setOpen(true)}
            className='h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out'
          />

          <img
            src={currentUser?.userImg}
            alt='user-image'
            className='h-10 rounded-full cursor-pointer'
          />
        </>
      ) : (
        <button onClick={() => router.push('/auth/signin')}>Sign in</button>
      )}
    </div>
  )
}

export default RightSideHeader
