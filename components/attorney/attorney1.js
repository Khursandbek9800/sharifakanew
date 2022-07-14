import styles from "../../styles/attorney/attorneySection1.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faCheck} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


function Attorney1(props) {
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
            <div className={styles.container}>
                <div className={styles.first}>
                    <Image
                        className={styles.landImage}
                        alt={"picture"}
                        layout={"fill"}
                        objectFit={"cover"}
                        objectPosition={"center"}
                        src={'/construction/five.png'}
                    >
                    </Image>
                </div>
            </div>
            <div className={styles.down}>
                <div className={styles.title}>
                 Majmuaning rivojlanish protsedurasi
                </div>
                <div className={styles.line}/>
                <div className={styles.text}>
                    Majmuaning rivojlangan infrastrukturasi yangi hayot tarzi uchun keng
                    imkoniyatlar taqdim etadi. Sport bilan shug‘ullanish, ertalabki yugurish va
                    kechki osoyishta sayrlar, bo‘sh vaqtingizni maroqli o‘tkazishingiz uchun
                    ko‘plab obyektlarning
                    bir joyda jam bo‘lishi bizning majmuamizda istiqomat qilishning imkoniyatlarini
                    ochib beradi.
                </div>
                <div className={styles.grid}>
                    <div className={styles.row}>
                        <div>
                            <FontAwesomeIcon icon={faCheck} className={styles.icon}/> Lorem ipsum dolor sit.
                        </div>
                        <div className={styles.do}>
                            <FontAwesomeIcon icon={faCheck} className={styles.icon}/> Lorem ipsum dolor sit.
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div>
                            <FontAwesomeIcon icon={faCheck} className={styles.icon}/> Lorem ipsum dolor sit.
                        </div>
                        <div className={styles.do}>
                            <FontAwesomeIcon icon={faCheck} className={styles.icon}/> Lorem ipsum dolor sit.
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div>
                            <FontAwesomeIcon icon={faCheck} className={styles.icon}/> Lorem ipsum dolor sit.
                        </div>
                        <div className={styles.do}>
                            <FontAwesomeIcon icon={faCheck} className={styles.icon}/> Lorem ipsum dolor sit.
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div>
                            <FontAwesomeIcon icon={faCheck} className={styles.icon}/> Lorem ipsum dolor sit.
                        </div>
                        <div className={styles.do}>
                            <FontAwesomeIcon icon={faCheck} className={styles.icon}/> Lorem ipsum dolor sit.
                        </div>
                    </div>
                </div>
                <div className={styles.contact}>
                    Free consultation <FontAwesomeIcon icon={faArrowRight}/>
                </div>
            </div>
            <div className={styles.abs}>
                <div className={styles.grid1}>
                    <div className={styles.col}>
                        <div className={styles.bg}>
                            <Image
                                className={styles.landImage}
                                alt={"picture"}
                                layout={"fill"}
                                objectFit={"cover"}
                                objectPosition={"center"}
                                src={'/construction/wr1.jpg'}
                            >
                            </Image>
                        </div>
                    </div>
                    <div className={styles.col}>

                        <div className={styles.bg}>
                            <Image
                                className={styles.landImage}
                                alt={"picture"}
                                layout={"fill"}
                                objectFit={"cover"}
                                objectPosition={"center"}
                                src={'/construction/wr2.jpg'}
                            >
                            </Image>
                        </div>
                    </div>
                    <div className={styles.col}>

                        <div className={styles.bg}>
                            <Image
                                className={styles.landImage}
                                alt={"picture"}
                                layout={"fill"}
                                objectFit={"cover"}
                                objectPosition={"center"}
                                src={'/construction/wr3.jpg'}
                            >
                            </Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Attorney1;
