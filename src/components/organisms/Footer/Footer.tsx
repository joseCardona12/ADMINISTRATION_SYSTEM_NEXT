import { Pagination } from "@/components/molecules";

export default function Footer():React.ReactNode{
    return(
        <>
        <Pagination
        indexStart={1}
        indexFinal={2}
        />
        </>
    )
}