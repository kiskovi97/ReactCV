import styles from './Page.module.css'
import Project from './Components/Project'
import { useState, useEffect } from 'react';
import { fetchData } from '../dynamoService';
import Me from './Components/Me';

var Home = () =>
{
    const [dbData, setDBData] = useState([]);
    const fetchAndSetData = async () => {
        const result = await fetchData();
        if (result.success) {
            console.log(result.data);
            setDBData([...result.data].sort((first, second) => second.updated.localeCompare(first.updated)).slice(0, 6));
        } else {
            alert("Error Fetching Data: " + result.message);
        }
    }
    useEffect(() => {
        fetchAndSetData();
    }, []);

    return(
    <div className={styles.page}>
        <Me />
        <div>
            <h1>My Projects</h1>
            <div>A collection of my work, showcasing my skills and experience in game development, application development, and web development.</div>
        </div>
        <div >
            <h1>Latest Projects</h1>
            <div className={styles.list}>
                {dbData
                    .map((item, index) => (<Project proj={item} index={index}/>))}
            </div>
        </div>

    </div>)
}
    
export default Home