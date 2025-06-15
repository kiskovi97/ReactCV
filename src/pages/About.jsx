import { desc, title } from 'framer-motion/client'
import Me from './Components/Me'
import WorkExperience from './Components/WorkExperience'
import styles from './Page.module.css'
import Skill from './Components/Skill'

var work = [
  {
    company: "Breakpoint One",
    title: "Unity VR/AR Developer",
    desc: "I developed immersive experiences using Unity for virtual and augmented reality platforms.",
    link: "https://www.breakpoint.one/",
    fromTo: "2023 - Present"
  },
  {
    company: "Bookr Kids",
    title: "Unity Developer",
    desc: "I created engaging interactive applications using Unity, focusing on child-friendly design for educational content.",
    link: "https://corp.bookrkids.com/",
    fromTo: "2020 - 2023"
  },
  {
    company: "Evosoft",
    title: ".NET Developer",
    desc: "I developed desktop and backend applications for medical software solutions using .NET technologies.",
    link: "https://www.evosoft.hu/",
    fromTo: "2019 - 2020"
  },
  {
    company: "Atoldev",
    title: "Java Fullstack Developer - Intern",
    desc: "I created web applications for banking clients using Java, contributing to both frontend and backend functionality during my internship.",
    link: "https://atolldev.com/",
    fromTo: "2018 - 2019"
  }
];

var skills = [
    {
        title: "Unity XR",
        tags: [ "xr" ],
        description: "Developing immersive experiences using Unity for virtual and augmented reality platforms."
    },
    {
        title: "Unity Game Development",
        tags: [ "game" ],
        description: "Creating engaging games using Unity, focusing on gameplay mechanics and user experience."
    },
    {
        title: "Unity Mobile Development",
        tags: ["android"],
        description: "Creating games and applications for mobile with unity, emphasizing user-friendly interfaces and functionality."
    },
    {
        title: "React Web Development",
        tags: ["react",],
        description: "Building responsive web applications using React and Node.js, ensuring a seamless user experience."
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
            <h1>Skills & Expertise</h1>
            <h3>Core Competencies</h3>
            <div className={styles.list}>
                {skills.map((item, index) => (
                    <Skill key={index} skill={item} />
                ))}
            </div>
            <h3>Programming Languages</h3>
            <div>C#, HTML, CSS, SQL, JavaScript, TypeScript, Java, Kotlin, C, C++</div>

            <h3>Technologies & Frameworks</h3>
            <div>Unity, React, Node.js, .NET, Android Studio, AWS</div>

            <h3>Professional Roles</h3>
            <div>Developer, Software Architect, Project Manager, Mentor, Game Designer, Public Relations Coordinator</div>
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
