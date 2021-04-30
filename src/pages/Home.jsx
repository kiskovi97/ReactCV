
import React from 'react'
import styles from './Page.module.css'
import image from '../profile_glasses.png'

var Home = () => 
<div className={styles.page}>
    <div>
        <div>
            <h2>Kovács Gergő</h2>
            <div>Software Engineer</div>
            <div>kiskovi97(at)gmail.com</div>
            <div>https://github.com/kiskovi97</div>
            <div>https://www.instagram.com/kiskovi9706/</div>
        </div>
        <div>
            <img src={image} alt="" className={styles.person} />
        </div>
    </div>
    <div>
        <div>
            <h3>Hey visiter</h3>
            <div>I am a softwere Engineer. I work mostly with unity, but as you see I know some basic React too</div>
        </div>
    </div>
</div>
export default Home