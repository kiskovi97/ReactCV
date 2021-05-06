import React from 'react'
import styles from './Page.module.css'
import Me from './Components/Me'
import gStyles from './Grid.module.css'
import ScrollAnimation from 'react-animate-on-scroll'
import {Bookr, BME, Group} from './Icons'

var About = () => 
<div className={styles.page}> 
    <Me/>
    <div className={gStyles.grid}>
        <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" animateOnce >
            <h3>Currently working at:</h3>
            <h4>2020 - Bookr Kids - Unity developer</h4>
            <h3>Previous Jobs</h3>
            <div>2019 - 2020 Evosoft - .net developer</div>
            <div>2018 Atoldev - Fullstack developer in java</div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" animateOnce >
            <div className={styles.logo}>
                <Bookr />
            </div>
        </ScrollAnimation>
    </div>
    <div className={gStyles.grid}>
        <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" animateOnce >
            <div className={styles.logo}>
                <BME />
            </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" animateOnce >
            <h3>2015-2019</h3>
            <div>Budapest University of Technology and Economics</div>
            <div>Computer Engineering BSc</div>
            <h3>2019 - 2021</h3>
            <div>Budapest University of Technology and Economics</div>
            <div>Computer Engineering MSc</div>
            <h3>2016 - 2021</h3>
            <div>Simonyi Károly College for Advanced Studies</div>
            <div>Schönherz Design Studio</div>
        </ScrollAnimation>
    </div>
    <div className={gStyles.grid}>
        <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" animateOnce >
            <h2>University Self-active groups</h2>
            <h3>ParkettKlub</h3>
            <li>Public Relations</li>
            <li>Event Orginizer</li>
            <li>Leader</li>
            <h3>Schönherz Design Studio</h3>
            <li>3D Modelling Mentor</li>
            <li>Graphic and UI Designer</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" animateOnce >
            <div className={styles.logo}>
                <Group />
            </div>
        </ScrollAnimation>
    </div>
</div>

export default About;
