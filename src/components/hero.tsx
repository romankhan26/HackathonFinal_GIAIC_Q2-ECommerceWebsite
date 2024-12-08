import Image from "next/image";
import image1 from "../../assets/Image.png";
import image2 from "../../assets/quickAmazing.png";
import Button from "./button";
import Heading from "./heading";

export default function Hero() {
  return (
    <div className="bg-black bg-cover bg-center top-0 left-0 min-h-screen overflow-x-hidden bg-[url('../../assets/Image.png')] bg-fixed">
      {/* Background image applied to this div */}
      <div className="bg-[#0d0d0de5] w-full px-4 sm:px-8 md:px-20 lg:px-36 min-h-screen flex items-center justify-center">
        
        <div className="text-white flex flex-col md:flex-row gap-10 items-center mt-44 relative w-full  bottom-9 max-w-screen-xl mx-auto">
          
          {/* Social Media Icons (Left Side) */}
          <div className="flex flex-col items-center gap-6 pb-14 md:flex">
            {/* Custom vertical line */}
            <div className="w-[0.5px] h-[90px] md:h-[110px] bg-white"></div>

            {/* Social Media Icons */}
            <img 
              className="hover:scale-110 transition-transform duration-300" 
              width="14" height="14" 
              src="https://img.icons8.com/material-rounded/24/FFFFFF/facebook-f--v1.png" 
              alt="Facebook Icon" 
            />
            <img 
              className="hover:scale-110 transition-transform duration-300" 
              width="14" height="14" 
              src="https://img.icons8.com/ios-glyphs/30/FF9F0D/twitter--v1.png" 
              alt="Twitter Icon" 
            />
            <img 
              className="hover:scale-110 transition-transform duration-300" 
              width="14" height="14" 
              src="https://img.icons8.com/windows/32/FFFFFF/pinterest-p.png" 
              alt="Pinterest Icon" 
            />

            {/* Custom vertical line */}
            <div className="w-[1px] h-[90px] md:h-[100px] bg-white"></div>
          </div>

          {/* Main Content Section (Text + Button) */}
          <div className="w-full md:w-[80%] lg:w-[500px] text-left flex flex-col gap-0 pb-16">
            <Image src={image2} alt="quick and amusing" className="h-8" />
            
            <Heading text="The Art of Speed Food Quality" textSize="32px" />

            <p className="text-[14px] md:text-[16px] mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Varius sed pharetra dictum neque massa congue.
            </p>

            <Button 
              className="w-[180px] h-[50px] text-white text-[13px] font-semibold mt-7 rounded-[27px] bg-[#FF9F0D]" 
              text="See Menu" 
            />
          </div>

          {/* Hero Image (Right Side) */}
          <Image 
            src={image1} 
            alt="quick and amusing" 
            className="mx-auto w-[90%] max-w-[500px] h-auto pb-16" 
          />

        </div>
      </div>
    </div>
  );
}
