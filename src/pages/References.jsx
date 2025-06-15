import React from 'react'
import styles from './Page.module.css'
import gStyles from './Grid.module.css'
import Project from './Components/Project'
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
        <div >
            <h1>Launched on Steam</h1>
            <div className={styles.list}>
                    {dbData
                        .filter(item => item.tags.includes("steam"))
                        .map((item) => (<Project proj={item}/>))}
            </div>
        </div>
        <div >
            <h1>Breakpoint One Projects</h1>
            <div className={styles.list}>
                    {dbData
                        .filter(item => item.tags.includes("bpo"))
                        .map((item) => (<Project proj={item}/>))}
            </div>
        </div>
        <div >
            <h1>Bookr Kids Projects</h1>
            <div className={styles.list}>
                    {dbData
                        .filter(item => item.tags.includes("bookr"))
                        .map((item) => (<Project proj={item}/>))}
            </div>
        </div>
        <div >
            <h1>University Projects</h1>
            <div className={styles.list}>
                    {dbData
                        .filter(item => item.tags.includes("bme"))
                        .map((item) => (<Project proj={item}/>))}
            </div>
        </div>
        <div >
            <h1>Android Projects</h1>
            <div className={styles.list}>
                    {dbData
                        .filter(item => item.tags.includes("android"))
                        .map((item) => (<Project proj={item}/>))}
            </div>
        </div>
        <div >
            <h1>React Projects</h1>
            <div className={styles.list}>
                    {dbData
                        .filter(item => item.tags.includes("react"))
                        .map((item) => (<Project proj={item}/>))}
            </div>
        </div>
    </div>)
}
    
export default References