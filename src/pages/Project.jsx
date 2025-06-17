import React from 'react'
import styles from './Page.module.css'
import ProjectDetails from './Components/ProjectDetails'

import { fetchDataById } from "../dynamoService.js";
import { useEffect, useState } from 'react';

var Project = () => {
    var query = window.location.href.split('/');
    var id = query[query.length - 1];
    const [dbData, setDBData] = useState(null);

    const fetchAndSetData = async (id) => {
        const result = await fetchDataById(id);
        if (result.success) {
            console.log(result.data);
            setDBData(result.data);
        } else {
            alert("Error Fetching Data: " + result.message);
        }
    }

    useEffect(() => {
        fetchAndSetData(id);
    }, [id]);

    if (!dbData)
        return (<div className={styles.page}>Loading...</div>)

    return (<div className={styles.page}>
        <ProjectDetails proj={dbData} />
    </div>)
}
export default Project