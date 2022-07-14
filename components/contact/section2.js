import styles from "../../styles/contact/section2.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons";



function Section2(props) {
    return (
        <div className={styles.last}>
            <div className={styles.flex}>
                <div className={styles.title}>
                    BIZNING OFIS MANZILLARIMIZ
                </div>
                <div className={styles.line}/>
            </div>
            <div className={styles.grid}>
              <div className={styles.col}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon}/>
                <div className={styles.title1}>
                    Location
                </div>
                  <div className={styles.text}>
                      121 King street, Melbourne
                  </div>
                  <div className={styles.text}>
                      3000, Australia
                  </div>
              </div>
              <div className={styles.col}>
                  <FontAwesomeIcon icon={faPhone} className={styles.icon}/>
                  <div className={styles.title1}>
                      Phone
                  </div>
                  <div className={styles.text}>
                      121 King street, Melbourne
                  </div>
                  <div className={styles.text}>
                      3000, Australia
                  </div>
              </div>
              <div className={styles.col}>
                  <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                  <div className={styles.title1}>
                      Email
                  </div>
                  <div className={styles.text}>
                      121 King street, Melbourne
                  </div>
                  <div className={styles.text}>
                      3000, Australia
                  </div>
              </div>
            </div>
        </div>
    );
}

export default Section2;
