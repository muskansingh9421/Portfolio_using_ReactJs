import React from "react"
import './about.css'
import ME from '../../assets/me-about1.jpg'
import {FaSchool} from 'react-icons/fa'
import {RiMedal2Fill} from 'react-icons/ri'
import {GoProjectSymlink} from 'react-icons/go'

const About = () => {
    return(
        <section id="about">
          <h5>Get to know</h5>
          <h2>About Me</h2>

          <div className="container about__container">
             <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt='About image'/>
             </div>
          </div>

          <div className="about__content">
             <div className="about__cards">
                <article className="about__card">
                    <FaSchool className="about__icon"/>
                    <h5>College</h5>
                    <small>AMC Engineering College</small>
                </article>

                <article className="about__card">
                    <RiMedal2Fill className="about__icon"/>
                    <h5>Course</h5>
                    <small>B.E in computer science and engineering</small>
                </article>

                <article className="about__card">
                    <GoProjectSymlink className="about__icon"/>
                    <h5>Projects</h5>
                    <small>Worked on college and personal projects</small>
                </article>
             </div>

             <p>
             Highly motivated Computer Science Engineer with expertise in software development, 
             proficient in coding languages such as HTML, JavaScript, CSS, Python, Java, and C.
             Possessing knowledge of the MERN (MongoDB, Express.js, React.js, Node.js) stack, 
             I am dedicated to leveraging my technical skills and problem-solving abilities to 
             contribute to the software industry. I am a team player who excels in collaborative
             environments and thrives on tackling challenging projects. In my leisure time, 
             I enjoy reading books to broaden my knowledge and stay updated with industry trends. 
             </p>

             <a href="#contact" className="btn btn-primary">Let's Talk</a>
           </div>
          </div>
        </section>
    )
}
export default About