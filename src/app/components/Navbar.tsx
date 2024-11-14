/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import logo from '../../../public/images/logo.png'


export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDropdown = (dropdownName: any) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className='bg-white fixed w-full z-20 top-0 start-0 border-b border-red-600'>
      <div className='max-w-[1450px] h-28 flex items-center justify-between mx-auto p-0 xs:w-11/12 xs:h-20 md:h-auto xl:h-28'>
        {/* Logo */}
        <Link href='/' className='flex items-center'>
          <Image
            src={logo}
            className='h-14 xs:w-10 xs:h-10 md:w-32 md:h-16 lg:w-20 lg:h-16 xl:w-14 xl:h-14'
            alt='Logo'
            width={60}
            height={80}
          />
        </Link>

        {/* Search Input */}
        <div className='md:order-2'>
          <label className='input h-11  w-[220px] bg-[#F8F0F0] flex items-center gap-2 border-none  focus-within:outline-none xs:w-48 md:w-44 lg:w-[260px]'>
            <input
              type='text'
              className='grow outline-none text-darkTwo border-none focus:ring-0'
              placeholder='Search'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='h-6 w-6 opacity-70'
            >
              <path
                fillRule='evenodd'
                d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                clipRule='evenodd'
              />
            </svg>
          </label>
        </div>

        {/* Mobile Navbar */}
        <div className='md:hidden'>
          <div role='button' className='btn btn-ghost btn-circle' onClick={() => toggleMobileMenu()}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
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
          </div>
          <ul className={`${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-md pl-3 pt-6 pb-12 w-10/12 max-h-screen h-auto overflow-y-scroll absolute left-0 top-0 font-medium space-y-2 scrollbar-hidden`}>
          {/* Main Menu Item - Home */}
          <li>
            <Link href='#' className='block  py-2 text-darkTwo text-sm hover:text-main'>
              Home
            </Link>
          </li>

          {/* Main Menu Item - About */}
          <li>
            <Link href='#' className='block  py-2 text-darkTwo text-sm hover:text-main'>
              About
            </Link>
            <ul className='ml-4 space-y-1'>
              {['About BU', 'Mission & Vision', 'The Founder', 'The Board of Trustees', 'Career'].map((item, index) => (
                <li key={index}>
                  <Link href='#' className='block py-1 text-darkTwo text-sm hover:text-main'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Main Menu Item - Academics */}
          <li>
            <Link href='#' className='block  py-2 text-darkTwo text-sm hover:text-main'>
              Academics
            </Link>
            <ul className='ml-4 space-y-1'>
              {[
                {
                  name: 'Faculty of Science, Engineering & Technology',
                  subItems: [
                    'Computer Science & Engineering (CSE)',
                    'Mathematics',
                    'Pharmacy',
                    'Electrical and Electronics Engineering (EEE)',
                    'Architecture',
                  ],
                },
                {
                  name: 'Faculty of Arts, Social Science & Law',
                  subItems: ['English', 'Sociology', 'Law'],
                },
                {
                  name: 'Faculty of Business Administration & Economics',
                  subItems: ['Business Administration', 'Economics'],
                },
              ].map((faculty, index) => (
                <li key={index}>
                  <Link href='#' className='block py-1 text-darkTwo text-sm hover:text-main'>
                    {faculty.name}
                  </Link>
                  <ul className='ml-4 space-y-1'>
                    {faculty.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href='#' className='block py-1 text-darkTwo text-sm hover:text-main'>
                          {subItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>

          {/* Main Menu Item - Admission */}
          <li>
            <Link href='#' className='block  py-2 text-darkTwo text-sm hover:text-main'>
              Admission
            </Link>
            <ul className='ml-4 space-y-1'>
              {['Academic Calendar', 'Academic Policy', 'Courses & Tuition Fees', 'Offered Degrees', 'Rules and Regulation'].map((item, index) => (
                <li key={index}>
                  <Link href='#' className='block py-1 text-darkTwo text-sm hover:text-main'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Main Menu Item - Administration */}
          <li>
            <Link href='#' className='block  py-2 text-darkTwo text-sm hover:text-main'>
              Administration
            </Link>
            <ul className='ml-4 space-y-1'>
              {['The Vice-Chancellor', 'Pro-Vice-Chancellor', 'Treasurer', 'Registrar Office', 'Exam Control Office', 'Syndicate'].map((item, index) => (
                <li key={index}>
                  <Link href='#' className='block py-1 text-darkTwo text-sm hover:text-main'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Main Menu Item - News and Events */}
          <li>
            <Link href='#' className='block  py-2 text-darkTwo text-sm hover:text-main'>
              News & Events
            </Link>
            <ul className='ml-4 space-y-1'>
              {['All Events', 'All News', 'Campus Life', 'Photo Gallery', 'Video Gallery', 'News Archive', 'Convocation'].map((item, index) => (
                <li key={index}>
                  <Link href='#' className='block py-1 text-darkTwo text-sm hover:text-main'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Main Menu Item - Certificate */}
          <li>
            <Link href='#' className='block  py-2 text-darkTwo text-sm hover:text-main'>
              Certificate
            </Link>
          </li>

          {/* Main Menu Item - Online Portal */}
          <li>
            <Link href='#' className='block  py-2 text-darkTwo text-sm hover:text-main'>
              Online Portal
            </Link>
          </li>
          </ul>
        </div>



        {/* DESLTOP - Navbar Links */}
        <div
          className={`hidden w-full  md:flex md:flex-wrap md:flex-row md:w-auto`}
        >
          <ul className='flex flex-col font-medium px-4 md:space-x-5 lg:space-x-5 rtl:space-x-reverse md:flex-row md:flex-wrap md:justify-center py-3'>
            <li>
              <Link
                href='#'
                className='block text-center  py-2 text-sm text-darkTwo hover:text-main'
              >
                Home
              </Link>
            </li>

            {/* About Dropdown */}
            <li>
              <button
                onClick={() => toggleDropdown('about')}
                className='text-darkTwo text-sm  hover:text-main rounded-lg px-2 py-2 inline-flex items-center'
                type='button'
              >
                About
                <svg
                  className='w-2 h-2 ml-1.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 1l4 4 4-4'
                  />
                </svg>
              </button>
              {activeDropdown === 'about' && (
                <div className='z-10 w-[220px] mt-3 absolute bg-white rounded-lg shadow'>
                  <ul className='py-3 text-sm text-darkTwo'>
                    {[
                      'About BU',
                      'Mission & Vision',
                      'The Founder',
                      'The Board of Trustees',
                      'Career',
                    ].map((text, index) => (
                      <li key={index}>
                        <Link
                          href='#'
                          className='block px-4 py-3 text-sm  hover:text-main'
                        >
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* Academics */}
            <li>
              <button
                onClick={() => toggleDropdown('academics')}
                className='text-darkTwo text-sm  hover:text-main rounded-lg px-2 py-2 inline-flex items-center'
                type='button'
              >
                Academics
                <svg
                  className='w-2 h-2 ml-1.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 1l4 4 4-4'
                  />
                </svg>
              </button>
              {activeDropdown === 'academics' && (
                <div className='z-10 w-[265px] md:w-[250px] lg:w-[265px] mt-3 absolute bg-white rounded-lg shadow'>
                  <ul className='py-0 text-sm text-darkTwo'>
                    {[
                      {
                        name: 'Faculty of Science, Engineering & Technology',
                        subItems: [
                          'Computer Science & Engineering (CSE)',
                          'Mathematics',
                          'Pharmacy',
                          'Electrical and Electronics Engineering (EEE)',
                          'Architecture',
                        ],
                      },
                      {
                        name: 'Faculty of Arts, Social Science & Law',
                        subItems: ['English', 'Sociology', 'Law'],
                      },
                      {
                        name: 'Faculty of Business Administration & Economics',
                        subItems: ['Business Administration', 'Economics'],
                      },
                    ].map((faculty, index) => (
                      <li key={index} className='relative group'>
                        <Link
                          href='#'
                          className='block px-4 py-3 text-sm  hover:text-main'
                        >
                          {faculty.name}
                        </Link>
                        {/* Sub-dropdown for each faculty */}
                        <div className='hidden group-hover:block absolute left-full top-0 mt-0 ml-0.5 w-[265px] md:w-[200px] lg:w-[265px] bg-white rounded-lg shadow'>
                          <ul className='py-0 text-sm text-darkTwo'>
                            {faculty.subItems.map((item, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href='#'
                                  className='block px-4 py-3 top-0 text-sm  hover:text-main'
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* Admission Dropdown */}
            <li>
              <button
                onClick={() => toggleDropdown('admission')}
                className='text-darkTwo text-sm  hover:text-main rounded-lg px-2 py-2 inline-flex items-center'
                type='button'
              >
                Admission
                <svg
                  className='w-2 h-2 ml-1.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 1l4 4 4-4'
                  />
                </svg>
              </button>
              {activeDropdown === 'admission' && (
                <div className='z-10 w-[220px] mt-3 absolute bg-white rounded-lg shadow'>
                  <ul className='py-3 text-sm text-darkTwo'>
                    {[
                      'Academic Calendar',
                      'Academic Policy',
                      'Courses & Tuition Fees',
                      'Offered Degrees',
                      'Rules and Regulation',
                    ].map((text, index) => (
                      <li key={index}>
                        <Link
                          href='#'
                          className='block px-4 py-3 text-sm  hover:text-main'
                        >
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* Administration Dropdown */}
            <li>
              <button
                onClick={() => toggleDropdown('administration')}
                className='text-darkTwo text-sm  hover:text-main rounded-lg py-2 inline-flex items-center'
                type='button'
              >
                Administration
                <svg
                  className='w-2 h-2 ml-1.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 1l4 4 4-4'
                  />
                </svg>
              </button>
              {activeDropdown === 'administration' && (
                <div className='z-10 w-[220px] mt-3 absolute bg-white rounded-lg shadow'>
                  <ul className='py-3 text-sm text-darkTwo'>
                    {[
                      'The Vice-Chancellor',
                      'Pro-Vice-Chancellor',
                      'Treasurer',
                      'Registrar Office',
                      'Exam Control Office',
                      'Syndicate',
                    ].map((text, index) => (
                      <li key={index}>
                        <Link
                          href='#'
                          className='block px-4 py-3 text-sm  hover:text-main'
                        >
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* News and Events Dropdown */}
            <li>
              <button
                onClick={() => toggleDropdown('newsEvents')}
                className='text-darkTwo text-sm  hover:text-main rounded-lg px-2 py-2 inline-flex items-center'
                type='button'
              >
                News & Events
                <svg
                  className='w-2 h-2 ml-1.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 1l4 4 4-4'
                  />
                </svg>
              </button>
              {activeDropdown === 'newsEvents' && (
                <div className='z-10 w-[220px] mt-3 absolute bg-white rounded-lg shadow'>
                  <ul className='py-3 text-sm text-darkTwo'>
                    {[
                      'All Events',
                      'All News',
                      'Campus Life',
                      'Photo Gallery',
                      'Video Gallery',
                      'News Archive',
                      'Convocation',
                    ].map((text, index) => (
                      <li key={index}>
                        <Link
                          href='#'
                          className='block px-4 py-3 text-sm  hover:text-main'
                        >
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link
                href='#'
                className='block py-2 text-center  text-sm text-darkTwo hover:text-main'
              >
                Certificate
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='block py-2 text-center  text-sm text-darkTwo hover:text-main'
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
