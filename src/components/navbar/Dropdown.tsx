import Link from 'next/link'
import React, {useState} from 'react'
import {DropdownItem} from './dropdown.types'

interface DropdownProps {
  label: string
  items: DropdownItem[]
  activeDropdown: string
  toggleDropdown: (dropdownKey: string) => void
  dropdownKey: string
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  items,
  activeDropdown,
  toggleDropdown,
  dropdownKey,
}) => {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)

  const handleMouseEnter = (itemName: string) => {
    setActiveSubMenu(itemName)
  }

  const handleMouseLeave = () => {
    setActiveSubMenu(null)
  }

  return (
    <li className='relative'>
      <button
        onClick={() => toggleDropdown(dropdownKey)}
        className='text-darkTwo text-sm hover:text-main rounded-lg py-2 inline-flex items-center'
        type='button'
      >
        {label}
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
      {activeDropdown === dropdownKey && (
        <div className='z-10 w-[220px] mt-3 absolute bg-white rounded-lg shadow'>
          <ul className='py-3 text-sm text-darkTwo'>
            {items.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
                className='relative'
              >
                <Link
                  href='#'
                  className='block px-4 py-3 text-sm hover:text-main'
                >
                  {item.name}
                </Link>
                {item.subItems && activeSubMenu === item.name && (
                  <div className='absolute left-full top-0 mt-2 w-48 bg-white rounded-lg shadow'>
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href='#'
                        className='block px-4 py-3 text-sm hover:text-main'
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}

export default Dropdown
