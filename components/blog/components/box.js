import styles from "../../../styles/blog/components/box.module.scss"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Button, Radio } from 'antd';


function Box({mes,pic}) {
    return (
        <div className={styles.container}>
            <div className={styles.stylesMain}>
                <Image
                    className={styles.landImage}
                    alt={"picture"}
                    layout={"fill"}
                    objectFit={"cover"}
                    objectPosition={"center"}
                    src={`/construction/${pic}.jpeg`}
                >
                </Image>
            </div>
            <div className={styles.title}>
                {mes}
            </div>
            <Button type="primary" size={'large'} className={styles.button}>
                Read More <FontAwesomeIcon icon={faArrowRight} className={styles.ic}/>
            </Button>
        </div>
    );
}

export default Box;
