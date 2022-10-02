import React from 'react'
import styles from './Project.module.css'
import ScrollAnimation from 'react-animate-on-scroll'

class Project extends React.Component {
    state = {
        clicked: false
    }

    onImageClicked = (value) => {
        this.setState({clicked: value});
    }

    render () {
        var prop = this.props;
        if (this.state.clicked) {
            return (
            <div className={styles.project}>
                <div className={styles.fullImage}  onClick={() => this.onImageClicked(false)}>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <div className={styles.title}>{prop.proj.title}</div>
                            <img src={prop.proj.image} hidden={!prop.proj.image} alt="" className={styles.image}/>
                            <div className={styles.overlay}></div>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.description}>{prop.proj.details}</div>
                            {prop.proj.specific.map(item => (<div className={styles.listItem}>{item}</div>))}
                        </div>

                    </div>
                </div>
                    
            </div>)
        }

        if (prop.proj) {
            var links = [];
            if (prop.proj.github)
                links.push((<div key="github" className={styles.link}><a href={prop.proj.github} hidden={!prop.proj.github}>GITHUB</a></div>))
    
            if (prop.proj.android)
                links.push((<div key="android" className={styles.link}><a href={prop.proj.android} hidden={!prop.proj.android}>PLAY STORE</a></div>))
    
            if (prop.proj.youtube)
                links.push((<div key="youtube" className={styles.link}><a href={prop.proj.youtube} hidden={!prop.proj.github}>YOUTUBE</a></div>))
    
            if (prop.proj.pdf)
                links.push((<div key="pdf" className={styles.link}><a href={prop.proj.pdf} hidden={!prop.proj.pdf}>THESIS INFORMATION</a></div>))
                
            if (prop.proj.website)
                links.push((<div key="website" className={styles.link}><a href={prop.proj.website} hidden={!prop.proj.website}>WEBSITE</a></div>))
    
            return (<div className={styles.project}>
                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" animateOnce >
                    <img src={prop.proj.image} hidden={!prop.proj.image} alt="" className={styles.background} onClick={() => this.onImageClicked(true)}/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight" animateOnce >
                    <div key="title" className={styles.title} onClick={() => this.onImageClicked(true)}>{prop.proj.title}</div>
                    <div key="details" className={styles.details} onClick={() => this.onImageClicked(true)}>{prop.proj.specific.map((item, id) => (<div key={id}>{item}</div>))}</div>
                    <div key="links" className={styles.links}>{links}</div>
                </ScrollAnimation>
            </div>)
        }
    
    
        return (<div>NoContentAdded</div>)
    }
}

export default Project