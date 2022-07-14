import Header from "../components/layout/header/header";
import Attorney1 from "../components/attorney/attorney1";
import Section3 from "../components/home/section-3";

function Attorneys() {
    return (
        <div>
            <Header
                a={"seven"}
                    height={"70vh"}
                    visibility={"hidden"}
                    display={"block"}
                    text={"Bizning Loyihalar"}
                    m={"Bizning Loyihalar"}
                    name={"attorneys"}
            />
            <Attorney1/>
            <Section3/>
        </div>
    );
}

export default Attorneys;
