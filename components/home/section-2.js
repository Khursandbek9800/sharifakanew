import styles from "../../styles/home/homeSections/section2.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBalanceScale, faStar, faSuitcase, faUserTie} from "@fortawesome/free-solid-svg-icons";
import Player from "./homeComponents/player";
import Image from "next/image";
import {Col} from "antd";

function Section2(props) {
    return (
        <>
            <div className={styles.stylesMain}>
                <div className={styles.container}>


                    <Player/>
                </div>
            </div>
        </>
    );
}

export default Section2;
