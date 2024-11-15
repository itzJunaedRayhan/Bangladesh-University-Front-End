import Image from 'next/image'
import Link from 'next/link'

const MobileNavBar = () => (
  <div className='lg:hidden flex justify-between items-center w-full'>
    <label htmlFor='mobile-drawer' className='text-darkTwo cursor-pointer'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-7 w-7'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4 6h16M4 12h16M4 18h7'
        />
      </svg>
    </label>
    <Link href='/'>
      <Image
        src='/images/logo.png'
        alt='Logo'
        width={40}
        height={40}
        priority
      />
    </Link>
    <div className='relative'>
      <input
        type='text'
        placeholder='Search...'
        className='pl-3 py-1 max-w-32 rounded-full border focus:outline-none bg-white text-sm'
      />
      <svg
        className='absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M11 3a8 8 0 110 16 8 8 0 010-16zM21 21l-4.35-4.35'
        />
      </svg>
    </div>
  </div>
)

export default MobileNavBar
