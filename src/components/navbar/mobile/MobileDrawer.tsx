import Link from 'next/link'
import {dropdownData} from '../navbarData'

const MobileDrawer = () => (
  <div className='drawer z-10'>
    <input id='mobile-drawer' type='checkbox' className='drawer-toggle' />
    <div className='drawer-side'>
      <label
        htmlFor='mobile-drawer'
        aria-label='close sidebar'
        className='drawer-overlay'
      ></label>
      <ul className='menu bg-white text-base-content min-h-full w-80 p-4'>
        <li>
          <a>Home</a>
        </li>
        {dropdownData.map((dropdown, index) => (
          <li key={index}>
            <details>
              <summary className='cursor-pointer'>{dropdown.label}</summary>
              <ul className='pl-4'>
                {dropdown.items?.map((item, subIndex) => (
                  <li key={subIndex}>
                    {!item.subItems ? (
                      <a>{item.name}</a>
                    ) : (
                      <details>
                        <summary>{item.name}</summary>
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
            className='py-2 text-md text-white bg-main rounded-md border border-transparent hover:text-main hover:border-main hover:bg-white'
          >
            Online Portal
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default MobileDrawer
