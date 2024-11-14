'use client'

import Image from 'next/image'
import Link from 'next/link'
import Dropdown from './navbar-dropdown/Dropdown'
import styles from './NavBar.module.css'
import {dropdownData} from './navbarData'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className='container mx-auto px-4 py-3'>
        <div className='hidden lg:flex justify-between items-center'>
          <div className='flex items-center gap-28'>
            <Link href='/' className={styles.logo}>
              <Image
                src='/images/logo.png'
                alt='Logo'
                width={40}
                height={40}
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
              <Dropdown
                key={index}
                label={dropdown.label}
                items={dropdown.items}
              />
            ))}

            <li>
              <Link href='#' className='text-darkTwo text-sm hover:text-main'>
                Certificate
              </Link>
            </li>

            <li>
              <Link
                href='#'
                className='py-2 px-3 flex justify-center align-baseline text-md text-white bg-main rounded-md border border-transparent hover:text-main hover:border-main hover:bg-white'
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

        <div className='lg:hidden flex justify-between items-center w-full'>
          <label htmlFor='my-drawer' className='text-darkTwo cursor-pointer'>
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

          <div>
            <Link href='/'>
              <Image
                src='/images/logo.png'
                alt='Logo'
                width={40}
                height={40}
                priority
              />
            </Link>
          </div>

          <div className='relative'>
            <input
              type='text'
              placeholder='Search...'
              className='pl-3 py-1 max-w-32 rounded-full border focus:outline-none bg-white text-sm'
            />
            <div className=''>
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
        </div>
      </div>

      <div className='drawer'>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-side'>
          <label
            htmlFor='my-drawer'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu bg-white text-base-content min-h-full w-80 p-4'>
            <li>
              <a>Home</a>
            </li>
            {dropdownData.map((dropdown, index) => (
              <li key={index}>
                <details className='group'>
                  <summary className='cursor-pointer'>{dropdown.label}</summary>
                  <ul className='pl-4'>
                    {dropdown.items?.map((item, subIndex) => (
                      <li key={subIndex}>
                        {!item.subItems ? (
                          <a>{item.name}</a>
                        ) : (
                          <details className='group'>
                            <summary className='cursor-pointer'>
                              {item.name}
                            </summary>
                            <ul className='pl-4'>
                              {item.subItems?.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <a>{subItem}</a>
                                </li>
                              ))}
                            </ul>
                          </details>
                        )}
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
            <li>
              <a>Certificate</a>
            </li>
            <li>
              <Link
                href='#'
                className='flex justify-center text-md text-white bg-main rounded-md border border-transparent hover:text-main hover:border-main hover:bg-white'
              >
                Online Portal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
