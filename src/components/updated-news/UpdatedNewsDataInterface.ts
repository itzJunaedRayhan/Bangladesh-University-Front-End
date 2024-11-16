import {StaticImageData} from 'next/image'

export interface UpdatedNewsDataInterface {
  imageURL: StaticImageData
  title: string
  link: string
  ButtonText: string
  date: string
}

export interface CarouselCardProps {
  data: UpdatedNewsDataInterface
  index: number
}
