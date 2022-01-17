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
import image_integration from '../images/image_integration.jpg'
import ScrollAnimation from 'react-animate-on-scroll'

var projects = [
    {
        title: "Deeper and Deeper - Android game",
        details: "This is an infinty runner type game, with Unity URP and 2D lighting. The graphics is 2D pixel art made by me."
        +" The main project was made on a weekend for a challenge, and some small features and skins were added later.",
        specific:[
            "Infinit generated playground",
            "Self made 2D pixel art, with multiple skins and levels",
            "Market system",
            "Integrated Social Media Share system",
            "GameJam project: made with one idea in one week"
        ],
        github: "https://github.com/kiskovi97/DeeperAndDeeper",
        android: "https://play.google.com/store/apps/details?id=com.igorodcavok.DeeperAndDeeper",
        image: deeper,
    },
    {
        title: "Johnny Run - Android game",
        details: "This is an infinty runner type game, made with Unity. The graphics was made by me, and the project was made with my dear friend Dorogi-Kovács Gábor. "
            + "This was our first game out in play store, but sadly the project was abondend after a year and the game was shut down by Play Store.",
        specific:[
            "Infinit generated playground",
            "Self made 3D models and textures",
            "Market system"
        ],
        github: "https://github.com/kiskovi97/DorogiRun",
        image: johny,
    },
    {
        title: "Crowd Simulation with Unity DOTS",
        details: "This was my master's thesis of Budapest University of Technology and Economics"
            + " Crowd Simulation with Unity, using the Unity ECS packages."
            + " I worked on this project for 2 semesters and made a youtube video series explaining it to others. ",
        specific:[
            "Unity ECS technology",
            "Crowd simulation aglorithms",
            "Testing enviroments with exported data",
            "Deep documentation about the algoprithms and the ECS for learning",
            "Youtube playlist about ECS and the algorithms"
        ],
        github: "https://github.com/kiskovi97/CrowdSimulation",
        youtube: "https://www.youtube.com/playlist?list=PL-FEATMhJjKamIhMB4SInM8KcGNZl_5ow",
        pdf: "https://diplomaterv.vik.bme.hu/hu/Theses/Tomeg-szimulacio-Unity-keretrendszer",
        image: crowd,
    },
    {
        title: "Procedurally generated virtual city",
        details: "The subject of my thesis is creating procedurally generated virtual cities using Unity engine."
            + "This city is generated from scratch. Only textures and vehicle modells were given. The finished city contains moving vehicles like cars or trams."
            +" Later made into a game for an other project.",
        specific: [
            "Procadurally generated buildings",
            "Procedrually generated streats",
            "Customizable parameters for generation with UI implementation",
            "Automated cars and trams with collision detection",
            "3D modells generation system with texture mapping",
            "Test game (pizza delivery) with little modifications"
        ],
        github: "https://github.com/kiskovi97/ProceduralCity",
        pdf: "https://diplomaterv.vik.bme.hu/en/Theses/Proceduralisan-generalt-varos-Unity",
        image: city,
    },
    {
        title: "Marching Cube Project",
        details: "This is a project where I tested my compute shader abilities."
        +" I made a Marching Cube algorithm and applyed to a \"water simulation\" and a map generation.",
        specific: [
            "Compute Shader for optimalization",
            "Marching Cubes algorithm for water simulation",
            "Marching Cubes algorithm for level surface generation",
            "Infinit level generation"
        ],
        github: "https://github.com/kiskovi97/WaterBending",
        image: marching,
    },
    {
        title: "Rewind man",
        details: "This game was made for a University project. I inspired by the game Braid and implemented its basic rules in Unity (The player can rewind time). "
            + "I had to make a deterministic phyics simulation to work around the memoryheavy timecontroling mechanincs."
            + "The finished product was a nice multilevel puzzle platformer that challenged my testers thinking abalities.",
        specific:[
            "Self made Deterministic Physics",
            "Replaying backwardly all physical events",
            "15+ levels for challenging the player and the time manipulations limits",
            "3D modells and graphics made by me",
        ],
        github: "https://github.com/kiskovi97/RewindMan",
        image: rewind,
    },
    {
        title: "Duplicate",
        details: "This game was made based on a challenge. The challenge that I have to make a game in a weekend, from a random idea. " +
            "The challenge was a success, and with some tweets for mobile gameplay I published it on google play.",
        specific: [
            "Multiple input support: Android (touch), Controller and Keyboard",
            "GameJam development: max 1 week development time",
            "Self made graphics with pixel art style",
            "15+ levels designed individualy"
        ],
        github: "https://github.com/kiskovi97/Duplicate",
        android: "https://play.google.com/store/apps/details?id=com.IgorodCavok.Duplicate",
        image: duplicate,
    },
    {
        title: "Parkett Klub Website",
        details: "My self-active group, Parkett Klub needed a new website. I was tasked to redesign and make the frontend for that. It was my first website.",
        specific: [
            "React architectures with 20+ pages (editor pages included)",
            "SSO login and user handeling",
            "Integrated editor and admin pages",
            "Mobile and Desktop view support",
            "Self made design and graphics"
        ],
        website: "https://parkettklub.sch.bme.hu/community/",
        github: "https://github.com/parkettklub/parkett",
        image: parkett,
    },
    {
        title: "Cooking Book",
        details: "This is an other website that I developed just for fun. Me and my partner like to cook every sunday. And we often share the results on social media. "
        +"But after many requests I created this website to share the whole receipts for each meal we tried to make."
        +" Since then the recipes are updated regularry and some small tweeks were made for a better looking website.",
        specific: [
            "React architecture",
            "Mobile and Desktop view support",
            "Weekend project: made in one week"
        ],
        github: "https://github.com/kiskovi97/CookBook",
        website: "https://kiskovi97.github.io/CookBook/",
        image: cooking_book,
    },
    {
        title: "The Book Club",
        details: "This app is a multiplatform interactive book reader application for students. This app was developed while working with Bookr Kids company."
        +" My work was mostly backend related, but post relase I was the owner of the whole production.",
        specific: [
            "Offline statistics calculation and graph showcases",
            "Integration demo for SSO client and provider",
            "Project management"
        ],
        website: "https://thebookclub.com/",
        android: "https://play.google.com/store/apps/details?id=com.bookrkids.tbc",
        image: thebookclub,
    },
    {
        title: "Bookr Class",
        details: "This app is a multiplatform interactive book reader application for children. This app was created based on the Book Club app. "
        +" I helped a bit at the pre-release phase, but post-release I joined the project permenantly.",
        specific: [
            "WebGL based solution for reading books",
            "SSO integration for outside partners",
            "Remote Logging for easier testing and debugging",
            "Language based texts and remote tables",
            "Phone number input system with validator"
        ],
        website: "https://bookrclass.com/",
        android: "https://play.google.com/store/apps/details?id=com.bookrclass.edu",
        image: bookrclass,
    },
    {
        title: "Bookr Kids Apps",
        details: "The Apps have some things in common. "
        +"These features were implemented in multiple projects.",
        specific: [
            "Integrated Google Login for Android, IOS, Mac and Windows usage",
            "40+ API endpoint and 20+ Database Tables for offline and online usage",
            "Layered architecture, and Dependency Injection for modular development",
            "Deeplink integration for Android, IOS, Mac and Windows",
            "Optimized download handeling for pictures and books",
            "Integrated In App purchase (IOS, Mac and Android) with restore function",
            "App store integration with autmated building scripts"
        ],
        image: image_integration,
    },
    {
        title: "Ghostboy",
        details: "This project is a collaboration with my dear friend Tamás Czuder. "
        +"He is the owner of the original idea and he is the grpahic designer of the game. "
        +"I was brought on to the project by a recomendation for helping out in the coding departmant.",
        specific: [
            "Towerdefense mechanics with special abilities and bosses",
            "Events and other Gameplay modifiers for more intressting levels",
            "Structured codebase made with separated modules",
            "UI System that works with bothy keyboard+mouse and controller",
            "Family Member, Perks and Helps management system with optimized calculation time",
            "Soundtrack and sound system handeling system",
            "Gamestate saving system with level availability",
            "Universal UI window system",
            "Character special ability system",
            "2D Lighting integrated with shadows",
            "Scriptable objects based design",
            "Prefab based level design"
        ],
        image: image_integration,
    }
]

