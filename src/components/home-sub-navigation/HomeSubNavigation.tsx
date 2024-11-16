import Link from 'next/link'
import {HomeSubNavigationData} from './HomeSubNavigationData'

export default function HomeSubNavigation() {
  return (
    <div className='w-full flex gap-4 items-center justify-center mb-20 xs:flex-wrap xs:px-2 xs:gap-3 sm:gap-4'>
      {HomeSubNavigationData.map((data, index) => (
        <Link
          href=''
          key={index}
          className='border flex flex-col items-center justify-center w-[250px] h-[150px] rounded-md bg-[#F8F0F0] border-[#E8D0D0] group hover:bg-main hover:text-white xs:w-[45%] xs:max-w-[180px] xs:h-24 xl:max-w-[250px] sm:w-[30%] sm:h-[140px] lg:w-[160px] lg:h-[140px] xl:w-[250px] xl:h-[150px]'
        >
          <span className='group-hover:text-white'>{data.icons}</span>
          <p className='text-center text-nowrap text-darkTwo text-2xl font-light group-hover:text-white xs:text-[16px] xs:py-1 sm:text-xl lg:text-[16px] xl:text-2xl'>
            {data.title}
          </p>
        </Link>
      ))}
    </div>
  )
}
