import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card.jsx'
import Resume from './Resume.pdf'
import {themeContext} from '../../Context'
import { useContext } from "react";
import {motion} from 'framer-motion'

const Services = () => {
  const transition = {duration : 1, type : 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>

        {/*Left Side*/}
        <div className='awesome'>
          <span style={{color: darkMode? 'white':''}}>My Awesome</span>
          <span>Services</span>
          <span>Lorem ipsum</span>
          <a href={Resume} download>
            <button className='button s-button'>Download CV</button>
          </a>
          <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
        </div>

        {/* Right Side*/}
        <div className='cards'>

          {/*First Card*/}
          <motion.div 
          initial={{left: '25%'}} 
          whileInView={{left:'14rem'}}
          transition={transition}
          style={{left: '14rem'}}>
            <Card emoji={HeartEmoji} heading={'Design'} detail={'Figma, Sketch, Photoshop, Adobe, Adobe XD'}/>
          </motion.div>

          {/*Second Card*/}
          <motion.div 
          // initial={{top: '-4%', left: '74%'}} 
          // whileInView={{left:'68%'}}
          // transition={transition}
          style={{top: '12rem', left: '-4rem'}}>
            <Card emoji={Glasses} heading={'Developer'} detail={'HTML, CSS, JavaScript, React'}/>
          </motion.div>

          {/*Third Card*/}
          <motion.div 
          // initial={{top: '-4%', left: '74%'}} 
          // whileInView={{left:'68%'}}
          // transition={transition}
          style={{top: '19rem', left: '12rem'}}>
            <Card emoji={Humble} heading={'UI/UX'} detail={'Lorem Ipsum'}/>
          </motion.div>

          <div className='blur s-blur2' style={{background: 'var(--purple)'}}>

          </div>
        </div>
    </div>
  )
}

export default Services