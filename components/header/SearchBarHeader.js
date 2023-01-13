import { SearchIcon } from '@heroicons/react/outline'

const SearchBarHeader = () => {
  return (
    <div className='relative mt-1'>
      <div className='absolute top-2 left-2'>
        <SearchIcon className='h-4 text-gray-500' />
      </div>
      <input
        type='text'
        placeholder='Search'
        className=' pl-10 py-2 border-solid border-2 border-gray-400 text-sm rounded-md'
      />
    </div>
  )
}

export default SearchBarHeader
