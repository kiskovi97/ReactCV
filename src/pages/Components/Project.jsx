import React from 'react'
import styles from './Project.module.css'

var Project = (prop) => {

    if (prop.proj) {

        var links = [];
        if (prop.proj.github)
            links.push((<div><a href={prop.proj.github} hidden={!prop.proj.github}>Github</a></div>))

        if (prop.proj.android)
            links.push((<div><a href={prop.proj.android} hidden={!prop.proj.github}>Play store</a></div>))

        if (prop.proj.youtube)
            links.push((<div><a href={prop.proj.youtube} hidden={!prop.proj.github}>Youtube</a></div>))

        if (prop.proj.pdf)
            links.push((<div><a href={prop.proj.pdf} hidden={!prop.proj.github}>Thesis informantion</a></div>))

        return (<div className={styles.project}>
            <div hidden={!prop.proj.image}>
                <img src={prop.proj.image} alt="" className={styles.background} />
            </div>
            <div>
                <h3>{prop.proj.title}</h3>
                <div className={styles.details}>{prop.proj.details}</div>
                <div className={styles.links}>{links}</div>
            </div>
        </div>)
    }


    return (<div>NoContentAdded</div>)
}

export default Project