var References = () =>
    <div className={styles.page}>
        <div>
            <div className={gStyles.grid}>
                <div>
                    <Project proj={projects[0]} />
                    <Project proj={projects[1]} />
                    <Project proj={projects[6]} />
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
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" animateOnce>
                    <div className={styles.logo}>
                        <BME />
                    </div>
                </ScrollAnimation>
                <div>
                    <Project proj={projects[2]} />
                    <Project proj={projects[3]} />
                </div>
            </div>
        </div>
        <div>
            <div className={gStyles.grid}>
                <div>
                    <Project proj={projects[4]} />
                    <Project proj={projects[5]} />
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
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" animateOnce>
                    <div className={styles.logo}>
                        <ReactIcon />
                    </div>
                </ScrollAnimation>
                <div>
                    <Project proj={projects[7]} />
                    <Project proj={projects[8]} />
                </div>
            </div>
        </div>
        <div>
            <div className={gStyles.grid}>
                <div>
                    <Project proj={projects[11]} />
                    <Project proj={projects[9]} />
                    <Project proj={projects[10]} />
                </div>
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" animateOnce>
                    <div className={styles.logo}>
                        <Bookr />
                    </div>
                </ScrollAnimation>
            </div>
        </div>
        <div hidden={true}>
            <div className={gStyles.grid}>
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" animateOnce>
                    <div className={styles.logo}>
                    </div>
                </ScrollAnimation>
                <div>
                    <Project proj={projects[12]} />
                </div>
            </div>
        </div>
    </div>
export default References