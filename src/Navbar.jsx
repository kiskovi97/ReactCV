import React from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom'

var Navbar = () =>
(
    <div className={styles.Header}>
        <h1>Kovács Gergő</h1>
        <ul>
            <li> <Link to="/ReactCV/">Home</Link></li>
            <li> <Link to="/ReactCV/about">About Me</Link></li>
            <li> <Link to="/ReactCV/references">References</Link></li>
        </ul>
    </div>)

export default Navbar;
