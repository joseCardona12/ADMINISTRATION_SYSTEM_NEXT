import "./administrationPanelStyles.scss";

interface IAdministrationPanelProps{
    header:React.ReactNode,
    main: React.ReactNode,
    footer:React.ReactNode
}

export default function AdminstrationPanel({header,main,footer}:IAdministrationPanelProps): React.ReactElement{
    return(
        <div className="administration-panel">
        <header>
            {header}
        </header>
        <main>
            {main}
        </main>
        <footer>
            {footer}
        </footer>
        </div>
    )
}