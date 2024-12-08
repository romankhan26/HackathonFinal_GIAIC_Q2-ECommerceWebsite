import Image from "next/image"
import foodCategory from "../../assets/Choose & pick.png"
import Heading from "./heading"
import ellipse from "../../assets/Ellipse 6.png"
import quote from "../../assets/Quotes.png"
import star from "../../assets/star.png"
import dot from "../../assets/Dot.png"
export default function Testimonials(){
return (
    <div className="bg-[#000000] w-full px-4  sm:px-8 md:px-20  left-0 top-[-120px] lg:px-36 min-h-screen flex flex-col flex-wrap  text-[white] gap-6">
      
    <div className="w-full md:w-[80%] lg:w-[500px] text-left flex flex-col gap-0 pb-16">
    <Image src={foodCategory} alt="quick and amusing" className="h-8" />

    <Heading text="What our client are saying" textSize="32px" />
</div>
<div className="bg-white text-black flex gap-5 flex-col pb-12 items-center px-20 mx-auto justify-center w-[800px] h-[400px]">
    <Image alt="abc" src={ellipse} className="w-[100px] relative h-[100px] top-[-10px]"/>
    <Image alt="abc" src={quote} className="w-[80px] h-[80px] "/>
    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
    <Image src={star} alt="stars"/>
    <h1 className="font-bold text-[20px]">Alamin Hasan</h1>
        <p className="text-center relative bottom-5">Food Specialist</p>
</div>
    <Image src={dot} alt="stars" className="mx-auto"/>
</div>
)
}