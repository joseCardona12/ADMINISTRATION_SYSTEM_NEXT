import "./buttonStyles.scss";

interface IButronArrowProps{
    icon:React.ReactElement,
    onClick:()=>void
}

export default function ButtonArrow({icon, onClick}: IButronArrowProps):React.ReactNode{
    return(
        <div className="icon" onClick={onClick}>
            {icon}
        </div>
    )
}