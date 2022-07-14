import styles from "../../styles/home/homeSections/section5.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";


function Section5(props) {
    const img1 = {
        width: "100%",
        backgroundImage: `url('/construction/worker11.png')`,
        height: "40vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        paddingTop: "1px",
        marginTop: "-1px"
    }
    const img2 = {
        width: "100%",
        backgroundImage: `url('/construction/worker2.jpg')`,
        height: "40vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        paddingTop: "1px",
        marginTop: "-1px"
    }
    const img3 = {
        width: "100%",
        backgroundImage: `url('/construction/worker3.jpg')`,
        height: "40vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        paddingTop: "1px",
        marginTop: "-1px"
    }
    const img4 = {
        width: "100%",
        backgroundImage: `url('/construction/worker4.png')`,
        height: "40vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        paddingTop: "1px",
        marginTop: "-1px"
    }
    return (
        <div className={styles.wrapper}>
           <div className={styles.wrap1}>
               <div className={styles.title}>
                   Ammattitaitoinen tiimimme
               </div>
               <div className={styles.line}/>
           </div>
            <div className={styles.grid}>
              <div className={styles.col}>
                  <div style={img1}/>
                  <div className={styles.center}>
                      <div className={styles.title1}>
                         Sharifboy Allaberganov
                      </div>
                      <div className={styles.text}>
                          Perustaja ja toimitusjohtaja
                      </div>
                      <div>
                          <FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>
                      </div>
                  </div>
              </div>
              <div className={styles.col}>
                  <div style={img2}/>
                  <div className={styles.center}>
                      <div className={styles.title1}>
                          Doniyor Yusupov
                      </div>
                      <div className={styles.text}>
                          Vanhempi lakimies
                      </div>
                      <div>
                          <FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>
                      </div>
                  </div>
              </div>
              <div className={styles.col}>
                  <div style={img3}/>
                  <div className={styles.center}>
                  <div className={styles.title1}>
                      Doniyor Yusupov
                  </div>
                  <div className={styles.text}>
                      Vanhempi lakimies
                  </div>
                  <div>
                      <FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>
                  </div>
              </div>
              </div>
              <div className={styles.col}>
                  <div style={img4}/>
                  <div className={styles.center}>
                      <div className={styles.title1}>
                          Sharifboy Allaberganov
                      </div>
                      <div className={styles.text}>
                          Talousjohtaja
                      </div>
                      <div>
                          <FontAwesomeIcon icon={faArrowRight} className={styles.icon}/>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    );
}

export default Section5;
