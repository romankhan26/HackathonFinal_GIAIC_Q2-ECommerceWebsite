import Image from "next/image"
import ABC from "../../assets/unsplash_E6DsqnZbZ4o.png"
import foodCategory from "../../assets/Choose & pick.png"
import play from "../../assets/Play.png"
import Play from "../../assets/Choose & pick.png"
import Heading from "./heading"
import Button from "./button"
export default  function ActiveProcess(){
    return (
        <div className="bg-[#000000] text-white w-full px-4  sm:px-8 md:px-20  left-0 top-[-120px] lg:px-36 min-h-screen flex flex-col flex-wrap items-center justify-center text-[white] gap-6">
        <Image src={ABC} alt="food Catogory" className="text-[hsl(36,100%,53%)] w-full left-0 absolute h-[330px] "/>
        <div className="flex flex-col items-end justify-center gap-6 absolute right-0 w-[650px] pr-10 z-20">
    <Image src={foodCategory} alt="quick and amusing" className="h-8" />
       <span className="text-right">
       <Heading text="We Document Every Food
Bean Process untile it is saved" textSize="32px"/>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, 
    </p>
       </span>
       <div className="flex justify-center gap-5 items-center">
       <Button text="Read More" className="text-[13px] bg-transparent font-bold w-[160px] h-[40px] border-[1px]  border-[#FF9F0D] rounded-[27px]"/>
<div  className="w-[40px] h-[40px] bg-[#FF9F0D] rounded-[50%] flex items-center justify-center">
    <Image src={play} alt="play" className="h-[14px] w-[14px]" />
</div>
<p className="font-bold text-[13px]">Play Video</p>
       </div>

</div>
</div>
    )
}