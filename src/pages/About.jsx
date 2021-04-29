import React from 'react'
import styles from './Page.module.css'
import image from '../profile.png'
import work from '../bookr_logo.png'

export default () => 
<div className={styles.page}> 
    <div className={styles.onepage}>
        <div>
            <img src={image}/>
        </div>
        <div>
            <h2>Kovács Gergő</h2>
            <div>Software Engineer</div>
            <div>kiskovi97(at)gmail.com</div>
            <div>https://github.com/kiskovi97</div>
            <div>https://www.instagram.com/kiskovi9706/</div>
        </div>
    </div>
    <div className={styles.otherpage}>
        <div>
            <h3>Currently working at:</h3>
            <div>2020 - Bookr Kids - Unity developer</div>
            <h3>Previous Jobs</h3>
            <div>2019 - 2020 Evosoft - .net developer</div>
            <div>2018 - 2019 Atoldev - java developer</div>
        </div>
        <div>
            <img src={work}/>
        </div>
    </div>
    <div className={styles.onepage}>
        <div>
            <img src={image}/>
        </div>
        <div>
            <h2>Kovács Gergő</h2>
            <div>Software Engineer</div>
            <div>kiskovi97(at)gmail.com</div>
            <div>https://github.com/kiskovi97</div>
            <div>https://www.instagram.com/kiskovi9706/</div>
        </div>
    </div>
    <div className={styles.otherpage}>
        <div>
            <h3>Currently working at:</h3>
            <div>2020 - Bookr Kids - Unity developer</div>
            <h3>Previous Jobs</h3>
            <div>2019 - 2020 Evosoft - .net developer</div>
            <div>2018 - 2019 Atoldev - java developer</div>
        </div>
        <div>
            <img src={work}/>
        </div>
    </div>
</div>