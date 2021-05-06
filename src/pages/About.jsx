import React from 'react'
import styles from './Page.module.css'
import Me from './Components/Me'
import gStyles from './Grid.module.css'
import ScrollAnimation from 'react-animate-on-scroll'
import {Bookr} from './Icons'

var About = () => 
<div className={styles.page}> 
    <Me/>
    <div className={gStyles.grid}>
        <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" animateOnce >
            <h3>Currently working at:</h3>
            <div>2020 - Bookr Kids - Unity developer</div>
            <h3>Previous Jobs</h3>
            <div>2019 - 2020 Evosoft - .net developer</div>
            <div>2018 - 2019 Atoldev - java developer</div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" animateOnce >
            <div className={styles.logo}>
                <Bookr />
            </div>
        </ScrollAnimation>
    </div>
</div>

export default About;
