import styles from "../../styles/about/section2About.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBalanceScale, faStar, faSuitcase, faUserTie} from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";


function AboutSection2(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.title}>
                  nega bizni tanlaysiz
                </div>
                <div className={styles.line}/>
                <div className={styles.text}>
                    Ushbu lootga bir vaqtning o`zida 4
                    ta investor jalb etildi, xususan, O`zbekistonning uchta
                    tijorat banklari ("Asaka" banki, "O`zsanoatqurilishbank" ATB, "Aloqabank" ATB),
                    shuningdek "Bomi Engineering In Construction" qurilish
                    kompaniyasi (Janubiy Koreya) jalb qilindi. Ayni vaqtda 4
                    ta ko‘p qavatli zamonaviy ofis binosi qurilishi davom etmoqda.
                    Ob`yekt 2021 yilning mart-iyun oylariga ishga tushirilishi mo`ljallangan.
                </div>
                <div className={styles.mar}>
                   <div className={styles.grid}>
                       <div className={styles.col}>
                           <div>
                               <FontAwesomeIcon icon={faSuitcase} className={styles.icon}/>
                           </div>
                           <div className={styles.mar5}>
                               <div className={styles.title}>
                                   250+
                               </div>
                               <div className={styles.text}>
                                   Business Partners
                               </div>
                           </div>
                       </div>
                       <div className={styles.col}>
                           <div>
                               <FontAwesomeIcon icon={faBalanceScale} className={styles.icon}/>
                           </div>
                           <div className={styles.mar5}>
                               <div className={styles.title}>
                                   180+
                               </div>
                               <div className={styles.text}>
                                   Cases Done
                               </div>
                           </div>
                       </div>
                   </div>
                    <div className={styles.grid}>
                        <div className={styles.col1}>
                            <div>
                                <FontAwesomeIcon icon={faUserTie} className={styles.icon}/>
                            </div>
                            <div className={styles.mar5}>
                                <div className={styles.title}>
                                    350+
                                </div>
                                <div className={styles.text}>
                                    Happy Clients
                                </div>
                            </div>
                        </div>
                        <div className={styles.col1}>
                            <div>
                                <FontAwesomeIcon icon={faStar} className={styles.icon}/>
                            </div>
                            <div className={styles.mar5}>
                                <div className={styles.title}>
                                    150+
                                </div>
                                <div className={styles.text}>
                                    Awards Win
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.player}>
                <div className={styles.wr}>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=lfoTLeFooR4"
                        width="100%"
                        height="100%"
                        className={styles.player1}
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutSection2;
