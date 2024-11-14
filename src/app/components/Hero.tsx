import Image from 'next/image'
import React from 'react'
import heroImg from '../../../public/images/hero.png'

export default function Hero() {
  return (
    <div>
        <Image className='w-full xl:h-[650px] xs:h-[300px] border' src={heroImg}  sizes="" alt='' style={{objectFit: 'cover'}} />
    </div>
  )
}
