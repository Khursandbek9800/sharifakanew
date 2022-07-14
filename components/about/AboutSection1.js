import styles from "../../styles/about/section1About.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faFile, faHammer, faPersonBooth} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


function AboutSection1(props) {
    return (
        <div className={styles.stylesMain}>
            <Image
                className={styles.landImage}
                alt={"picture"}
                layout={"fill"}
                objectFit={"cover"}
                objectPosition={"center"}
                src={'/home/grayBg.jpg'}
            >
            </Image>
            <div className={styles.wrapN}>
                <div className={styles.absolute}>
                    <div className={styles.first}>
                        <Image
                            className={styles.landImage}
                            alt={"picture"}
                            layout={"fill"}
                            objectFit={"cover"}
                            objectPosition={"center"}
                            src={'/construction/architect.jpeg'}
                        >
                        </Image>
                    </div>
                    <div className={styles.second}>
                        <div className={styles.title}>
                            biz barcha sohalarada ixtisoslashamiz
                        </div>
                        <div className={styles.line}/>
                        <div className={styles.text1}>
                            Qurilish ishlari olib borilayotganiga bir yildan oshdi.
                            Baland binolar yuqori sur’atlarda ko’tarilmoqda,
                            quruvchilar ikki smenda ishlamoqda. Loyiha amalga oshirilishi
                            mamlakat rahbarining doimiy nazoratida va
                            eng yuqori darajada qo’llab-quvvatlanadi.
                        </div>
                        <div className={styles.box}>
                            <div className={styles.absolute1}>
                                <FontAwesomeIcon icon={faArrowRight} className={styles.iconArrow}/>
                            </div>
                            <div className={styles.text1}>
                                Qurilish ishlari olib borilayotganiga bir yildan oshdi.
                                Baland binolar yuqori sur’atlarda
                                ko’tarilmoqda, quruvchilar ikki smenda ishlamoqda.
                                Loyiha amalga oshirilishi
                                mamlakat rahbarining doimiy nazoratida va eng yuqori
                                darajada qo’llab-quvvatlanadi.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.flex}>
                    <div className={styles.title}>
                       bizni nima birinchi qiladi
                    </div>
                    <div className={styles.line}/>
                </div>
            </div>
            <div className={styles.grid}>
                <div className={styles.row}>
                    <FontAwesomeIcon icon={faHammer} className={styles.icon}/>
                    <div className={styles.title1}>
                      Qonuniy Loyihalar
                    </div>
                    <div className={styles.text}>
                        “Holiday Inn” mehmonxonasi va biznes markazi,
                        jami 9 ta aralash foydalanish binolarini qurish
                        bo`yicha ishlar olib borilmoqda.
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIc}/>
                </div>
                <div className={styles.row}>
                    <FontAwesomeIcon icon={faPersonBooth} className={styles.icon}/>
                    <div className={styles.title1}>
                     Qonuniy Loyihalar
                    </div>
                    <div className={styles.text}>
                        “Holiday Inn” mehmonxonasi va biznes markazi,
                        jami 9 ta aralash foydalanish binolarini qurish
                        bo`yicha ishlar olib borilmoqda.
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIc}/>
                </div>
                <div className={styles.row}>
                    <FontAwesomeIcon icon={faFile} className={styles.icon}/>
                    <div className={styles.title1}>
                        Qonuniy Loyohalar
                    </div>
                    <div className={styles.text}>
                        “Holiday Inn” mehmonxonasi va biznes markazi,
                        jami 9 ta aralash foydalanish binolarini qurish
                        bo`yicha ishlar olib borilmoqda.
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIc}/>
                </div>
            </div>
        </div>
    );
}

export default AboutSection1;
