import styles from './Project.module.css'
import ScrollAnimation from 'react-animate-on-scroll'

var Project = ({ proj }) => {
    
    var imageLink = proj?.image?.replace("static/media", "images");
    if(imageLink.startsWith("./"))
        imageLink = imageLink.replace("./", "http://kiskovi97.github.io/ReactCV/");

    if (proj) {
        var links = proj.links.map((link) => 
                (<div key={link.type} 
                    className={styles.link}>
                        <a href={link.link} hidden={!link.link}>
                            {link.type?.toUpperCase()}
                        </a>
                    </div>))
                
    var date = new Date(proj.updated);
    return (
    <div>
        <ScrollAnimation animateIn={"fadeIn"} animateOnce duration={0.6} offset={0}>
                <div className={styles.project}>
                    <div className={styles.image} >
                        <img src={imageLink} hidden={!imageLink} alt="" className={styles.background} />
                    </div>
                    <div className={styles.description} >
                        <div className={styles.title}>{proj.title} - {date.getFullYear()}</div>
                        <div className={styles.details}>{proj.details}</div>
                        <div key="links" className={styles.links}>{links}</div>
                    </div>
                </div>
        </ScrollAnimation>
        </div>)
        }
    
    
        return (<div>NoContentAdded</div>)
    }

export default Project