import "./buttonStyles.scss";

interface IButtonProps{
    backgroundColor?:string,
    backgroundHover?:string,
    color?:string,
    padding?:string,
    borderRadius?:string,
    onClick?: ()=>void,
    text:string,
    icon:React.ReactElement
}

export default function Button({backgroundColor,backgroundHover,color, borderRadius,padding,onClick, text,icon}:IButtonProps):React.ReactNode{
    return(
        <button className="button"
        onClick={onClick} 
        style={{backgroundColor,color,padding,borderRadius}} data-hover={backgroundHover}>
            {icon} {text}
        </button>
    )
}