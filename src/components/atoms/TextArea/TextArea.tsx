import "./textAreaStyles.scss";

interface ITextAreaProps{
    label:string,
    name:string,
    value:string,
    onChange: (e:React.ChangeEvent<HTMLTextAreaElement>)=>void
}

export default function TextArea({label,name,value,onChange}:ITextAreaProps):React.ReactElement{
    return(
        <div className="content-textarea">
            <label htmlFor={name}>{label}</label>
            <textarea name={name} rows={5} onChange={onChange} value={value}>
            </textarea>
        </div>
    )
}