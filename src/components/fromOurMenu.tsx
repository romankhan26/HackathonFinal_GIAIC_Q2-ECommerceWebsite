import Image from "next/image"
import foodCategory from "../../assets/Choose & pick.png"
import img10 from "../../assets/img10.png"
import img15 from "../../assets/img15.png"
import img16 from "../../assets/img16.png"
import img17 from "../../assets/img17.png"
import img18 from "../../assets/img18.png"
import img19 from "../../assets/img22.png"
import img20 from "../../assets/img20.png"
import img21 from "../../assets/img21.png"
import img22 from "../../assets/img22.png"
import Heading from "./heading"
import Menulistitem from "./menulistitem"

export default function FormOurMenu(){
    return (
        <div className="bg-[#000000] w-full px-4  sm:px-8 md:px-20  left-0 pt-32 lg:px-36 min-h-screen flex flex-col flex-wrap items-center justify-center text-[white] gap-6">
        <div className="flex flex-col items-center justify-center">
        <Image src={foodCategory} alt="food Catogory" className="text-[#FF9F0D] h-[30px] "/>

            <Heading text="From Our Menu" textSize="32px"/>
            <br />

            {/* Menu Category */}
            <ul className="flex gap-6 text-sm md:text-[16px] w-full lg:w-[100%] text-white justify-between">
        <li className="font-semibold text-[#FF9F0D] ">

Breakfast        </li>
        <li>

Lunch        </li>
        <li>
        Dinner
        </li>
        <li>
        Dessert
        </li>
        <li>
    Drink
        </li>
        <li>
    Snack
        </li>
        <li>
            Soups
        </li>
      </ul>
      {/* Menu Items List */}
      <div className="flex gap-6 py-16">
      <Image 
            src={img10} 
            alt="quick and amusing" 
            className="mx-auto w-[300px] h-[350px] pb-16" 
          />
        <div className="grid grid-cols-1 md:grid-cols-2">
<Menulistitem imgURL={img15} title="Lettuce Leaf" description="Lacus nisi, et ac dapibus velit in consequat." priceNow="12.5$"/>
<Menulistitem imgURL={img16} title="Glow Cheese" description="Lacus nisi, et ac dapibus velit in consequat." priceNow="14.5$"/>
<Menulistitem imgURL={img17} title="Fresh Breakfast" description="Lacus nisi, et ac dapibus velit in consequat." priceNow="14.5$"/>
<Menulistitem imgURL={img18} title="Italian Pizza" description="Lacus nisi, et ac dapibus velit in consequat." priceNow="12.5$"/>
<Menulistitem imgURL={img19} title="Mild Butter" description="Lacus nisi, et ac dapibus velit in consequat." priceNow="12.5$"/>
<Menulistitem imgURL={img20} title="Slice Beef" description="Lacus nisi, et ac dapibus velit in consequat." priceNow="12.5$"/>
<Menulistitem imgURL={img21} title="Fresh Bread" description="Lacus nisi, et ac dapibus velit in consequat." priceNow="12.5$"/>
<Menulistitem imgURL={img22} title="Mashroom Pizza" description="Lacus nisi, et ac dapibus velit in consequat." priceNow="12.5$"/>
            </div>
        </div>
        </div>
        </div>
      
    )
}