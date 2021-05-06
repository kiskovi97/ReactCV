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
                    <a href="https://www.instagram.com/kiskovi9706/" className={pStyles.minilogo}><img src={insta} alt=""/></a>
                    <a href="https://www.facebook.com/gergo.kovacs.948" className={pStyles.minilogo}><img src={fb} alt=""/></a>
                    <a href="https://www.linkedin.com/in/gerg%C5%91-kov%C3%A1cs-35215b154/" className={pStyles.minilogo}><img src={linekdin} alt=""/></a>
                    <a href="https://github.com/kiskovi97" className={pStyles.minilogo}><img src={github} alt=""/></a>
                </div>
            </div>
            <img src={image} alt="" className={styles.person}/>
        </div>
        <div className={styles.description}>
            <h1>I'm a Software Engineer and Game Developer.</h1>
            <div> I make games for fun and for professionaly. 
                I like to pursue intressting ideas and concepts and test them out first hand. 
                If you are intressted in me or my work feel free to look around and contact me if you want.
                I give great head ;)</div>
        </div>
    </div>

export default Me;