import styles from './ProjectDetails.module.css'
import { motion } from "framer-motion";

var ProjectDetails = ({ proj }) => {
    
    if (proj) {
        var links = proj.links.map((link) => 
                (<div key={link.type} 
                    className={styles.link}>
                        <a href={link.link} hidden={!link.link}>
                            {link.type?.toUpperCase()}
                        </a>
                    </div>))

                    
        var imageLink = proj?.image?.replace("static/media", "images");
        if(imageLink.startsWith("./"))
            imageLink = imageLink.replace("./", "http://kiskovi97.github.io/ReactCV/");
                    
        var date = new Date(proj.updated);
        return (
        <div>
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                >
                    <div className={styles.project}>
                        <div className={styles.description} >
                            <div className={styles.title}>{proj.title} - {date.getFullYear()}</div>
                            <div className={styles.details}>{proj.details}</div>
                            <div key="links" className={styles.links}>{links}</div>
                            <ul>
                                {proj.specific.map((item) => <li>{item}</li>)}
                            </ul>
                        </div>
                        <div className={styles.image} >
                            <img src={imageLink} hidden={!imageLink} alt="" className={styles.background} />
                        </div>
                    </div>
                </motion.div>
            </div>)
        }
    
    
        return (<div>NoContentAdded</div>)
    }

export default ProjectDetails