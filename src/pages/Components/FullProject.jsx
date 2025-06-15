import styles from './Project.module.css'

var FullProject = ({ proj }) => {
    
    var imageLink = proj?.image?.replace("static/media", "images");
    if(imageLink.startsWith("./"))
        imageLink = imageLink.replace("./", "http://kiskovi97.github.io/ReactCV/");

        if (proj) {                
            return (<div className={styles.project}>
            <div className={styles.fullImage}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.title}>{proj.title}</div>
                        <img src={imageLink} hidden={!imageLink} alt="" className={styles.image}/>
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
    
    
        return (<div>NoContentAdded</div>)
    }

export default FullProject