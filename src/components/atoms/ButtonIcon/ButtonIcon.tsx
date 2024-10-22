import "./buttonStyles.scss"
interface IButtonIconProps{
    icon:React.ReactElement,
    colorIcon?:string
}
export default function ButtonIcon({icon, colorIcon}:IButtonIconProps):React.ReactElement{
    return(
        <div className="content-icon" style={{color:colorIcon}}>
            {icon}
        </div>
    )
}