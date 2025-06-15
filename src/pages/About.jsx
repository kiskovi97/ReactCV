import { title } from 'framer-motion/client'
import Me from './Components/Me'
import WorkExperience from './Components/WorkExperience'
import styles from './Page.module.css'

var work = [
    {
        company: "Breakpoint One",
        title: "Unity VR/AR developer",
        link: "https://www.breakpoint.one/",
        fromTo: "2023 - Present"
    },{
        company: "Bookr Kids",
        title: "Unity developer",
        link: "https://corp.bookrkids.com/",
        fromTo: "2020 - 2023"
    },{
        company: "Evosoft",
        title: ".NET developer",
        link: "https://www.evosoft.hu/",
        fromTo: "2019 - 2020"
    },{
        company: "Atoldev",
        title: "Java fullstack developer",
        link: "https://atolldev.com/",
        fromTo: "2018 - 2019"
    }
]

var About = () =>
{
    return (
        <div className={styles.page}>
        <Me />
        <div>
            <h1>Work Experience</h1>
            <div className={styles.list}>
                {work.map((item, index) => (
                    <WorkExperience key={index} work={item}/>
                ))}
            </div>
        </div>
        
        <div>
            <h1>Education</h1>
            <h3><a href="https://www.bme.hu/?language=en">Budapest University of Technology and Economics</a></h3>
            <div>2021 - Master's Degree in Computer Engineering</div>
            <div>2019 - Bachelor's Degree in Computer Engineering</div>
        </div>
        <div>
            <h1>Skills</h1>
            <h3>Programming Languages</h3>
            <div>C#, Html, Css, SQL, Javascript, Typescript, Java, Kotlin, C, C++</div>
            <h3>Environments</h3>
            <div>Unity, React, NodeJs, .NET, Android Studio, AWS</div>
            <h3>Roles</h3>
            <div>Developer, Architect, Project Managmer, Mentor, Game Designer, Public Relations Manager</div>
        </div>
        <div>
            <h1>Leadership & Student Initiatives</h1>
            <h3><a href="https://schdesign.hu/">Schönherz Design Studio</a> - <a href="https://simonyi.bme.hu/">Simonyi Károly College for Advanced Studies</a></h3>
            <ul>
                <li>3D Modelling Mentor</li>
                <li>Graphic and UI Designer</li>
            </ul>
            <h3>ParkettKlub - Dance & Event Organizers</h3>
            <ul>
                <li>Public Relations</li>
                <li>Event Organizer</li>
                <li>President</li>
            </ul>
        </div>
    </div>
    );
}
    

export default About;
