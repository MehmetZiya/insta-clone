import Image from 'next/image'
import { useRouter } from 'next/router'

const LeftSideHeader = () => {
  const router = useRouter()
  return (
    <>
      <div className='items-center h-24 w-24 relative hidden lg:inline-grid '>
        <Image
          src='http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png'
          alt='Instagram'
          className='cursor-pointer'
          width={300}
          height={40}
          onClick={() => router.push('/')}
        />
      </div>
      <div className='flex items-center h-24 w-10 relative  lg:hidden'>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png'
          alt='Instagram'
          className='cursor-pointer'
          width={200}
          height={200}
          onClick={() => router.push('/')}
        />
      </div>
    </>
  )
}

export default LeftSideHeader
