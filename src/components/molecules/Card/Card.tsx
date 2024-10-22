
import { ButtonIcon } from "@/components/atoms";
import "./cardStyles.scss";
import { DeleteIcon, EditIcon } from "@/assets/icons";

interface ICardProps{
    title:string,
    description: string,
    state:string,
    company:string,
    key:number
}

export default function Card({title,description,state,company, key}:ICardProps):React.ReactElement{
    return(
        <div className="content-card" key={key}>
            <div className="card-header">
                <h3 className="header-title">{title}</h3>
            </div>
            <div className="card-body">
                <p className="body-description">{description}</p>
                <p className="body-state">State: {state}</p>
                <p className="body-company">Company: {company}</p>
            </div>
            <div  className="card-footer">
                <ButtonIcon icon={<EditIcon />} colorIcon="var(--color-purple-vacancy-normal)" />
                <ButtonIcon icon={<DeleteIcon />} colorIcon="var(--color-text)" />
            </div>
        </div>
    )
}