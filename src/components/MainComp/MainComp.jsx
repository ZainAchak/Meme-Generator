import React from "react";
import styles from './MainComp.module.css'
import logo from "../../assets/logo.png"

export default function MainComp() {
    return(
        <main>
            <div className={styles.form}>
                <label htmlFor="toptext">Top Text
                    <input type="text" id="toptext" />
                </label>

                <label htmlFor="bottomtext">Bottom Text
                    <input type="text" id="bottomtext" />
                </label>

                <button className={[styles.btnGenerator, styles.rowSpan2].join(" ")}>Get a new meme Image</button>
            </div>

            <div className={styles.meme}>
                {/* <img src={logo}  height="100px" alt="" srcset="" /> */}
            </div>
        </main>
    )
}