import Header from "../components/layout/header/header";
import Section1 from "../components/blog/section1";


function Blog(props) {
    return (
        <div>
            <Header  a={"seven"}
                     height={"70vh"}
                     visibility={"hidden"}
                     display={"block"}
                     text={"Bizning blog"}
                     m={"Bizning blog"}
                     name={"blog"}

            />
            <Section1/>
        </div>
    );
}

export default Blog;
