import "./inputStyles.scss";
interface IInputProps{
    label:string
    name:string,
    type: "text" | "email" | "password",
    value:string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) =>void,
}
export default function Input({label,name,type,value,onChange}:IInputProps):React.ReactNode{
    return(
        <div className="content-input">
            <label htmlFor={name}>{label}</label>
            <input 
            type={type} 
            name={name}
            value={value}
            onChange={onChange}
            />
        </div>
    )
}