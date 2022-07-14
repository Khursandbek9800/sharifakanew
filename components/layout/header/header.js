import styles from "../../../styles/header/header.module.scss";
import {Row, Col} from 'antd';
import styles1 from "../../../styles/carousel.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {MobileOutlined} from "@ant-design/icons";
import styles2 from "../../../styles/home/homeComponents/banner.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTelegramPlane, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faArrowRight, faBars} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import {connect} from 'react-redux';
import {toggle} from '../../../redux/reducers/sidebar';
import Image from "next/image";


function Header({a, height, visibility, display, text, m, open, toggle, name}) {
    const styling = {
        width: "100%",
        height: `${height}`,
        backgroundImage: `url('./home/landing1.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        zIndex: "2",
        overflow: "hidden",
        position: "relative",
    }
    const styling1 = {
        backgroundImage: `url('./home/landing1.jpg')`,
        width: "100%",
        height: `${height}`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        zIndex: "2",
        overflow: "hidden",
        position: "relative"

    }
    const styling2 = {
        backgroundImage: `url('./home/landing1.jpg')`,
        width: "100%",
        height: `${height}`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        zIndex: "2",
        overflow: "hidden",
        position: "relative"

    }
    const content = {
        marginTop: "100px",
        display: "flex",
        flexDirection: "row",
        visibility: `${visibility}`,
    }
    const otherP = {
        width: "100%",
        height: "25vh",
        display: `${display}`,
    }
    const def = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.9)",
        zIndex: 100,
        display: `${open ? "block" : "none"}`,
        opacity: `${open ? 1 : 0}`,
        transition: "all 0.3s"
    }

    return (
        <Slider>
                <div>

                <div style={styling1}>
                    <div className={styles.container}>
                        <div className={styles.rw}>
                            <div className={styles.col1}>
                                <div>
                                    <img src="/logo/logo1.png" alt="" className={styles.logo}/>
                                </div>

                            </div>
                            <div className={styles.abs1} onClick={toggle}>
                                <FontAwesomeIcon icon={faBars} className={styles.icon}/>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={`${styles.col}`}>
                                <div className={styles.col1}>
                                    <div>
                                        <img src="/logo/logo1.png" alt="" className={styles.logo}/>
                                    </div>

                                </div>
                            </div>






                            <div className={`${styles.col}`}>
                                <div className={styles.flex}>

                                    <div className={styles.a}>
                                        <div className={styles.aw}>
                                            Yhteystiedot
                                        </div>
                                        <div className={styles.aw}>

                                            <a href="tel:+358-44-3354344">0443354344</a>

                                        </div>
                                        <div className={styles.aw}>
                                            Info@sharifinrakennuspalvelu.fi
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div style={otherP}>
                            <div className={styles.flexIt}>
                                <div className={styles.title}>
                                    {text}
                                </div>
                                <div className={styles.wrap}>
                                    {/*<Link href={'/'}>*/}
                                        <div className={styles.ho}>
                                            KOTI
                                        </div>
                                    {/*</Link>*/}
                                    {/*<Link href={`/${name}`}>*/}
                                        <div className={styles.ab}>
                                            {m}
                                        </div>
                                    {/*</Link>*/}
                                </div>
                            </div>
                        </div>
                        <div style={content} className={styles2.content}>

                            <div className={styles2.nextWrapper}>
                                <div className={styles2.wrapOne}>
                                    <div className={styles2.counselLaw}>
                                        Tasoitus  ja  maalaustyöt
                                        <div></div>
                                        Teemme  tasoitus ja maalaustyöt
                                    </div>

                                </div>
                                <div className={styles2.bestLaw}>
                                    - Ruiskumaalaustyöt
                                </div>
                                <div className={styles2.bestLaw}>
                                    - Huoneistoremontit
                                </div>
                                <div className={styles2.bestLaw}>
                                    - Sumukattokorjaus (Röpelökatto)
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={toggle} style={def}/>
            </div>

        </Slider>
    );
}

const mapStateToProps = (state) => ({
    open: state.sidebar.open,
});

export default connect(
    mapStateToProps,
    {toggle}
)(Header);
