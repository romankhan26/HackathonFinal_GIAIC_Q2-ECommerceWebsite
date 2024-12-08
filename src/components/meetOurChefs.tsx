import Heading from "./heading"
import foodCategory from "../../assets/Choose & pick.png"
import img4 from "../../assets/Chef Card 1.png"
import img5 from "../../assets/Chef Card 1 (1).png"
import img6 from "../../assets/Chef Card 1 (4).png"
import img7 from "../../assets/Chef Card 1 (3).png"
import Image from "next/image"
import Button from "./button"

export default function MeetOurChef(){
    return (
        <div className="bg-[#000000] w-full px-4  sm:px-8 md:px-20  left-0 top-[-120px] lg:px-36 min-h-screen flex flex-col flex-wrap items-center justify-center text-[white] gap-6">
        <div className="flex flex-col items-center justify-center">
        <Image src={foodCategory} alt="food Catogory" className="text-[#FF9F0D] h-[30px] "/>

            <Heading text="Meet Our Chef" textSize="32px"/></div> <div className="flex gap-4">
                <div>
                <Image src={img4}className="w-[200px] h-[230px]" alt="image1"/>

                </div>
                <div>
                <Image src={img5}className="w-[200px] h-[230px]" alt="image1"/>

                </div>
                <div>
                <Image src={img6}className="w-[200px] h-[230px]" alt="image1"/>

                </div>
                <div>
                <Image src={img7}className="w-[200px] h-[230px]" alt="image1"/>

                </div>

            </div>
            <Button text="See More" className="text-white bg-transparent w-[160px] h-[40px] border-[1px]  border-[#FF9F0D] rounded-[27px]"/>

        </div>
 
    )
}