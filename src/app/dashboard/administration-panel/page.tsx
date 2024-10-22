import { AdminstrationPanel } from "@/components/layouts";
import { Header,Footer } from "@/components/organisms";
import { Vacancy } from "@/components/templates";

export default function AdministrationPanelView(){
    return(
        <AdminstrationPanel
        header={<Header />}
        main={<Vacancy />}
        footer={<Footer />}
        />
    )
}