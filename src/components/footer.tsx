import Image from "next/image"
import vector from "../../assets/Vector.png"
import QR  from "../../assets/Qr Code.png"
import googlePlay  from "../../assets/google-play.png"
import AppStore  from "../../assets/AppStore.png"
import Button from "./button"
import Link from "next/link"
export default function Footer (){
return (
    <div className="bg-[#000000] p-4 w-full bottom-0 mb-none">
    <div className="pt-20 px-10 mb-20 text-[#ffffff] flex relative flex-wrap justify-around">
       <div className="space-y-3">
        <h1 className="text-[24px] font-bold">Exclusive</h1>
        <h2 className="text-[20px] font-[500]">Subscribe</h2>
        <p className="text-[14px]">Get 10% off your first order</p>
<Button text="Enter your email" Icon={<Image src={vector} alt="vector" className="w-[20px] h-[18px]"/>} className="text-gray-500 border-white flex justify-between px-4 rounded-[4px] items-center text-[14px] w-[197px] h-[44px] ml-[-5px] border-[1px]"/>
       </div>
       <div className="w-[175px] space-y-3">
        <h2 className="text-[20px] font-[500]">Support</h2>
<p className="text-[14px]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
<p className="text-[14px]">exclusive@gmail.com</p>
<p className="text-[14px]">+88015-88888-9999</p>
       </div>
       <div className="space-y-3">
        <h2 className="text-[20px] font-[500]">Account</h2>
<p className="text-[14px]">My Account</p>
<p className="text-[14px]">Login / Register</p>
<p className="text-[14px]">Cart</p>
<p className="text-[14px]"><Link href="/wishlist">WishList</Link></p>
<p className="text-[14px]">Shop</p>
       </div>
       <div className="space-y-3">
        <h2 className="text-[20px] font-[500]">Quick Link</h2>
        <p className="text-[14px]">Privacy Policy</p>
        <p className="text-[14px]">Terms Of Use</p>
        <p className="text-[14px]">FAQ</p>
        <p className="text-[14px]">Contact</p>

       </div>
       <div className="">
        <h2 className="text-[20px] mb-3 font-[500]">Download App</h2>
        <p className="text-[10px] mb-2  text-[#FAFAFA]">Save $30 with App New User Only</p>
        <div className="flex h-[74px] w-[184px] gap-2">
            <div><Image src={QR} alt="QR" className="w-[60px] h-[60px]"/></div>
            <div className="flex flex-col gap-1">
                <Image src={googlePlay} alt="googlePlay" className="w-[85px] h-[28px]"/>
                <Image src={AppStore} alt="appstore" className="w-[85px] h-[30px]"/>
            </div>
        </div>
        <div className="flex
        justify-between w-[148px] h-6 items-center">
         <img width="32" height="32" className="w-5 h-5" src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-f.png" alt="facebook-f"/>
         <img width="32" height="32" className="w-5 h-5" src="https://img.icons8.com/fluency-systems-regular/50/FFFFFF/twitter.png" alt="twitter"/> 
         <img width="32" height="32" className="w-6 h-6" src="https://img.icons8.com/windows/32/FFFFFF/instagram-new.png" alt="instagram-new"/> 
         <img width="32" height="32" className="w-6 h-6" src="https://img.icons8.com/windows/32/FFFFFF/linkedin-2.png" alt="linkedin-2"/></div>
       </div>
    </div>
    <p className="text-center text-[10px] text-gray-500">Copyright Rimel 2022. All right reserved</p>
 </div>
)
}