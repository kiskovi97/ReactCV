import ScrollAnimation from 'react-animate-on-scroll'
import React from 'react'
import styles from './Page.module.css'
import gStyles from './Grid.module.css'
import Me from './Components/Me'

var Home = () => 
<div className={styles.page}>
    <div>
        <Me/>
    </div>
    <div className={gStyles.grid}>
        <ScrollAnimation  animateIn="fadeInLeft" animateOut="fadeOutLeft">
            <h3>Hey visiter</h3>
            <div>I am a softwere Engineer. I work mostly with unity, but as you see I know some basic React too</div>
        </ScrollAnimation>
    </div>
</div>
export default Home