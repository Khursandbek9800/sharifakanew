import React, { useState, useEffect } from "react";
import styles from  "../../styles/scrollToTop/scroll.module.scss";

const ScrollingElement = () => {
    return (
        <div className={styles.App}>
            <div className={styles.fixedCenter}>Scroll position: px</div>
        </div>
    );
};
export default ScrollingElement
