import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"



const SuperQualityProducts = () => {
  return (
   <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">

    <div className="flex flex-1 flex-col ">
      
      <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
      We provide you!
      <span className="text-coral-red inline-block mt-3">
        super 
      </span>
      <span className="text-coral-red inline-block mt-3">
        quality 
      </span> Shoes
      </h2>
      <p className="mt-4 lg:max-w-lg info-text">
        Ensuring premium comfort and style, our meticulously crafted 
        footwear is designed to elevate your experience, providing you with unmatched quality, 
        innovation, and a tocuh of elegance.  
      </p>
      <div className="mt-11">
      <Button  label="View details" ></Button>
      </div>
    </div>
    <div className="flex-1 flex justify-center items-center">
        <img width={570} height={522} src={shoe8} alt="shoe8"
        className="object-contain " />
    </div>

   </section>
  )
}

export default SuperQualityProducts