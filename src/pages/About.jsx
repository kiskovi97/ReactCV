import React from 'react'
import styles from './Page.module.css'
import Me from './Components/Me'
import gStyles from './Grid.module.css'
import ScrollAnimation from 'react-animate-on-scroll'
import { Bookr, BME, Group } from './Icons'

var About = () =>
    <div className={styles.page}>
        <Me />
        <div>
            <div className={gStyles.grid}>
                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" animateOnce >
                    <h3>Currently working at:</h3>
                    <h4>2020 - <a href={"https://corp.bookrkids.com/"}>Bookr Kids</a> - Unity developer</h4>
                    <h3>Previous Jobs</h3>
                    <h4>2019 - 2020 <a href={"https://www.evosoft.hu/"}>Evosoft</a> - .NET developer</h4>
                    <h4>2018 - 2019 <a href={"https://atolldev.com/}"}>Atoldev</a> - Java fullstack developer</h4>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" animateOnce >
                    <div className={styles.logo}>
                        <Bookr />
                    </div>
                </ScrollAnimation>
            </div>
        </div>
        
        <div>
            <div className={gStyles.grid}>
                <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" animateOnce >
                    <div className={styles.logo}>
                        <BME />
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" animateOnce >
                    <h3>Budapest University of Technology and Economics</h3>
                    <h4>Computer Engineering BSc</h4>
                    <div>2015 - 2019</div>
                    <h4>Computer Engineering MSc</h4>
                    <div>2019 - 2021</div>
                    <h3>Simonyi Károly College for Advanced Studies</h3>
                    <h4>Schönherz Design Studio</h4>
                    <div>2016 - 2021</div>
                </ScrollAnimation>
            </div>
        </div>
        <div>
            <div className={gStyles.grid}>
                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" animateOnce >
                    <h2>University Self-active groups</h2>
                    <h3><a href={"https://parkettklub.sch.bme.hu/community/"}>ParkettKlub</a></h3>
                    <li>Public Relations</li>
                    <li>Event Orginizer</li>
                    <li>Leader</li>
                    
                    <h3><a href={"https://schdesign.hu/"}>Schönherz Design Studio</a></h3>
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
        <div>
            <div className={gStyles.grid}>
                <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" animateOnce>
                    <div className={styles.logo}>
                        <Bookr />
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" animateOnce >
                    <h1>The Book Club Application link test (http)</h1>
                    <a href="https://thebookclub.page.link/app" className={styles.minilogo}><h3>Application</h3></a>
                    <a href="https://thebookclub.page.link/app?Dashboard" className={styles.minilogo}><h3>Dashboard</h3></a>
                    <a href="https://thebookclub.page.link/app?Library" className={styles.minilogo}><h3>Library</h3></a>
                    <a href="https://thebookclub.page.link/app?BookDetails:41" className={styles.minilogo}><h3>BookDeatails : Adelita</h3></a>
                    <a href="https://thebookclub.page.link/app?BookDetails:42" className={styles.minilogo}><h3>BookDeatails : Race around</h3></a>
                    <h1>The Book Club Application link test (thebookclub:\\)</h1>
                    <a href="thebookclub://app" className={styles.minilogo}><h3>Application</h3></a>
                    <a href="thebookclub://app?Dashboard" className={styles.minilogo}><h3>Dashboard</h3></a>
                    <a href="thebookclub://app?Library" className={styles.minilogo}><h3>Library</h3></a>
                    <a href="thebookclub://app?Mackin&token=123" className={styles.minilogo}><h3>Mackin token 123</h3></a>
                    <a href="thebookclub://app?BookDetails:41" className={styles.minilogo}><h3>BookDeatails : Adelita</h3></a>
                    <a href="thebookclub://app?BookDetails:42" className={styles.minilogo}><h3>BookDeatails : Race around</h3></a>
                    <form name="myform" action="https://envch2uqthjfl5b.m.pipedream.net/" method="post">
                        <button>Post Deeplink test</button>
                    </form>
                </ScrollAnimation>
            </div>
        </div>
    </div>

export default About;
