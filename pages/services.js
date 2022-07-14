import Header from "../components/layout/header/header";
import ServiceSections1 from "../components/services/ServiceSections1";
import Section3 from "../components/home/section-3";
import ServiceSections2 from "../components/services/ServiceSections2";

function Services(props) {
    return (
        <div>
            <Header
                a={"seven"}
                height={"70vh"}
                visibility={"hidden"}
                display={"block"}
                text={"Bizning hizmatlar"}
                m={"Bizning hizmatlar"}
                name={"services"}
            />
        </div>
    );
}

export default Services;
