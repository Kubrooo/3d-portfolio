import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src= {arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I’m <span className='font-semibold'>Ardiansyah</span> 👋<br/>
        A software developer from Indonesia who enjoys building simple yet useful stuff 🙂
        </h1>
    ),
    2: (
        <InfoBox 
            text={
                <>I'm a full-<del>stack</del> stuck developer who loves turning ideas into something real and useful.</>
            }
            link="/about"
            btnText="More about me"
        />

    ),
    3: (
        <InfoBox 
            text="Been lucky to work on some meaningful projects. Curious to see what I’ve done?"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
            text="Looking for someone to help with a project? Happy to connect and chat 🙂"
            link="/contact"
            btnText="Let's talk"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo