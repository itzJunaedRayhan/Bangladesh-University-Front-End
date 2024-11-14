// src/components/footer/Footer.tsx
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-neutral text-neutral-content p-8'>
      <div className='flex justify-between'>
        <div>
          <h4 className='text-xl font-semibold'>University Name</h4>
          <p>Providing quality education for over 50 years.</p>
        </div>
        <div>
          <h5 className='font-semibold'>Quick Links</h5>
          <ul className='space-y-2'>
            <li>
              <Link href='/about'>About Us</Link>
            </li>
            <li>
              <Link href='/courses'>Courses</Link>
            </li>
            <li>
              <Link href='/admissions'>Admissions</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className='font-semibold'>Follow Us</h5>
          <ul className='space-y-2'>
            <li>
              <a href='https://facebook.com' target='_blank'>
                Facebook
              </a>
            </li>
            <li>
              <a href='https://twitter.com' target='_blank'>
                Twitter
              </a>
            </li>
            <li>
              <a href='https://linkedin.com' target='_blank'>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='text-center mt-4'>
        <p>
          &copy; {new Date().getFullYear()} University Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
