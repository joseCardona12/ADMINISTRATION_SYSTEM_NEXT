import "./buttonStyles.scss"
interface IButtonIconProps{
    icon:React.ReactElement,
    colorIcon?:string,
    onClick?:()=>void
}
export default function ButtonIcon({icon, colorIcon,onClick}:IButtonIconProps):React.ReactElement{
    return(
        <div 
        className="content-icon" 
        style={{color:colorIcon}} 
        onClick={onClick}>
            {icon}
        </div>
    )
}