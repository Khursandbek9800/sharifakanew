import {connect} from 'react-redux';
import styles from "../../../styles/sidebar/sidebar.module.scss";
import {toggle} from '../../../redux/reducers/sidebar';
import ActiveLink from "./active";


function Sidebar({open}) {
    const stylesMain = {
        width: "200px",
        height: "100vh",
        position: "fixed",
        top: 0,
        backgroundColor: "rgb(27,54,96)",
        left: `${open ? "0" : "-200px"}`,
        zIndex: "2000",
        transition: "all 0.3s"
    }
    return (
        <div style={stylesMain}>
            <div className={styles.link}>
                <ActiveLink children={"Home"} href={"/"} toggle={toggle()}/>
            </div>
            <div className={styles.link}>
                <ActiveLink children={"About"}  toggle={toggle()}/>
            </div>
            <div className={styles.link}>
                <ActiveLink children={"Our Services"} toggle={toggle()}/>
            </div>
            <div className={styles.link}>
                <ActiveLink children={"Attorneys"}  toggle={toggle()}/>
            </div>
            <div className={styles.link}>
                <ActiveLink children={"Blog"} toggle={toggle()}/>
            </div>
            <div className={styles.link}>
                <ActiveLink children={"Contact us"} toggle={toggle()}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    open: state.sidebar.open,
});

export default connect(
    mapStateToProps,
    {toggle}
)(Sidebar);