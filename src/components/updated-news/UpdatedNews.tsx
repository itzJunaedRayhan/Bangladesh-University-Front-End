import Button from "../button/Button";
import CarouselCard from "./UpdateNewsCard";

export default function UpdatedNews() {
  return (
    <div className="w-full flex flex-col items-center my-10">
      <div className='max-w-[1020px]'>
        <h2 className='text-[40px] text-darkTwo font-bold text-center'>
          Updated News
        </h2>
        <p className='py-4 text-lg text-darkTwo text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
          elementum eu volutpat odio tristique ullamcorper gravida nulla. Id
          justo lobortis purus odio lectus urna, in aliquam.
        </p>
      </div>
      <CarouselCard />
      <Button />
    </div>
  )
}
