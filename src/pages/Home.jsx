import ScrollAnimation from 'react-animate-on-scroll'
import React from 'react'
import styles from './Page.module.css'
import gStyles from './Grid.module.css'
import Me from './Components/Me'
import { projects } from './References.jsx'
import { Unity } from './Icons'
import Project from './Components/Project'
import { useState, useEffect } from 'react';
import { fetchData } from '../dynamoService';

var Home = () =>
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

    return(
    <div className={styles.page}>
        <div>
            <Me />
        </div>
        <div>
            <div className={gStyles.grid}>
                <div>
                    {dbData
                        .filter(item => item.tags.includes("steam"))
                        .map((item, index) => (<Project proj={item} index={index}/>))}
                </div>
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" animateOnce>
                    <div className={styles.logo}>
                        <Unity />
                    </div>
                </ScrollAnimation>
            </div>
        </div>

    </div>)
}
    
export default Home