import "./textAreaStyles.scss";

interface ITextAreaProps{
    label:string,
    name:string
}

export default function TextArea({label,name}:ITextAreaProps):React.ReactElement{
    return(
        <div className="content-textarea">
            <label htmlFor={name}>{label}</label>
            <textarea name={name} rows={5}>
            </textarea>
        </div>
    )
}