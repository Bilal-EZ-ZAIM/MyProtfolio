import React, { useRef } from 'react'
import DownloadPDFButton from '../../componts/doww/downo'
import Downo from '../../componts/doww/downo'
import Filtreng from '../../componts/filtreng/Filtreng'
import Title from '../../componts/title/Title'
import { abl, skils } from '../../data/data'
import './about.css'
const About = () => {
  const dow = useRef()
  const download = () => {
    console.log()
  }
  return (
    <div className='about'>

      <Title title={'About'} titl={' Me'} />
      <div className="contenre">
        <p>
          I am an experienced front-end developer with a strong background in HTML5, CSS3, and JavaScript, including ECMAScript 6. I have a passion for creating responsive and user-friendly interfaces using modern web technologies. My expertise also includes ReactJS and Redux Toolkit, which I use to build scalable and robust web applications.
          In my work, I focus on delivering clean and maintainable code, adhering to web standards and best practices, and ensuring cross-browser compatibility. I am also skilled in debugging and troubleshooting issues that may arise during development.
          My experience in front-end development has allowed me to develop a strong understanding of responsive design principles, and I am able to create intuitive and visually appealing user interfaces that work seamlessly on any device.
          Overall, I am a highly motivated and detail-oriented developer who is dedicated to delivering high-quality work that meets and exceeds the expectations of my clients.
        </p>
        <DownloadPDFButton />
        <Title title={'Skills'} />
        <Filtreng abl={abl} skils={skils} />
        <div className="skills">
        </div>
      </div>
    </div>
  )
}

export default About