'use client'

import Link from 'next/link'
import {useState} from 'react'
import Dropdown from './Dropdown'
import {dropdownData} from './navbarData'

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string>('')

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown((prev) => (prev === dropdown ? '' : dropdown))
  }

  return (
    <nav>
      <div>
        <ul className='flex flex-col font-medium px-4 md:space-x-5 lg:space-x-5 rtl:space-x-reverse md:flex-row md:flex-wrap md:justify-center py-3'>
          <li>
            <Link
              href='#'
              className='block text-center py-2 text-sm text-darkTwo hover:text-main'
            >
              Home
            </Link>
          </li>

          {dropdownData.map((dropdown, index) => (
            <Dropdown
              key={index}
              label={dropdown.label}
              items={dropdown.items}
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
              dropdownKey={dropdown.label.toLowerCase().replace(/\s+/g, '')}
            />
          ))}

          <li>
            <Link
              href='#'
              className='block py-2 text-center text-sm text-darkTwo hover:text-main'
            >
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
      </div>
    </nav>
  )
}

export default NavBar
