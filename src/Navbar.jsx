import styles from './Header.module.css';
import { Link } from 'react-router'

var Navbar = () =>
(
    <div className={styles.main}>
        <div className={styles.title}>
            <div> <Link to="/">Portfolio</Link></div>
        </div>
        <div className={styles.tabs}>
            <div> <Link to="/about" >About Me</Link></div>
            <div> <Link to="/references">References</Link></div>
        </div>
    </div>)

    /*
        <div className={styles.search}>
            <input type='text' placeholder='Search...'/>
        </div> */

export default Navbar;
