import "./administrationPanelStyles.scss";

interface IAdministrationPanelProps{
    header:React.ReactNode,
    main: React.ReactNode,
    footer:React.ReactNode
}

export default function AdminstrationPanel({header,main,footer}:IAdministrationPanelProps): React.ReactElement{
    return(
        <>
        <header>
            {header}
        </header>
        <main>
            {main}
        </main>
        <footer>
            {footer}
        </footer>
        </>
    )
}