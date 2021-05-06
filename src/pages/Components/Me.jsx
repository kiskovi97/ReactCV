import React from 'react'
import styles from './Me.module.css'
import image from '../../images/profile_glasses.png'
import gStyles from '../Grid.module.css'
import pStyles from '../Page.module.css'

import insta from '../../logos/instagram.svg'
import fb from '../../logos/facebook.svg'
import linekdin from '../../logos/linkedin.svg'
import github from '../../logos/github.svg'

var Me = () => 
    <div className={gStyles.grid}>
        <div className={styles.titleBlock}>
            <div className={styles.frontTitle}>
                <div className={styles.title}>Kovács Gergő</div>
                <div className={styles.logos}>
                    <img src={insta} alt="" className={pStyles.minilogo}/>
                    <img src={fb} alt="" className={pStyles.minilogo}/>
                    <img src={linekdin} alt="" className={pStyles.minilogo}/>
                    <img src={github} alt="" className={pStyles.minilogo}/>
                </div>
            </div>
            <img src={image} alt="" className={styles.person}/>
        </div>
        <div>
            <div>Software Engineer</div>
            <div>kiskovi97(at)gmail.com</div>
            <div>https://github.com/kiskovi97</div>
            <div>https://www.instagram.com/kiskovi9706/</div>
        </div>
    </div>

export default Me;