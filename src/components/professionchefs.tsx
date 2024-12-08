import Image from "next/image"
import services1 from "../../assets/Group1.png"
import services2 from "../../assets/Group2.png"
import services3 from "../../assets/Group3.png"
import services4 from "../../assets/Group4.png"
export default function ProfessionalChefs(){
return (      <div className="h-[200px] bg-black bg-cover bg-center top-[2400px] left-0 min-h-screen overflow-x-hidden bg-[url('../../assets/img1.png')] bg-fixed">
    {/* Background image applied to this div */}
    <div className="bg-[#0d0d0de5] w-full px-4 sm:px-8 text-[white] md:px-20 lg:px-36 min-h-screen flex items-center justify-center gap-10">
  
    <div className="h-[161px] flex flex-col items-center space-y-1"  >
        <Image src={services1} alt="services" className="w-[80px] h-[80px] mb-2"/>
        <p className="font-[400] text-[14px] text-center">Professional Chefs</p>
        <h1 className="font-bold text-[20px] text-center">420</h1>
    </div>
    <div className="h-[161px] flex flex-col items-center  space-y-1"  >

    <Image src={services2} alt="services" className="w-[80px] h-[80px] mb-2"/>

        <p className="font-[400] text-[14px] text-center">Items Of Food</p>
        <h1 className="font-bold text-[20px] text-center">320</h1>


    </div>
    <div className="h-[161px] flex flex-col items-center  space-y-1"  >

    <Image src={services3} alt="services" className="w-[80px] h-[80px] mb-2"/>

        <p className="font-[400] text-[14px] text-center">Years Of Experienced</p>
        <h1 className="font-bold text-[20px] text-center">30+</h1>


    </div>
    <div className="h-[161px] flex flex-col items-center  space-y-1"  >

<Image src={services3} alt="services" className="w-[80px] h-[80px] mb-2"/>

    <p className="font-[400] text-[14px] text-center">Happy Customers</p>
    <h1 className="font-bold text-[20px] text-center">220</h1>


</div>

</div>
</div>
)

}