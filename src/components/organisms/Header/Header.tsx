import { Navigation,Search } from "@/components/molecules";
import "./headerStyles.scss";

export default function Header():React.ReactNode{
    return(
        <>
        <div className="header-title">
            <p>Administration Panel</p>
        </div>
        <div className="header-bottom">
            <Navigation />
            <Search />
        </div>
        </>
    )
}