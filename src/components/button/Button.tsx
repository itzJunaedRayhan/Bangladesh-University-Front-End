import Link from 'next/link'

export default function Button() {
  return (
    <Link
      href='#'
      className='xs:max-w-28 md:max-w-32 lg:max-w-36 text-nowrap group text-lg py-3 px-4 xs:py-2 xs:text-sm xs:px-2 md:py-2 md:px-2 md:text-lg xl:px-4 xl:py-3 rounded-md flex items-center justify-center bg-main text-white border border-transparent transition duration-300 ease-in-out hover:bg-white hover:text-main hover:border-main'
    >
      Read More
      <svg
        className='w-4 h-4 xs:w-2.5 xs:2.5 md:w-3 md:h-3 xl:w-4 xl:h-4 -rotate-45 text-white ml-2 transition duration-300 ease-in-out group-hover:text-main'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 14 10'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M1 5h12m0 0L9 1m4 4L9 9'
        />
      </svg>
    </Link>
  )
}
