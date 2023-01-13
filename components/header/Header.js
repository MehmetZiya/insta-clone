import Image from 'next/image'
import { useRouter } from 'next/router'
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import LeftSideHeader from './LeftSideHeader'
import SearchBarHeader from './SearchBarHeader'
import RightSideHeader from './RightSideHeader'

const Header = () => {
  const router = useRouter()
  return (
    <div className='shadow-sm border-b sticky top-0 bg-white z-30'>
      <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
        <LeftSideHeader />
        <SearchBarHeader />
        <RightSideHeader />
      </div>
    </div>
  )
}

export default Header
