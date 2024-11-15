import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer bg-base-200 '>
      <div className='container mx-auto text-base-content p-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:justify-items-center'>
        {/* First Column: Logo, Description, Search */}
        <div>
          <Image src='/images/logo.png' alt='Logo' width={100} height={100} />
          <p className='mt-4 text-sm'>
            We provide innovative educational solutions to help students grow
            and succeed in their academic journey.
          </p>
          <div className='mt-4'>
            <input
              type='text'
              placeholder='Search...'
              className='input rounded-none input-bordered focus:outline-none max-w-xs'
            />
            <button className='btn btn-primary rounded-none max-w-xs'>
              Search
            </button>
          </div>
        </div>

        {/* Second Column: Quick Links */}
        <div>
          <h1 className='text-2xl font-bold'>
            <span className='text-white'>Quick</span>{' '}
            <span className='text-red-500'>Links</span>
          </h1>
          <div className='flex flex-col gap-4 pt-4'>
            <a href='/about-us' className='link link-hover'>
              About Us
            </a>
            <a href='/services' className='link link-hover'>
              Programs
            </a>
            <a href='/admissions' className='link link-hover'>
              Admissions
            </a>
            <a href='/contact' className='link link-hover'>
              Contact
            </a>
          </div>
        </div>

        {/* Third Column: Contact Us */}
        <div>
          <h1 className='text-2xl font-bold'>
            <span className='text-white'>Contact</span>{' '}
            <span className='text-red-500'>Us</span>
          </h1>

          <div className='flex flex-col gap-6 pt-4'>
            <p className='text-sm'>
              Feel free to reach out to us with any questions or inquiries.
            </p>
            <div>
              <div className='mb-6'>
                <p className='font-semibold'>Permanent Campus</p>
                <p>
                  5/B, Beribandh Main Road, Adabar, Mohammadpur, Dhaka - 1207
                </p>
              </div>

              <div className='mb-6'>
                <p className='font-semibold'>
                  Admission Section (For Admission Info Only)
                </p>
                <p className='flex flex-col gap-2 py-2'>
                  <a href='tel:+8801755559301' className='link link-hover'>
                    +88 01755-559301
                  </a>
                  <a href='tel:+8801755559320' className='link link-hover'>
                    +88 01755-559320
                  </a>
                  <a href='tel:+8801755559328' className='link link-hover'>
                    +88 01755-559328
                  </a>
                </p>
                <a
                  href='mailto:admission@bu.edu.bd'
                  className='link link-hover'
                >
                  admission@bu.edu.bd
                </a>
              </div>

              <div className='mb-6'>
                <p className='font-semibold'>
                  Exam Controller Office (Certificate & Transcript)
                </p>
                <p>
                  <a href='tel:+8801740243896' className='link link-hover'>
                    +88 01740-243896
                  </a>
                  <a href='tel:+8801755511975' className='link link-hover'>
                    +88 01755-511975
                  </a>
                </p>
              </div>

              <div className='mb-6'>
                <p className='font-semibold'>
                  Accounts Section (For Financial Info)
                </p>
                <p>
                  <a href='tel:+8801755559327' className='link link-hover ml-2'>
                    +88 01755-559327
                  </a>
                </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className='flex gap-8'>
              <a
                href='https://www.facebook.com/BangladeshUniversityBd/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-xl text-blue-600 hover:text-blue-700'
              >
                <Image
                  src='/images/facebook.png'
                  alt='Twitter'
                  width={30}
                  height={30}
                />
              </a>
              <a
                href='https://twitter.com/bu_officialpage'
                target='_blank'
                rel='noopener noreferrer'
                className='text-xl text-blue-400 hover:text-blue-500'
              >
                <Image
                  src='/images/twitter.png'
                  alt='Twitter'
                  width={30}
                  height={30}
                />
              </a>
              <a
                href='https://www.linkedin.com/school/bangladesh-university/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-xl text-blue-700 hover:text-blue-800'
              >
                <Image
                  src='/images/linkedin.png'
                  alt='LinkedIn'
                  width={30}
                  height={30}
                />
              </a>
              <a
                href='https://www.youtube.com/@BangladeshUniversityBd'
                target='_blank'
                rel='noopener noreferrer'
                className='text-xl text-red-600 hover:text-red-700'
              >
                <Image
                  src='/images/youtube.png'
                  alt='YouTube'
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
