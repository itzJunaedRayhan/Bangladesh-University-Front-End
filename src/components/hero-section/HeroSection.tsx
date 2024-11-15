'use client'

import Image from 'next/image'
import Carousel from '../carousel/Carousel'

const items = [
  <div key='nature-water' className='relative w-full h-[500px]'>
    <Image
      layout='fill'
      src='/images/c1.jpg'
      alt='Nature Water'
      style={{objectFit: 'cover'}}
    />
  </div>,
  <div key='nature-forest' className='relative w-full h-[500px]'>
    <Image
      layout='fill'
      src='/images/c2.jpg'
      alt='Nature Forest'
      style={{objectFit: 'cover'}}
    />
  </div>,
  <div key='nature-mountain' className='relative w-full h-[500px]'>
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
    <div className='mx-auto pb-16'>
      <Carousel
        items={items}
        autoSlide={true}
        autoSlideInterval={5000}
        autoSlideSpeed={1000}
      />
    </div>
  )
}

export default HeroSection
