'use client'

import React, {useRef, useState} from 'react'

interface CarouselProps {
  items: React.ReactNode[]
  renderNextButton?: () => React.ReactNode
  renderPrevButton?: () => React.ReactNode
  renderIndicator?: (isActive: boolean, index: number) => React.ReactNode
  hideNextButton?: boolean
  hidePrevButton?: boolean
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  renderNextButton,
  renderPrevButton,
  renderIndicator,
  hideNextButton = false,
  hidePrevButton = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    )
  }

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    setStartX('touches' in e ? e.touches[0].clientX : e.clientX)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return

    const x = 'touches' in e ? e.touches[0].clientX : e.clientX
    setDragOffset(x - startX) // Update the offset based on the drag distance
  }

  const handleDragEnd = () => {
    setIsDragging(false)

    const threshold = 50 // Amount of drag needed to move to the next or previous slide
    const direction = dragOffset > 0 ? -1 : 1 // Determine which direction to move

    // Determine if we should move to the next or previous slide
    if (Math.abs(dragOffset) > threshold) {
      if (direction === 1) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    // Reset drag offset after the drag ends
    setDragOffset(0)
  }

  return (
    <div
      className='carousel-container relative w-full overflow-hidden'
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
        className='carousel-inner flex transition-transform duration-300'
        style={{
          transform: `translateX(${
            -currentIndex * 100 +
            (dragOffset / (containerRef.current?.offsetWidth || 1)) * 100
          }%)`, // Apply real-time translation
          transition: isDragging ? 'none' : 'transform 0.3s ease', // Disable transition while dragging
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className='carousel-item flex-shrink-0 w-full'
            style={{
              width: '100%',
              pointerEvents: isDragging ? 'none' : 'auto', // Disable interaction with images during drag
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {!hidePrevButton &&
        (renderPrevButton ? (
          renderPrevButton()
        ) : (
          <button
            onClick={prevSlide}
            className='absolute left-2 top-1/2 -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full'
          >
            &#8592;
          </button>
        ))}
      {!hideNextButton &&
        (renderNextButton ? (
          renderNextButton()
        ) : (
          <button
            onClick={nextSlide}
            className='absolute right-2 top-1/2 -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full'
          >
            &#8594;
          </button>
        ))}
      <div className='carousel-indicators absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2'>
        {items.map((_, index) =>
          renderIndicator ? (
            <div key={index}>
              {renderIndicator(currentIndex === index, index)}
            </div>
          ) : (
            <div
              key={index}
              className={`w-6 h-1 ${currentIndex === index ? 'bg-black' : 'bg-gray-300'}`}
            />
          ),
        )}
      </div>
    </div>
  )
}

export default Carousel
