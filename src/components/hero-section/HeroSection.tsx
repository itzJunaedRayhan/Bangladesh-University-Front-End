'use client'

import Image from 'next/image'
import Carousel from '../carousel/Carousel'

const items = [
  <div key='nature-water' className='relative w-full h-[300px]'>
    <Image
      layout='fill'
      src='/images/c1.jpg'
      alt='Nature Water'
      style={{objectFit: 'cover'}}
    />
  </div>,
  <div key='nature-forest' className='relative w-full h-[300px]'>
    <Image
      layout='fill'
      src='/images/c2.jpg'
      alt='Nature Forest'
      style={{objectFit: 'cover'}}
    />
  </div>,
  <div key='nature-mountain' className='relative w-full h-[300px]'>
    <Image
      layout='fill'
      src='/images/c3.jpg'
      alt='Nature Mountain'
      style={{objectFit: 'cover'}}
    />
  </div>,
]

const HeroSection = () => {
  return (
    <div className='mx-auto pb-16 h-[500px]'>
      <Carousel
        items={items}
        renderNextButton={() => (
          <button className='bg-blue-500 text-white p-2 rounded-full absolute right-2 top-1/2 -translate-y-1/2'>
            Next
          </button>
        )}
        renderPrevButton={() => (
          <button className='bg-blue-500 text-white p-2 rounded-full absolute left-2 top-1/2 -translate-y-1/2'>
            Prev
          </button>
        )}
        renderIndicator={(isActive) => (
          <div
            className={`h-1 ${isActive ? 'bg-black w-8' : 'bg-gray-300 w-4'} rounded transition-all`}
          />
        )}
      />
    </div>
  )
}

export default HeroSection
