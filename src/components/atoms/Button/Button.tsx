    "use client";
    import "./buttonStyles.scss";

    interface IButtonProps{
        backgroundColor?:string,
        backgroundHover?:string,
        backgroundDisabled?:string,
        color?:string,
        colorDisabled?:string,
        padding?:string,
        borderRadius?:string,
        onClick?: ()=>void,
        text:string,
        icon:React.ReactElement,
        state?: boolean
    }

    export default function Button({backgroundColor,backgroundHover,backgroundDisabled, color,colorDisabled, borderRadius,padding,onClick, text,icon,state}:IButtonProps):React.ReactNode{
        return(
            <button className={state ? "button button-active" : "button"}
            onClick={onClick} 
            style={{
                backgroundColor,
                color,
                padding,
                borderRadius
                }} 
                data-hover={backgroundHover}
                >
                {icon} {text}
            </button>
        )
    }