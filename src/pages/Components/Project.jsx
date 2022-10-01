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
                    <img src={prop.proj.image} hidden={!prop.proj.image} alt=""/>
                    <div className={styles.details}>
                        <h3>{prop.proj.title}</h3>
                        <h5>{prop.proj.details}</h5>
                    {prop.proj.specific.map(item => (<li>{item}</li>))}</div>
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
                    <div className={styles.title}>{prop.proj.title}</div>
                    <div className={styles.details}>{prop.proj.specific.map(item => (<div>{item}</div>))}</div>
                    <div className={styles.links}>{links}</div>
                </ScrollAnimation>
            </div>)
        }
    
    
        return (<div>NoContentAdded</div>)
    }
}

export default Project