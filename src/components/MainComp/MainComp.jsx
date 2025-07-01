import React, { useEffect, useState } from "react";
import styles from './MainComp.module.css'

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

export default function MainComp() {
    const [meme, setMeme] = useState({
        topText: "",
        bottonText: "",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
        })
    const memeAPI = "https://api.imgflip.com/get_memes";
    const [memesData,setMemesData ]= useState(null);

    
    useEffect(()=>{
        fetch(memeAPI)
                .then((data)=>data.json())
                .then((dataJson)=>{
                    setMemesData(dataJson.data.memes)
                })
                .catch((err)=> console.error("Error fetching memes",err));
        },[])
    
    function handleKeyTop(event) {
        const {id,value} = event.currentTarget;
        setMeme(prevMeme => ({...prevMeme,[id]:value}))
    }

    function generateNewImage() {
        const randonNumber = getRandomNumber();
        setMeme(prevMeme => ({...prevMeme,imageUrl:memesData[randonNumber].url}))
    }
    console.log(memesData)
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

                <button 
                    onClick={generateNewImage} 
                    className={[styles.btnGenerator, styles.rowSpan2].join(" ")}>Get a new meme Image</button>
            
                <div className={[styles.meme,styles.rowSpan2].join(" ")}>
                    <img src={meme.imageUrl}/>
                    <span className={styles.top}>{meme.topText}</span>
                    <span className={styles.bottom}>{meme.bottonText}</span>
                </div>

            </div>

            
        </main>
    )
}