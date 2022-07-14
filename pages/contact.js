import Header from "../components/layout/header/header";
import Section1 from "../components/contact/section1";
import Section2 from "../components/contact/section2";




function Contact(props) {
    return (
        <div>
            <Header  a={"seven"}
                     height={"70vh"}
                     visibility={"hidden"}
                     display={"block"}
                     text={"Biz bilan bog'laning"}
                     m={"Biz bilan bog'laning"}
                     name={"contact"}

            />
           <Section1/>
           <Section2/>
        </div>
    );
}

export default Contact;
