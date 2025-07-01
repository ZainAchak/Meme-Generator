import React, { useEffect, useState } from "react";
import styles from './MainComp.module.css'

export default function MainComp() {
    const [meme, setMeme] = useState({
        topText: "",
        bottonText: "",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
        })

    // useEffect(()=>{},[])

    function handleKeyTop(event) {
        const {id,value} = event.currentTarget;
        setMeme(prevMeme => ({...prevMeme,[id]:value}))
    }

    return(
        <main>
            <div className={styles.form}>
                <label htmlFor="toptext">Top Text
                    <input 
                        onChange={handleKeyTop} 
                        type="text" 
                        id="topText"
                        placeholder="One does not simply"
                        value={meme.topText} />
                </label>

                <label htmlFor="bottomtext">Bottom Text
                    <input 
                        onChange={handleKeyTop}
                        type="text" 
                        id="bottonText"
                        placeholder="debug on Friday."
                        value={meme.bottonText} />
                </label>

                <button className={[styles.btnGenerator, styles.rowSpan2].join(" ")}>Get a new meme Image</button>
            
                <div className={[styles.meme,styles.rowSpan2].join(" ")}>
                    <img src={meme.imageUrl}/>
                    <span className={styles.top}>{meme.topText}</span>
                    <span className={styles.bottom}>{meme.bottonText}</span>
                </div>

            </div>

            
        </main>
    )
}