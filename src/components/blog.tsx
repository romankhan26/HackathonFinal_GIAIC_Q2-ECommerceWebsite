import foodCategory from "../../assets/Choose & pick.png"
import Image from "next/image"
import Heading from "./heading"

export default function Blog(){
    return (
        <div className="bg-[#000000] w-full px-4  sm:px-8 md:px-20  left-0 top-[-120px] lg:px-36 min-h-screen flex flex-col flex-wrap  text-[white] gap-6">
      
    <div className="w-full md:w-[80%] lg:w-[500px] text-left flex flex-col gap-0 pb-16">
    <Image src={foodCategory} alt="quick and amusing" className="h-8" />

    <Heading text="Latest News And Blogs" textSize="32px" />
</div>
<div className="flex justify-between">
    
    </div></div>
    )
}