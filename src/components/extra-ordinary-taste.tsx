import Image from "next/image";
import Heading from "./heading";
import foodCategory from "../../assets/Food Category.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";
import img11 from "../../assets/img11.png";
import img12 from "../../assets/img12.png";
import img13 from "../../assets/img13.png";
import img14 from "../../assets/img14.png";
import Button from "./button";
import { Span } from "next/dist/trace";
export default function ExtraOrdinary() {
  return (
    <div className="bg-[#000000] w-full px-4 flex   sm:px-8 md:px-20  left-0 top-[1700px] py-32 lg:px-36 min-h-screen items-center justify-center text-[white] gap-12">
        <div className="flex gap-3 flex-col justify-center item-center">
<div className="flex items-baseline gap-3">
    
        <Image src={img8} alt="About Us" className=" rounded-[6px] w-[230px] h-[260px] object-cover" />
  
    
   
        <Image src={img9} alt="About Us" className="rounded-[6px] w-[210px] h-[170px] object-cover" />

    
</div>
<div className="flex gap-3">
   
        <Image src={img11} alt="About Us" className=" rounded-[6px] w-[170px] h-[210px] object-cover" />

    
        <Image src={img12} alt="About Us" className=" rounded-[6px] w-[150px] h-[130px] object-cover" />
    
    <div className="flex flex-col gap-3">
        
            <Image src={img13} alt="About Us" className=" rounded-[6px] w-[110px] h-[130px] object-cover" />
       
            <Image src={img14} alt="About Us" className=" rounded-[6px] w-[110px] h-[130px] object-cover" />

        </div>

        </div></div>






      <div className="w-[40%] space-y-4">
        <Image
          src={foodCategory}
          alt="About Us"
          className="text-[#FF9F0D] h-[30px] "
        />
        <Heading
          text="Extra ordinary taste
And Experienced 
"
          textSize="30px"
        />
        <p className="text-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        <div className="flex
         gap-2">
          <span className="flex flex-col">
            <Button
            className="w-[80px] h-[80px] flex justify-center items-center text-white text-[13px] font-semibold mt-7 rounded-[7px] bg-[#FF9F0D]"
            text={
              <img
                className="w-10 h-10"
                width="24"
                height="24"
                src="https://img.icons8.com/material-outlined/24/FFFFFF/hamburger.png"
                alt="hamburger"
              />
            }
          />
            <span className="text-center">FastFood</span>
          </span>
          <span className="flex flex-col">
            <Button
            className="w-[80px] h-[80px] flex justify-center items-center text-white text-[13px] font-semibold mt-7 rounded-[7px] bg-[#FF9F0D]"
            text={
              <img
                className="w-10 h-10"
                width="24"
                height="24"
                src="https://img.icons8.com/ios/50/FFFFFF/cookie.png"
                alt="cookie"
              />
            }
          />
            <span className="text-center">Lunch</span>
          </span>
          <span className="flex flex-col">
            <Button
            className="w-[80px] h-[80px] flex justify-center items-center text-white text-[13px] font-semibold mt-7 rounded-[7px] bg-[#FF9F0D]"
            text={
              <img
                className="w-10 h-10"
                width="24"
                height="24"
                src="https://img.icons8.com/forma-thin/24/FFFFFF/wine-glass.png"
                alt="wine-glass"
              />
            }
          />
            <span className="text-center">Dinner</span>
          </span>
        </div>
        <Button
  className="w-[250px] h-[70px] flex items-center px-4 justify-between text-black text-[13px] font-semibold rounded-[7px] bg-white border-l-8 border-l-[#FF9F0D]"
  text={
    <>
      {/* Left Side - 30+ */}
      <span className=" font-bold relative text-[#FF9F0D] text-[32px] top-[20px]">
        30+
      </span>

      {/* Right Side - Years Of Experience */}
      <span className="flex flex-col leading-tight relative top-[-20px] left-[120px]">
        <span className="text-[14px] md:text-[16px] font-normal text-left">Years Of</span>
        <span className="font-bold text-[14px] md:text-[16px]">Experience</span>
      </span>
    </>
  }
/>


      
      </div> 
      </div> 
  );
}
