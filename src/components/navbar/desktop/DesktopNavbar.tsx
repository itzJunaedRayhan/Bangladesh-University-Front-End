import Image from 'next/image'
import Link from 'next/link'
import Dropdown from '../navbar-dropdown/Dropdown'
import styles from '../Navbar.module.css'
import {dropdownData} from '../navbarData'

const DesktopNavBar = () => (
  <div className='hidden lg:flex justify-between items-center'>
    <div className='flex items-center gap-28'>
      <Link href='/' className={styles.logo}>
        <Image
          src='/images/logo.png'
          alt='Logo'
          width={150}
          height={150}
          priority
        />
      </Link>
    </div>
    <ul className='flex items-center space-x-5 md:space-x-6'>
      <li>
        <Link href='#' className='text-darkTwo text-sm hover:text-main'>
          Home
        </Link>
      </li>
      {dropdownData.map((dropdown, index) => (
        <Dropdown key={index} label={dropdown.label} items={dropdown.items} />
      ))}
      <li>
        <Link href='#' className='text-darkTwo text-sm hover:text-main'>
          Certificate
        </Link>
      </li>
      <li>
        <Link
          href='#'
          className='py-2 px-3 text-md text-white bg-main rounded-md border border-transparent hover:text-main hover:border-main hover:bg-white'
        >
          Online Portal
        </Link>
      </li>
    </ul>
    <div className='relative'>
      <input
        type='text'
        placeholder='Search...'
        className='pl-4 pr-4 py-2 rounded-full bg-white border border-gray-300 focus:outline-none'
      />
      <svg
        className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400'
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

export default DesktopNavBar
