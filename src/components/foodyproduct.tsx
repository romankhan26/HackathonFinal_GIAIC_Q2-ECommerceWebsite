import Image from "next/image";
import AboutUS from "../../assets/aboutus.png"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import check from "../../assets/check.png"
import Heading from "./heading";
import Button from "./button";

export default function FoodyProduct (){
    return (
      <div className="bg-[#000000] w-full px-4  sm:px-8 md:px-20  left-0 top-[610px] py-32 lg:px-36 min-h-screen flex items-center justify-center text-[white] gap-3">

            <div className="w-[50%] space-y-4">
                <Image src={AboutUS} alt="About Us" className="text-[#FF9F0D] h-[30px] "/>
                <Heading text="We Create the best
foody product
" textSize="30px"/>
<p className="text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
<ul className="text-[14px] space-y-2">
<li className="flex justify-start items-center gap-1"><Image src={check} className="w-[10px] h-[10px]" alt="check"/>Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
<li className="flex justify-start items-center gap-1"><Image src={check} className="w-[10px] h-[10px]" alt="check"/>Quisque diam pellentesque bibendum non dui volutpat fringilla </li>
<li className="flex justify-start items-center gap-1"><Image src={check} className="w-[10px] h-[10px]" alt="check"/>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
</ul>
<Button 
              className="w-[180px] h-[50px] text-white text-[13px] font-semibold mt-7 rounded-[27px] bg-[#FF9F0D]" 
              text="Read More" 
            />
            </div>
            <div className="flex flex-col gap-3">
                <div>
                    <Image src={img1}className="h-[200px] w-[480px]" alt="image1"/>
                </div>
                <div className="flex
                 w-[480px] gap-3
                ">
                    <div className="">
                    <Image src={img2}className="h-[150px] " alt="image1"/>
                        
                    </div>
                    <div>
                    <Image src={img3}className="h-[150px] " alt="image1"/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}