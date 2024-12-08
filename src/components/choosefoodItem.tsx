import Image from "next/image";
import Heading from "./heading";
import foodCategory from "../../assets/Food Category.png"
import img4 from "../../assets/img4.png"
import img5 from "../../assets/img5.png"
import img6 from "../../assets/img6.png"
import img7 from "../../assets/img7.png"

export default function ChooseFood(){
    return (
        <div className="bg-[#000000] w-full px-4  sm:px-8 md:px-20  left-0 top-[1190px] py-32 lg:px-36 min-h-screen flex flex-col flex-wrap items-center justify-center text-[white] gap-6">
            <div className="flex flex-col items-center justify-center">
            <Image src={foodCategory} alt="food Catogory" className="text-[#FF9F0D] h-[30px] "/>

                <Heading text="Choose Food Item" textSize="32px"/>
            </div>
            <div className="flex gap-4">
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
        </div>
    )
}