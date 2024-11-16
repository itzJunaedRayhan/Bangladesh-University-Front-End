'use client'
import {useRef} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Button from '../button/Button'
import CarouselCard from './UpdateNewsCard'
import {CarouselData} from './updatedNewsData'

export default function UpdatedNews() {
  const sliderRef = useRef<Slider | null>(null)
  const settings = {
    dots: false, // Display dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Slide transition speed
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    arrows: true,

    responsive: [
      {
        breakpoint: 640, // For medium screen sizes
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 500, // For small screen sizes
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  // Function to handle previous slide
  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  // Function to handle next slide
  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  return (
    <div className='w-full flex flex-col items-center my-10'>
      <div className='max-w-[1020px] p-4'>
        <h2 className='text-[40px] text-darkTwo font-bold text-center xs:text-2xl md:text-3xl xl:text-[40px]'>
          Updated News
        </h2>
        <p className='py-4 text-lg text-darkTwo text-center xs:text-sm sm:text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
          elementum eu volutpat odio tristique ullamcorper gravida nulla. Id
          justo lobortis purus odio lectus urna, in aliquam.
        </p>
      </div>
      <div className='my-20 xl:h-[500px] xs:max-w-full xl:max-w-[1350px] relative xl:px-10 xs:px-5 xs:my-5 sm:my-7 md:my-10 xl:my-16'>
        <Slider ref={sliderRef} {...settings}>
          {CarouselData.map((data, index) => (
            <CarouselCard data={data} index={index} key={index} />
          ))}
        </Slider>
        <span
          className='absolute left-0 top-1/2 w-10 h-10 flex items-center justify-center bg-main text-white rounded-[50%] xs:w-7 xs:h-7 xs:left-0 xs:bg-transparent xs:text-main xl:bg-main xl:text-white'
          onClick={goToPrev}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='feather feather-chevron-left'
          >
            <polyline points='15 18 9 12 15 6'></polyline>
          </svg>
        </span>
        <span
          className='absolute right-0 top-1/2 w-10 h-10 flex items-center justify-center bg-main text-white rounded-[50%] xs:w-7 xs:h-7 xs:right-0 xs:bg-transparent xs:text-main xl:bg-main xl:text-white'
          onClick={goToNext}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='feather feather-chevron-right'
          >
            <polyline points='9 18 15 12 9 6'></polyline>
          </svg>
        </span>
      </div>
      <Button />
    </div>
  )
}
