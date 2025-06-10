import React from 'react'
import styles from './Project.module.css'
import ScrollAnimation from 'react-animate-on-scroll'
import { useState, useEffect } from 'react';

var Project = ({ proj }) => {
        var [clicked, setClicked] = useState(false);
        if (clicked) {
            return (
            <div className={styles.project}>
                <div className={styles.fullImage}  onClick={() => setClicked(false)}>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <div className={styles.title}>{proj.title}</div>
                            <img src={proj.image} hidden={!proj.image} alt="" className={styles.image}/>
                            <div className={styles.overlay}></div>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.description}>{proj.details}</div>
                            {proj.specific.map(item => (<div className={styles.listItem}>{item}</div>))}
                        </div>

                    </div>
                </div>
                    
            </div>)
        }

        if (proj) {
            var links = [];
            if (proj.github)
                links.push((<div key="github" className={styles.link}><a href={proj.github} hidden={!proj.github}>GITHUB</a></div>))
    
            if (proj.android)
                links.push((<div key="android" className={styles.link}><a href={proj.android} hidden={!proj.android}>PLAY STORE</a></div>))
    
            if (proj.youtube)
                links.push((<div key="youtube" className={styles.link}><a href={proj.youtube} hidden={!proj.youtube}>YOUTUBE</a></div>))
    
            if (proj.pdf)
                links.push((<div key="pdf" className={styles.link}><a href={proj.pdf} hidden={!proj.pdf}>THESIS INFORMATION</a></div>))
                
            if (proj.website)
                links.push((<div key="website" className={styles.link}><a href={proj.website} hidden={!proj.website}>WEBSITE</a></div>))
    
            return (<div className={styles.project}>
                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" animateOnce >
                    <img src={proj.image} hidden={!proj.image} alt="" className={styles.background} onClick={() => setClicked(true)}/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" animateOnce >
                    <div key="title" className={styles.title} onClick={() => setClicked(true)}>{proj.title}</div>
                    <div key="details" className={styles.details} onClick={() => setClicked(true)}>{proj.specific.map((item, id) => (<div key={id}>{item}</div>))}</div>
                    <div key="links" className={styles.links}>{links}</div>
                </ScrollAnimation>
            </div>)
        }
    
    
        return (<div>NoContentAdded</div>)
    }
}

export default Project