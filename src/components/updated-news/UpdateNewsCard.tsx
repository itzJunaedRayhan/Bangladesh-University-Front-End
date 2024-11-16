import Image from 'next/image'
import Link from 'next/link'
import {CarouselCardProps} from './UpdatedNewsDataInterface'

export default function CarouselCard({data, index}: CarouselCardProps) {
  return (
    <div className='flex flex-wrap justify-center gap-5 lg:mx-4 xs:mx-1 sm:mx-2 xs:gap-2'>
      <div
        className='max-w-[440px] xl:h-[500px] flex xs:flex-col xs:items-center shadow-lg rounded-md border xs:h-auto xs:w-[95%] sm:w-full lg:h-[350px]'
        key={index}
      >
        <Image
          className='w-full h-[60%] object-cover rounded-t-md sm:h-1/2'
          src={data.imageURL}
          width={400}
          height={350}
          alt={data.title}
        />
        <div className='w-4/6 xs:w-full xs:px-2 lg:px-4'>
          <h3 className='py-4 font-bold text-xl text-darkTwo xs:text-xs xs:text-left sm:text-lg sm:leading-6 md:text-lg lg:text-xl lg:leading-9'>
            {data.title}
          </h3>
          <div className='flex xs:flex-col sm:flex-row items-center justify-between'>
            <Link
              href={data.link}
              className='text-main text-[16px] font-bold flex text-nowrap items-center xs:text-xs sm:text-sm lg:text-[16px]'
            >
              {data.ButtonText}
              <svg
                className='w-2.5 h-2.5 ml-2 text-main xs:ml-1 sm:hidden md:block'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 8 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1'
                />
              </svg>
            </Link>
            <span className='flex text-nowrap items-center text-sm text-main xs:text-xs xs:mt-1 xs:mb-4 sm:text-sm sm:mt-0 sm:mb-0 lg:text-[16px]'>
              {data.date}
              <svg
                className='w-3.5 h-3.5 ml-2 text-main sm:hidden md:block'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  fill='currentColor'
                  d='M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z'
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
