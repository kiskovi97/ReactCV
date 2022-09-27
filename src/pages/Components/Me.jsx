import React from 'react'
import styles from './Me.module.css'
import image from '../../images/ghostboy_gardener.png'
import gStyles from '../Grid.module.css'
import pStyles from '../Page.module.css'

import insta from '../../logos/instagram.svg'
import linekdin from '../../logos/linkedin.svg'
import github from '../../logos/github.svg'
import ScrollAnimation from 'react-animate-on-scroll'

var Me = () =>
    <div>
        <div className={gStyles.grid}>
            <div className={styles.titleBlock}>
                <div className={styles.frontTitle}>
                    <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" animateOnce offset={20}>
                        <div className={styles.title} >
                            Kovács Gergő
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation className={styles.logos} animateIn="fadeInLeft" animateOut="fadeOutLeft" offset={180} animateOnce>
                        <a href="https://www.linkedin.com/in/gerg%C5%91-kov%C3%A1cs-35215b154/" className={pStyles.minilogo}><img src={linekdin} alt="" /></a>
                        <a href="https://github.com/kiskovi97" className={pStyles.minilogo}><img src={github} alt="" /></a>
                        <a href="https://www.instagram.com/kiskovi9706/" className={pStyles.minilogo}><img src={insta} alt="" /></a>
                    </ScrollAnimation>
                </div>
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" className={styles.person} animateOnce>
                    <img src={image} alt="" />
                </ScrollAnimation>
            </div>
            <div className={styles.description}>
                <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" animateOnce>
                    <h1>I'm a Computer Science Engineer and Game Developer.</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" offset={180} animateOnce>
                    I make games professionaly and for fun too.
                    I like to pursue interesting ideas and concepts and test them out first hand.
                    If you are interested in my work feel free to look around and contact me if you want.
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" animateOnce>
                    <h3>kiskovi97@gmail.com</h3>
                </ScrollAnimation>
            </div>
        </div>
    </div>


export default Me;