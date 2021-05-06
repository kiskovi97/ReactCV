import React from 'react'
import styles from './Page.module.css'
import gStyles from './Grid.module.css'
import Project from './Components/Project'
import bme from '../logos/bme.png'
import android from '../logos/android.png'
import unity from '../logos/unity.png'
import city from '../images/City.png'
import crowd from '../images/Crowd.png'
import deeper from '../images/Deeper.png'
import johny from '../images/Johny.png'

var projects = [
    {
        title: "Deeper and Deeper - Android game",
        details: "This is an infinty runner type game, with Unity URP and 2D lighting. The graphics is 2D pixel art made by me.",
        github: "https://github.com/kiskovi97/DeeperAndDeeper",
        android: "https://play.google.com/store/apps/details?id=com.igorodcavok.DeeperAndDeeper",
        image: deeper,
    },
    {
        title: "Johnny Run - Android game",
        details: "This is an infinty runner type game, made with Unity. The graphics was made by me, and the project was made with my dear friend Dorogi-Kovács Gábor. "
            + "This was out first game out in play store, but sadly the project was abondend after a year and the game was shut down by Play Store.",
        github: "https://github.com/kiskovi97/DorogiRun",
        image: johny,
    },
    {
        title: "Crowd Simulation with Unity DOTS",
        details: "This was my master's thesis of Budapest University of Technology and Economics"
            + " Crowd Simulation with Unity, using the Unity ECS packages."
            + " I worked on this project for 2 semesters and made a youtube video series explaining it to others. ",
        github: "https://github.com/kiskovi97/CrowdSimulation",
        youtube: "https://www.youtube.com/playlist?list=PL-FEATMhJjKamIhMB4SInM8KcGNZl_5ow",
        pdf: "https://diplomaterv.vik.bme.hu/hu/Theses/Tomeg-szimulacio-Unity-keretrendszer",
        image: crowd,
    },
    {
        title: "Procedurally generated virtual city",
        details: "The subject of my thesis is creating procedurally generated virtual cities using Unity engine."
            + "This city is generated from scratch. Only textures and vehicle modells were given. The finished city contains moving vehicles like cars or trams.",
        github: "https://github.com/kiskovi97/ProceduralCity",
        pdf: "https://diplomaterv.vik.bme.hu/en/Theses/Proceduralisan-generalt-varos-Unity",
        image: city,
    },
    {
        title: "Marching Cube Project",
        details: "This is a project where I tested my compute shader abilities. I made a Marching Cube algorithm and applyed to a \"water simulation\" and a map generation.",
        github: "https://github.com/kiskovi97/WaterBending",
    },
    {
        title: "Rewind man",
        details: "This game was made for an University project. I inspired by the game Braid and implemented its basic rules in Unity (The player can rewind time). "
            + "I had to make a deterministic phyics simulation to work around the memoryheavy timecontroling mechanincs."
            + "The finished product was a nice multilevel puzle platformer that challenged my testers thinking abalities.",
        github: "https://github.com/kiskovi97/RewindMan",
    },
]

var References = () =>
    <div className={styles.page}>
        <div className={gStyles.grid}>
            <div>
                <Project proj={projects[0]} />
                <Project proj={projects[1]} />
            </div>
            <div>
                <img src={android} alt="" className={styles.logo} />
            </div>
        </div>
        <div className={gStyles.grid}>
            <div>
                <img src={bme} alt="" className={styles.logo} />
            </div>
            <div>
                <Project proj={projects[2]} />
                <Project proj={projects[3]} />
            </div>
        </div>
        <div className={gStyles.grid}>
            <div>
                <Project proj={projects[4]} />
                <Project proj={projects[5]} />
            </div>
            <div>
                <img src={unity} alt="" className={styles.logo} />
            </div>
        </div>
    </div>
export default References