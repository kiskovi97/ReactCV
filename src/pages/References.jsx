import React from 'react'
import styles from './Page.module.css'
import gStyles from './Grid.module.css'
import Project from './Components/Project'
import { Unity, Android, BME, ReactIcon, Bookr } from './Icons'
import city from '../images/City.png'
import crowd from '../images/Crowd.png'
import deeper from '../images/Deeper.png'
import johny from '../images/Johny.png'
import marching from '../images/Marching.png'
import rewind from '../images/Rewind.png'
import duplicate from '../images/duplicate.png'
import cooking_book from '../images/cooking_book.jpg'
import parkett from '../images/parkett.jpg'
import thebookclub from '../images/thebookclub.jpg'
import bookrclass from '../images/bookrclass.jpg'
import thewayout from '../images/thewayout.jpg'
import image_integration from '../images/image_integration.jpg'
import image_ghostboy from '../images/ghostboy.jpg'
import image_sofatutor from '../images/sofatutor.jpg'
import ScrollAnimation from 'react-animate-on-scroll'
import { useState, useEffect } from 'react';
import { fetchData } from '../dynamoService';

var References = () =>
{
    const [dbData, setDBData] = useState([]);
    const fetchAndSetData = async () => {
        const result = await fetchData();
        if (result.success) {
            console.log(result.data);
            setDBData([...result.data].sort((first, second) => first.title.localeCompare(second.title)));
        } else {
            alert("Error Fetching Data: " + result.message);
        }
    }
    useEffect(() => {
        fetchAndSetData();
    }, []);


    return (<div className={styles.page}>
        <div>
            <div className={gStyles.grid}>
                <div>
                    {dbData
                        .filter(item => item.tags.includes("steam"))
                        .map((item) => (<Project proj={item}/>))}
                </div>
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" animateOnce>
                    <div className={styles.logo}>
                        <Unity />
                    </div>
                </ScrollAnimation>
            </div>
        </div>
        <div>
            <div className={gStyles.grid}>
                <div>
                    {dbData
                        .filter(item => item.tags.includes("bme"))
                        .map((item) => (<Project proj={item}/>))}
                </div>
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" animateOnce>
                    <div className={styles.logo}>
                        <BME />
                    </div>
                    <div className={styles.logo}>
                        <Unity />
                    </div>
                </ScrollAnimation>
            </div>
        </div>
        <div>
            <div className={gStyles.grid}>
                <div>
                    {dbData
                        .filter(item => item.tags.includes("android"))
                        .map((item) => (<Project proj={item}/>))}
                </div>
                <div>
                    <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" animateOnce>
                        <div className={styles.logo}>
                            <Android />
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
        <div>
            <div className={gStyles.grid}>
                <div>
                    {dbData
                        .filter(item => item.tags.includes("bookr"))
                        .map((item) => (<Project proj={item}/>))}
                </div>
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" animateOnce>
                    <div className={styles.logo}>
                        <Bookr />
                    </div>
                    <div className={styles.logo}>
                        <Unity />
                    </div>
                </ScrollAnimation>
            </div>
        </div>
        <div>
            <div className={gStyles.grid}>
                <div>
                    {dbData
                        .filter(item => item.tags.includes("react"))
                        .map((item) => (<Project proj={item}/>))}
                </div>
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" animateOnce>
                    <div className={styles.logo}>
                        <ReactIcon />
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    </div>)
}
    
export default References