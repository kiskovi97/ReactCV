import React from 'react'
import styles from './Page.module.css'
import gStyles from './Grid.module.css'
import Project from './Components/Project'
import { Unity, Android, BME, ReactIcon, Bookr } from './Icons'
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