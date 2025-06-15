import styles from './Skill.module.css';

import { useState, useEffect } from 'react';
import { fetchDataByTag } from '../../dynamoService';

var Skill = ({skill}) => {
    const [dbData, setDBData] = useState([]);
    const fetchAndSetData = async (tags) => {
        var results = [];
        if (!tags || Object.keys(tags).length === 0) {
            setDBData([]);
            return;
        }
        for(let tag in tags) {
            const result = await fetchDataByTag(skill.tags[tag]);
            if (result.success) {
                results.push(...result.data);
            } else {
                alert("Error Fetching Data: " + result.message);
            }
        }
        if (results.length > 0) {
            setDBData([...results].sort((first, second) => second.updated.localeCompare(first.updated)));
        } else {
            setDBData([]);
        }
    }
    useEffect(() => {
        fetchAndSetData(skill.tags);
    }, [skill]);

    return (
        <div className={styles.main}>
            <div className={styles.title}>{skill.title}</div>
            <div>{skill.description}</div>
            <div className={styles.projects}>
                {dbData ? dbData.length < 5 ? dbData.map((item, index) => (
                    <li key={index} className={styles.project}>{item.title} - {new Date(item.updated).getFullYear()}</li>
                )) : dbData.slice(0,3).map((item, index) => (
                        <li key={index} className={styles.project}>{item.title} - {new Date(item.updated).getFullYear()}</li>
                    )) : null}
                {dbData.length > 3 && <div>{dbData.length - 3} more projects</div>}
            </div>
        </div>
    );
}

export default Skill;