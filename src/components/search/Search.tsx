import React from 'react'

interface SearchInputProps {
  value: string
  placeholder?: string
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  placeholder = 'Search',
}) => {
  return (
    <div className='relative'>
      <input
        type='text'
        value={value}
        placeholder={placeholder}
        className='input bg-[#F8F0F0] input-bordered w-24 md:w-auto pl-8'
      />
      <span className='absolute top-1/2 right-3 transform -translate-y-1/2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='#666666'
          viewBox='0 0 24 24'
          className='w-6 h-6'
          role='img'
          aria-hidden='true'
        >
          <path d='M10 2a8 8 0 015.29 13.71l5 5a1 1 0 01-1.41 1.41l-5-5A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z' />
        </svg>
      </span>
    </div>
  )
}

export default SearchInput
