import ScrollAnimation from 'react-animate-on-scroll'
import React from 'react'
import styles from './Page.module.css'
import gStyles from './Grid.module.css'
import Me from './Components/Me'
import { projects } from './References.jsx'
import { Unity } from './Icons'
import Project from './Components/Project'

var Home = () =>
    <div className={styles.page}>
        <div>
            <Me />
        </div>
        <div>
            <div className={gStyles.grid}>
                <div>
                    {projects.filter(item => item.pcGame).map((item, index) => (<Project proj={item} index={index}/>))}
                </div>
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" animateOnce>
                    <div className={styles.logo}>
                        <Unity />
                    </div>
                </ScrollAnimation>
            </div>
        </div>

    </div>
export default Home