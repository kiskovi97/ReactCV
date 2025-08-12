import styles from './Me.module.css'
import image from '../../images/ghostboy_gardener02Color.png'

import insta from '../../logos/instagram.svg'
import linekdin from '../../logos/linkedin.svg'
import github from '../../logos/github.svg'

var Me = () =>
    <div className={styles.main}>
        <div className={styles.mainImage}>
            <img src={image} alt="" />
        </div>
        <div>
            <h1>Gergo Kovacs</h1>
            <h3>I'm a Computer Science Engineer and Game Developer.</h3>
                I make games and apps professionaly and for fun too.
                I like to pursue interesting ideas and concepts and test them out first hand.
                If you are interested in my work feel free to look around and contact me if you want.
                
            <div className={styles.logos}>
                <a href="mailto:kiskovi97@gmail.com">kiskovi97@gmail.com</a>
            </div>
            <div className={styles.logos}>
                <a href="https://www.linkedin.com/in/gergo-kovacs-35215b154/" className={styles.minilogo}><img src={linekdin} alt="" /></a>
                <a href="https://github.com/kiskovi97" className={styles.minilogo}><img src={github} alt="" /></a>
                <a href="https://www.instagram.com/kiskovi9706/" className={styles.minilogo}><img src={insta} alt="" /></a>
            </div>
        </div>
    </div>


export default Me;
