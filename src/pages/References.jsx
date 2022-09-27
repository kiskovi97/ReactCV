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
import ScrollAnimation from 'react-animate-on-scroll'

export var projects = [
    {
        androidGame: true,
        title: "Deeper and Deeper - Android game",
        details: "This is an infinty runner type game, with Unity URP and 2D lighting. The graphics is 2D pixel art made by me."
        +" The main project was made on a weekend for a challenge, and some small features and skins were added later.",
        specific:[
            "Infinitly generated playground",
            "Self made 2D pixel art, with multiple skins and levels",
            "Market system",
            "Integrated Social Media Share system",
            "GameJam project: made with one idea in one week",
            "Integrated Google Ads"
        ],
        github: "https://github.com/kiskovi97/DeeperAndDeeper",
        android: "https://play.google.com/store/apps/details?id=com.igorodcavok.DeeperAndDeeper",
        image: deeper,
    },
    {
        androidGame: true,
        title: "The Way Out - Android game",
        details: "This is a puzzle game, where you build labyrinths peace by peace.",
        specific:[
            "Infinitly generated levels",
            "Self made 2D pixel art, with dark and light settings",
            "GameJam project: made with one idea in one week",
            "Integrated Google Ads"
        ],
        github: "https://github.com/kiskovi97/TheWayOut",
        android: "https://play.google.com/store/apps/details?id=com.kiskovi.thewayout",
        image: thewayout,
    },
    {
        androidGame: true,
        title: "Johnny Run - Android game",
        details: "This is an infinty runner type game, made with Unity. The graphics was made by me, and the project was made with my dear friend Dorogi-Kovács Gábor. "
            + "This was our first game out in play store, but sadly the project was abondend after a year and the game was shut down by Play Store.",
        specific:[
            "Infinitly generated playground",
            "Self made 3D models and textures",
            "Market system"
        ],
        github: "https://github.com/kiskovi97/DorogiRun",
        image: johny,
    },
    {
        bme: true,
        title: "Crowd Simulation with Unity DOTS",
        details: "This was my master's thesis of Budapest University of Technology and Economics"
            + " Crowd Simulation with Unity, using the Unity ECS packages."
            + " I worked on this project for 2 semesters and made a youtube video series explaining it to others.",
        specific:[
            "Unity ECS technology",
            "Crowd simulation aglorithms",
            "Testing enviroments with exported data",
            "Deep documentation about the algorithms and the ECS for learning",
            "Youtube playlist about ECS and the algorithms"
        ],
        github: "https://github.com/kiskovi97/CrowdSimulation",
        youtube: "https://www.youtube.com/playlist?list=PL-FEATMhJjKamIhMB4SInM8KcGNZl_5ow",
        pdf: "https://diplomaterv.vik.bme.hu/hu/Theses/Tomeg-szimulacio-Unity-keretrendszer",
        image: crowd,
    },
    {
        bme: true,
        title: "Procedurally generated virtual city",
        details: "The subject of my thesis is creating procedurally generated virtual cities using Unity engine."
            + "This city is generated from scratch. Only textures and vehicle modells were given. The finished city contains moving vehicles like cars or trams."
            +" Later made it into a game for an other project.",
        specific: [
            "Procedurally generated buildings",
            "Procedurally generated streats",
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
        bme: true,
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
        bme: true,
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
        androidGame: true,
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
        reactWebsite: true,
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
        reactWebsite: true,
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
        bookr: true,
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
        bookr: true,
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
        bookr: true,
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
            "App store integration with autmated building scripts",
            "SSO integration with multiple clients"
        ],
        image: image_integration,
    },
    {
        bookr: true,
        title: "Bookr Kids Web Based Solutions",
        details: "One of Bookr's client requested a web-based solution for Bookr Class. "
        + "I was tasked to plan, implement and lead the development and communication with the client.",
        specific: [
            "React based library with integrated Unity-WebGL player",
            "NodeJs backend with custom environment variables",
            "SSO Login implementation",
            "Subscription handeling enpoints",
            "AWS staging and production environment (EC2, CloudFront, S3, RDS)"
        ],
        image: image_integration,
    },
    {
        pcGame: true,
        title: "Ghostboy",
        details: "This project is a collaboration with my dear friend Tamás Czuder. "
        +"He is the owner of the original idea and he is the grpahic designer of the game. "
        +"I was brought on to the project by a recomendation for helping out in the coding departmant.",
        specific: [
            "2D Towerdefense mechanics with special abilities and bosses",
            "Unity Services integration (Remote config, Analytics)",
            "Modular architecture with Dependency Injection",
            //"Events and other Gameplay modifiers for more intressting levels",
            "Keyboard and Controller support",
            "Management system with optimized calculation time",
            "FMOD integration",
            "2D Lighting integrated with shadows",
            "Scriptable object and Prefab based design",
            "Localization",
            "Automated level testing"
        ],
        image: image_ghostboy,
    }
]

var References = () =>
    <div className={styles.page}>
        <div>
            <div className={gStyles.grid}>
                <div>
                    {projects.filter(item => item.androidGame).map((item, index) => (<Project proj={item} index={index}/>))}
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
                    {projects.filter(item => item.bme).map((item, index) => (<Project proj={item} index={index}/>))}
                </div>
            </div>
        </div>
        <div>
            <div className={gStyles.grid}>
                <div>
                    {projects.filter(item => item.pcGame).map((item, index) => (<Project proj={item} index={index}/>))}
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
                        <Bookr />
                    </div>
                </ScrollAnimation>
                <div>
                    {projects.filter(item => item.bookr).map((item, index) => (<Project proj={item} index={index}/>))}
                </div>
            </div>
        </div>
        <div>
            <div className={gStyles.grid}>
                <div>
                    {projects.filter(item => item.reactWebsite).map((item, index) => (<Project proj={item} index={index}/>))}
                </div>
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" animateOnce>
                    <div className={styles.logo}>
                        <ReactIcon />
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    </div>
export default References