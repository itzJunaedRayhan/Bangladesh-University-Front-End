'use client'

import React, {useCallback, useEffect, useRef, useState} from 'react'

interface CarouselProps {
  items: React.ReactNode[]
  renderNextButton?: ((onClick: () => void) => React.ReactNode) | null
  renderPrevButton?: ((onClick: () => void) => React.ReactNode) | null
  renderIndicator?:
    | ((isActive: boolean, index: number) => React.ReactNode)
    | null
  hideNextButton?: boolean
  hidePrevButton?: boolean
  autoSlide?: boolean
  autoSlideInterval?: number
  autoSlideSpeed?: number
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  renderNextButton,
  renderPrevButton,
  renderIndicator,
  hideNextButton = false,
  hidePrevButton = false,
  autoSlide = false,
  autoSlideInterval = 3000,
  autoSlideSpeed = 500,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }, [items.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    )
  }

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(nextSlide, autoSlideInterval)
      return () => clearInterval(interval)
    }
  }, [autoSlide, autoSlideInterval, nextSlide])

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setDragging(true)
    setStartX('touches' in e ? e.touches[0].clientX : e.clientX)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging) return
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX
    setDragOffset(x - startX)
  }

  const handleDragEnd = () => {
    setDragging(false)
    const threshold = 50
    const direction = dragOffset > 0 ? -1 : 1

    if (Math.abs(dragOffset) > threshold) {
      if (direction === 1) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
    setDragOffset(0)
  }

  return (
    <div
      className='relative w-full overflow-hidden'
      ref={containerRef}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <div
        className='flex transition-transform duration-300'
        style={{
          transform: `translateX(${
            -currentIndex * 100 +
            (dragOffset / (containerRef.current?.offsetWidth || 1)) * 100
          }%)`,
          transition: dragging ? 'none' : `transform ${autoSlideSpeed}ms ease`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className='flex-shrink-0 w-full'
            style={{pointerEvents: dragging ? 'none' : 'auto'}}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Conditionally render Prev Button */}
      {!hidePrevButton &&
        (renderPrevButton !== null ? (
          renderPrevButton ? (
            renderPrevButton(prevSlide)
          ) : (
            <button
              onClick={prevSlide}
              className='absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full shadow-lg transition-all'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-6 h-6'
              >
                <path d='M15 18l-6-6 6-6' />
              </svg>
            </button>
          )
        ) : null)}

      {/* Conditionally render Next Button */}
      {!hideNextButton &&
        (renderNextButton !== null ? (
          renderNextButton ? (
            renderNextButton(nextSlide)
          ) : (
            <button
              onClick={nextSlide}
              className='absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full shadow-lg transition-all'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-6 h-6'
              >
                <path d='M9 18l6-6-6-6' />
              </svg>
            </button>
          )
        ) : null)}

      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
        {items.map((_, index) => (
          <div key={index}>
            {renderIndicator === null ? null : renderIndicator ? (
              renderIndicator(currentIndex === index, index)
            ) : (
              <div
                className={`h-2 ${
                  currentIndex === index ? 'w-8' : 'opacity-40 w-4'
                } bg-white rounded transition-all`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
