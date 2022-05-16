import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../exports';
import './Hero.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const Hero = () => {
  return (
    <div className='app-header app-flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app-header-info'
      >
        <div className='app-header-badge'>
          <div className='app-flex'>
            <div>
              <p className='p-text'>Chris</p>
              <h1 className='head-text'>FRONTEND DEVELOPER</h1>
              <p className='p-text'>Web Developer</p>
              <p className='p-text'>Junior</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2.5, delayChildren: 0.5 }}
        className='app-header-img'
      >
        <img src={images.hero} alt='profile_bg' />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app-header-circles'
      >
        <div className='app-flex'>
          <p>CONTACT</p>
        </div>
        <div className='app-flex'>
          <p>PROJECTS</p>
        </div>
        <div className='app-flex'>
          <p>SKILLS</p>
        </div>
        w
      </motion.div>
    </div>
  );
};

export default Hero;
