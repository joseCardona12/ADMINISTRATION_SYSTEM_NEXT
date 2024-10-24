import Image from "next/image";
import "./loadingStyles.scss";
import gifLoading from "@/assets/images/loading01.gif"
export default function Loading():React.ReactNode{
    return(
        <div className="content-loading">
            <Image
            src={gifLoading}
            alt="loading gif"
            width={100}
            height={100}
            />
        </div>
    )
}   