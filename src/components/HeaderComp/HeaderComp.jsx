import React from "react";
import styles from "./HeaderComp.module.css"
import logo from '../../assets/logo.png'

export default function HeaderComp() {
    return(
        <header>
            <img className={styles.logo} src={logo} alt="" />
            <h1>Meme Generator</h1>
        </header>
    )
}