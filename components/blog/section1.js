import styles from "../../styles/blog/section1.module.scss";
import Box from "../blog/components/box";
import Image from "next/image";


function Section1(props) {
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
              <div className={styles.grid}>
                 <div className={styles.col}>
                     <Box mes={"Qurilish bosqichlari"} pic={"b1"}/>
                 </div>
                 <div className={styles.col}>
                     <Box  mes={"Qurilish bosqichlari"} pic={"b2"}/>
                 </div>
                  <div className={styles.col}>
                      <Box  mes={"Qurilish bosqichlari"} pic={"b3"}/>
                  </div>
                  <div className={styles.col}>
                      <Box  mes={"Qurilish bosqichlari"} pic={"b4"}/>
                  </div>
                  <div className={styles.col}>
                      <Box  mes={"Qurilish bosqichlari"} pic={"b5"}/>
                  </div>
                  <div className={styles.col}>
                      <Box  mes={"Qurilish bosqichlari"} pic={"b6"}/>
                  </div>
            </div>
        </div>
    );
}

export default Section1;
