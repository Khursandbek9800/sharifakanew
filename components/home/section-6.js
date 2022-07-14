import styles from "../../styles/home/homeSections/section6.module.scss";
import {Carousel} from 'antd';
import Image from "next/image";

function Section6() {
    return (
        <div className={styles.stylesMain}>
            <Image src="/construction/white.jpg"
                   className={styles.landImage}
                   alt={"picture"}
                   layout={"fill"}
                   objectFit={"cover"}
                   objectPosition={"center"}/>
                   <div className={styles.wrap}>
                       <div className={styles.title}>

                           ASIAKKAIMME ASIAKKAAT
                       </div>
                       <div className={styles.line}/>
                   </div>
            <Carousel autoplay dots={false}>
                <div>
                    <div className={styles.wrapper}>
                        <Image src="/construction/p2.jpg"
                               className={styles.landImage1}
                               alt={"picture"}
                               layout={"fill"}
                               objectFit={"cover"}
                               objectPosition={"center"}/>
                        <div className={styles.absolute}>
                            <Image src="/construction/client1.jpg"
                                   className={styles.landImage}
                                   alt={"picture"}
                                   layout={"fill"}
                                   objectFit={"cover"}
                                   objectPosition={"center"}/>
                        </div>
                        <div className={styles.wrapText}>
                            <div className={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Blanditiis consequuntur deserunt eum harum hic impedit
                                minima officiis
                                porro sit suscipit. Atque dolore iusto nostrum odio
                                placeat praesentium quo repellendus soluta!
                            </div>
                            <div className={styles.title1}>
                               KEVIN PETERSON
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={styles.wrapper}>
                        <Image src="/construction/p1.jpg"
                               className={styles.landImage1}
                               alt={"picture"}
                               layout={"fill"}
                               objectFit={"cover"}
                               objectPosition={"center"}/>
                        <div className={styles.absolute}>
                            <Image src="/construction/client2.jpg"
                                   className={styles.landImage}
                                   alt={"picture"}
                                   layout={"fill"}
                                   objectFit={"cover"}
                                   objectPosition={"center"}/>
                        </div>
                        <div className={styles.wrapText}>
                            <div className={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Blanditiis consequuntur deserunt eum harum hic impedit
                                minima officiis
                                porro sit suscipit. Atque dolore iusto nostrum odio
                                placeat praesentium quo repellendus soluta!
                            </div>
                            <div className={styles.title1}>
                                KEVIN PETERSON
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.wrapper}>
                        <Image src="/construction/p3.jpg"
                               className={styles.landImage1}
                               alt={"picture"}
                               layout={"fill"}
                               objectFit={"cover"}
                               objectPosition={"center"}/>
                        <div className={styles.absolute}>
                            <Image src="/construction/client3.jpg"
                                   className={styles.landImage}
                                   alt={"picture"}
                                   layout={"fill"}
                                   objectFit={"cover"}
                                   objectPosition={"center"}/>
                        </div>
                        <div className={styles.wrapText}>
                            <div className={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Blanditiis consequuntur deserunt eum harum hic impedit
                                minima officiis
                                porro sit suscipit. Atque dolore iusto nostrum odio
                                placeat praesentium quo repellendus soluta!
                            </div>
                            <div className={styles.title1}>
                                KEVIN PETERSON
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.wrapper}>
                        <Image src="/construction/p4.jpg"
                               className={styles.landImage1}
                               alt={"picture"}
                               layout={"fill"}
                               objectFit={"cover"}
                               objectPosition={"center"}/>
                        <div className={styles.absolute}>
                            <Image src="/construction/client4.jpg"
                                   className={styles.landImage}
                                   alt={"picture"}
                                   layout={"fill"}
                                   objectFit={"cover"}
                                   objectPosition={"center"}/>
                        </div>
                        <div className={styles.wrapText}>
                            <div className={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Blanditiis consequuntur deserunt eum harum hic impedit
                                minima officiis
                                porro sit suscipit. Atque dolore iusto nostrum odio
                                placeat praesentium quo repellendus soluta!
                            </div>
                            <div className={styles.title1}>
                                KEVIN PETERSON
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default Section6;
