import Image from 'next/image'
import WelcomeImage from '../../../public/images/welcome-image.png'
import Button from '../button/Button'

export default function WelcomeSection() {
  return (
    <div className='max-w-[1400px] w-full mx-auto flex justify-between items-center gap-6 xs:flex-wrap xs:p-4 xs:justify-center lg:p-0 xl:justify-between xl:mx-auto xl:flex-nowrap'>
      <Image
        className='max-h-[510px] xl:w-[40%] xs:max-w-[95%]'
        src={WelcomeImage}
        width='1000'
        height='1000'
        alt='Welcome-Image'
      />
      <div className=' pl-6 pr-3 py-2 xs:pr-0 xs:pl-0 xs:max-w-[95%] xl:max-w-[60%] xl:px-7 xl:pb-7'>
        <h4 className='text-xl text-main xs:text-sm'>
          knowledge meets innovation
        </h4>
        <h2 className='text-darkTwo md:text-5xl md:leading-[55px] font-bold my-3 xs:text-2xl sm:text-4xl sm:leading-[45px]'>
          Welcome To Bangladesh University
        </h2>
        <p className='text-darkTwo text-[16px] lg:leading-10 text-justify mb-4 xs:text-sm sm:text-[16px] sm:leading-7 xl:leading-8'>
          Bangladesh University (BU) started its journey in 2001. Since then it
          has been providing quality higher education at a minimum cost
          especially for the financially underprivileged. For more than a
          decade, BU has been increasing and nurturing talent within the youth
          with modern knowledge and technology. With the international
          affiliations, BU aims at making its students capable and ethical
          leaders to lead and represent our nation around the world. Under the
          Private University Act (1992), BU has been approved by the Government
          of the Peoples Republic of Bangladesh. The University maintains close
          collaboration with the University Grants Commission (UGC) including
          several American, British, Netherlands and other universities across
          the globe with its noble vision and mission since 2001. Bangladesh
          University strives to attain perfection in its efforts to educate the
          youth of Bangladesh.
        </p>
        <Button />
      </div>
    </div>
  )
}
