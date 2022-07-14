import styles from "../../styles/home/homeSections/section4.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import Form from "./homeComponents/form";
import Image from "next/image";


function Section4(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.stylesMain1}>
                <Image
                    className={styles.landImage}
                    alt={"picture"}
                    layout={"fill"}
                    objectFit={"cover"}
                    objectPosition={"center"}
                    src={'/construction/p1.jpg'}
                >
                </Image>
                <div className={styles.container}>
                    <div className={styles.inner}>
                        <div className={styles.title}>
                            KO'P BERILADIGAN SAVOLLAR
                        </div>
                        <div className={styles.line}/>
                        <div className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Adipisci dignissimos dolorem iste
                            labore minima obcaecati placeat quidem saepe sunt vitae.
                        </div>
                        <div className={styles.longLine}/>
                        <div className={styles.sTitle}>
                            Lorem ipsum dolor sit amet. <FontAwesomeIcon icon={faPlus} className={styles.icon}/>
                        </div>
                        <div className={styles.longLine}/>
                        <div className={styles.longLine}/>
                        <div className={styles.sTitle}>
                            Lorem ipsum dolor sit amet. <FontAwesomeIcon icon={faMinus} className={styles.icon}/>
                        </div>
                        <div className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Amet asperiores commodi nam nobis quas quidem rem rerum sapiente soluta temporibus!
                        </div>
                        <div className={styles.longLine}/>
                        <div className={styles.longLine}/>
                        <div className={styles.sTitle}>
                            Lorem ipsum dolor sit amet. <FontAwesomeIcon icon={faPlus} className={styles.icon}/>
                        </div>
                        <div className={styles.longLine}/>
                    </div>
                </div>
            </div>
            <div className={styles.stylesMain2}>
                    <Image
                        className={styles.landImage}
                        alt={"picture"}
                        layout={"fill"}
                        objectFit={"cover"}
                        objectPosition={"center"}
                        src={'/home/grayBg.jpg'}
                    >
                    </Image>
                    <div className={styles.contSec}>
                        <div className={styles.place}>
                            <div className={styles.title}>
                                BIZ BILAN BOG'LANING
                            </div>
                            <div className={styles.line}/>
                            <Form/>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Section4;
