import React from 'react'
import styles from './Dropdown.module.css'
import {DropdownItem} from './dropdown.types'

interface DropdownProps {
  label: string
  items: DropdownItem[]
}

const Dropdown: React.FC<DropdownProps> = ({label, items}) => {
  return (
    <li className={styles.relative}>
      <button className='text-darkTwo text-sm hover:text-main rounded-lg py-2 inline-flex items-center'>
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

      <div className={styles.dropdownMenu}>
        <ul className={styles.dropdownList}>
          {items.map((item, index) => (
            <li key={index} className={styles.dropdownItem}>
              <a href='#' className='block px-4 py-3 text-sm hover:text-main'>
                {item.name}
              </a>

              {item.subItems && (
                <ul className={styles.subMenu}>
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href='#'
                        className='block px-4 py-3 text-sm hover:text-main'
                      >
                        {subItem}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default Dropdown
