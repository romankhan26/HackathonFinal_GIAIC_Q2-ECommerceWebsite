type buttonProps = {
    text:any, Icon?:any, className:any
}
export default function Button({text,Icon, className}:buttonProps){
    return (
        <button className={`text-center ${className}`}>
        <span>{text}</span><span>{Icon}</span>
        </button>
    )
}

