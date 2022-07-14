import styles from "../../styles/home/homeSections/section3.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRight, faBalanceScaleRight,
    faBriefcase,
    faCar, faFileContract, faFileSignature,
    faGavel,
    faHandHoldingHeart,
    faUserInjured
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


function Section3(props) {
    return (
        <div className={styles.stylesMain}>
            <Image
                className={styles.landImage}
                alt={"picture"}
                layout={"fill"}
                objectFit={"cover"}
                objectPosition={"center"}
                src={'/construction/white.jpg'}
            >
            </Image>
           <div className={styles.wrapper}>
               <div className={styles.title}>
                   ETUIMME
               </div>
               <div className={styles.line}/>
               <div className={styles.boxes}>
                 <div className={styles.box}>
                     <FontAwesomeIcon icon={faCar} className={styles.mainIcon}/>
                     <div className={styles.titleBox}>
                         NOPEUS
                     </div>
                     <div className={styles.textBox}>
                         Hankkeen käyttöönotto toteutetaan vaiheittain
                     </div>
                     <div>
                         <FontAwesomeIcon icon={faArrowRight} className={styles.iconArrow}/>
                     </div>
                 </div>
                   <div className={styles.box}>
                       <FontAwesomeIcon icon={faBriefcase} className={styles.mainIcon}/>
                       <div className={styles.titleBox}>
                           DESIGN
                       </div>
                       <div className={styles.textBox}>
                           Hankkeen käyttöönotto toteutetaan vaiheittain
                       </div>
                       <div>
                           <FontAwesomeIcon icon={faArrowRight} className={styles.iconArrow}/>
                       </div>
                 </div>
                   <div className={styles.box}>
                       <FontAwesomeIcon icon={faGavel} className={styles.mainIcon}/>
                       <div className={styles.titleBox}>
                           SOPIVUUS
                       </div>
                       <div className={styles.textBox}>
                           Hankkeen käyttöönotto toteutetaan vaiheittain
                       </div>
                       <div>
                           <FontAwesomeIcon icon={faArrowRight} className={styles.iconArrow}/>
                       </div>
                 </div>
                   <div className={styles.box}>
                       <FontAwesomeIcon icon={faHandHoldingHeart} className={styles.mainIcon}/>
                       <div className={styles.titleBox}>
                           EDULLISET
                       </div>
                       <div className={styles.textBox}>
                           Hankkeen käyttöönotto toteutetaan vaiheittain
                       </div>
                       <div>
                           <FontAwesomeIcon icon={faArrowRight} className={styles.iconArrow}/>
                       </div>
                 </div>
                   <div className={styles.box}>
                       <FontAwesomeIcon icon={faUserInjured} className={styles.mainIcon}/>
                       <div className={styles.titleBox}>
                           LAATU
                       </div>
                       <div className={styles.textBox}>
                           Hankkeen käyttöönotto toteutetaan vaiheittain
                       </div>
                       <div>
                           <FontAwesomeIcon icon={faArrowRight} className={styles.iconArrow}/>
                       </div>
                 </div>
                   <div className={styles.box}>
                       <FontAwesomeIcon icon={faFileContract} className={styles.mainIcon}/>
                       <div className={styles.titleBox}>
                           RAAKA MATERIAALI
                       </div>
                       <div className={styles.textBox}>
                           Hankkeen käyttöönotto toteutetaan vaiheittain
                       </div>
                       <div>
                           <FontAwesomeIcon icon={faArrowRight} className={styles.iconArrow}/>
                       </div>
                 </div>
                   <div className={styles.box}>
                       <FontAwesomeIcon icon={faBalanceScaleRight} className={styles.mainIcon}/>
                       <div className={styles.titleBox}>
                           KOKEA
                       </div>
                       <div className={styles.textBox}>
                           Hankkeen käyttöönotto toteutetaan vaiheittain
                       </div>
                       <div>
                           <FontAwesomeIcon icon={faArrowRight} className={styles.iconArrow}/>
                       </div>
                 </div>
                   <div className={styles.box}>
                       <FontAwesomeIcon icon={faFileSignature} className={styles.mainIcon}/>
                       <div className={styles.titleBox}>
                           HUOMIO
                       </div>
                       <div className={styles.textBox}>
                           Hankkeen käyttöönotto toteutetaan vaiheittain
                       </div>
                       <div>
                           <FontAwesomeIcon icon={faArrowRight} className={styles.iconArrow}/>
                       </div>
                 </div>
               </div>
           </div>
        </div>
    );
}

export default Section3;
