import styles from "../../styles/home/homeSections/section1.module.scss";
import {Col, Row} from "antd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faCheck} from "@fortawesome/free-solid-svg-icons";
import {faFile} from "@fortawesome/free-regular-svg-icons";
import Image from "next/image"

function Section1() {
    return (
        <>
            <div className={styles.stylesMain}>
                <Image
                    className={styles.bg1}
                    alt={"picture"}
                    layout={"fill"}
                    objectFit={"cover"}
                    objectPosition={"center"}
                    src={'/construction/white.jpg'}
                >
                </Image>


            </div>
        </>
    );
}

export default Section1;
