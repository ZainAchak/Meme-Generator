import React from "react";
import styles from './MainComp.module.css'

export default function MainComp() {
    return(
        <main>
            <div className={styles.form}>
                <label htmlFor="toptext">Top Text</label>
                <input type="text" id="toptext" />

                <label htmlFor="bottomtext">Bottom Text</label>
                <input type="text" id="bottomtext" />

                <button>Get a new meme Image</button>
            </div>

            <div className="meme">

            </div>
        </main>
    )
}