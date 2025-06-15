import styles from './WorkExperience.module.css';

var WorkExperience = ({work}) =>
    <div className={styles.main}>
        <div className={styles.title}>{work.title}</div>
        <a href={work.link}>{work.company}</a>
        <div>{work.fromTo}</div>
    </div>


export default WorkExperience;