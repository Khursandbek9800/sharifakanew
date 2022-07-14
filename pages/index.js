import Header from "../components/layout/header/header";
import Section1 from "../components/home/section-1";
import Section2 from "../components/home/section-2";
import Section3 from "../components/home/section-3";
import Section4 from "../components/home/section-4";
import Section5 from "../components/home/section-5";
import Section6 from "../components/home/section-6";
import ScrollToTop from "../components/scrollToTop/scroll";

function Home() {
    return (
        <>
            <Header a={"one"} height={"100vh"} visibility={"visible"} display={"none"}
            name={"home"}
            />

            <Section2/>
            {/*<Section3/>*/}
            {/*<Section4/>*/}
            {/*<Section5/>*/}
            {/*<Section6/>*/}
        </>
    );
}

export default Home;
