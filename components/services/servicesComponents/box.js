import styles from "../../../styles/services/components/box.module.scss"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "antd";


function Box({mes}) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {mes}
            </div>
            <div className={styles.line}/>
            <div className={styles.text}>
                “Hyper Partners GmbH” (Germaniya) xorijiy kompaniyasi zamonaviy savdo-ko`ngilochar majmualar, ofislar va mehmonxonalar
                barpo etmoqda. Ob`yektni ishga tushirish muddati 2020 yilning oxiri qilib belgilangan.
            </div>
            <Button type="primary" size={'large'} className={styles.button}>
                Read More <FontAwesomeIcon icon={faArrowRight} className={styles.ic}/>
            </Button>
        </div>
    );
}

export default Box;
