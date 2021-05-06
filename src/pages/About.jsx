import React from 'react'
import styles from './Page.module.css'
import Me from './Components/Me'
import work from '../bookr_logo.png'
import gStyles from './Grid.module.css'

var About = () => 
<div className={styles.page}> 
    <Me/>
    <div className={gStyles.grid}>
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
