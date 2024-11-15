import Link from 'next/link'

export default function Button() {
  return (
    <Link
      href='#'
      className=' group text-lg py-3 px-4 rounded-md flex items-center justify-center bg-main text-white'
    >
      Read More
      <svg
        className='w-4 h-4 text-white ml-2'
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
