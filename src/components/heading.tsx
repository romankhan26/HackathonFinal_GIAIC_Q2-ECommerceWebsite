export default function Heading({text,textSize}:{text: string,textSize: string}){
    return (
        <h1 className={`text-[${textSize}] md:text-[30px] lg:text-[40px] text-white font-bold leading-tight`}>
        <span className="text-[#FF9F0D]">{text.slice(0,2)}</span>{text.slice(2)}
      </h1>

    )
}