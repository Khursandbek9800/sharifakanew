import Footer1 from './footer/footer';
import Sidebar from "./sidebar/sidebar";

const Layout = props => {
    return (
        <>
            <Sidebar/>
            <div>{props.children}</div>

        </>
    )
}

export default React.memo(Layout);
