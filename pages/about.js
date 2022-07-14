import Header from "../components/layout/header/header";
import AboutSection1 from "../components/about/AboutSection1";
import AboutSection2 from "../components/about/AboutSection2";
import Section5 from "../components/home/section-5";



function About(props) {
    return (
        <div>
            <Header
                a={"seven"}
                height={"70vh"}
                visibility={"hidden"}
                display={"block"}
                text={"BIZ HAQIMIZDA"}
                m={"BIZ HAQIMIZDA"}
                name={"about"}
            />
            <AboutSection1/>
            <AboutSection2/>
            <Section5/>
        </div>
    );
}

export default About;
