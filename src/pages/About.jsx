import React from 'react'
import styles from './Page.module.css'
import image from '../profile_glasses.png'
import work from '../bookr_logo.png'

var About = () => 
<div className={styles.page}> 
    <div>
        <div>
            <img src={image} alt="" className={styles.person}/>
        </div>
        <div>
            <h2>Kovács Gergő</h2>
            <div>Software Engineer</div>
            <div>kiskovi97(at)gmail.com</div>
            <div>https://github.com/kiskovi97</div>
            <div>https://www.instagram.com/kiskovi9706/</div>
        </div>
    </div>
    <div>
        <div>
            <h3>Currently working at:</h3>
            <div>2020 - Bookr Kids - Unity developer</div>
            <h3>Previous Jobs</h3>
            <div>2019 - 2020 Evosoft - .net developer</div>
            <div>2018 - 2019 Atoldev - java developer</div>
        </div>
        <div>
            <img src={work}  alt="" className={styles.logo}/>
        </div>
    </div>
</div>

export default About;
