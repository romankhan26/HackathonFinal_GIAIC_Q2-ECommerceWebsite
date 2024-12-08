import Image from "next/image";
import Button from "./button";
import thumbsUp from "../../assets/ThumbsUp.png"
import icon from "../../assets/blogIcon.png"
import shareNetwork from "../../assets/ShareNetwork.png"
type Props = {
  title: string;
  imageURL: any;
  CardImage?:any;
  imgAlt: string;
  rankCount?: number;
  priceThen?: string;
  priceNow: string;
  buttonStyle?:string;
  buttonName?:string;
};





export default function Menulistitem({title,description,priceNow,imgURL} : {title: string, description: string, priceNow:string,imgURL:any}){
    return (
        
           <div className="flex ">
            <Image src={imgURL} alt="Image" className="w-12 h-11"/>
             <div className=" px-2 text-white">
        <p className="font-bold text-[13px] ">{title}</p>
        <p className="text-[11px] ">{description}</p>
        <p className="flex gap-2 ">
        
              <span className="text-[#FF9F0D] font-bold text-[10px] ">{priceNow}</span>
           
        </p>
        
        </div>
           </div>
    )
}

export  function Menulistitem2({date,description,imgURL} : {date: string, description: string,imgURL:any}){
    return (
        
           <div className="flex flex-col border-[1px] border-white w-[230px] h-[300px]">
            <Image src={imgURL} alt="Image" className="w-[230px] h-[160px]"/>
             <div className=" text-white px-3 pb-3 space-y-3">
        <p className="font-bold text-[#FF9F0D] text-[12px]">{date}</p>
        <p className="text-[16px] font-bold ">{description}</p>
        <p className="flex  justify-between ">
            
              <span className="text-[#FAFAFA] font-thin text-[10px] ">Learn More</span>
        
           <span className="flex justify-end">
            <Image alt="abc" src={icon} className="h-[12px] w-[48px]"/>
           </span>
        </p>
        
        </div>
           </div>
    )
}