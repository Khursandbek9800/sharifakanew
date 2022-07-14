import YMap from "./components/map";
import styles from "../../styles/contact/section1.module.scss";
import Form from "./components/form";
import Image from "next/image";


function Section1(props) {
    return (
        <div className={styles.stylesMain}>
            <Image
                className={styles.landImage1}
                alt={"picture"}
                layout={"fill"}
                objectFit={"cover"}
                objectPosition={"center"}
                src={'/home/grayBg.jpg'}
            >
            </Image>
            <div className={styles.abs}>
                <YMap/>
            </div>
            <div className={styles.down}>
                <Form/>
            </div>
        </div>
    );
}

export default Section1;