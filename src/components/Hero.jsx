import React from "react";
import "./hero.scss";
import tablokep from "../assets/tablokep.png";
import {motion} from 'framer-motion'


const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
        
        }
    },
   
}

export const Hero = () => {
  return (
    <div className="hero">
      
      <motion.div className="holder" variants={textVariants} initial={'initial'} animate={'animate'}>
        <div className="text-container" >
          <h2>M.Kátay</h2>
          <h1>Be the Creator and Explorer of the Web World!</h1>
        </div>
        <div className="buttons" >
          <button><a href="#Portfolio">Projects</a></button>
          <button><a href="#Contact">Contact Me</a></button>
         </div>
      </motion.div>
      
      <motion.div className="img-container" initial={{opacity:0}} animate={{opacity:1,transition:{duration:2}}}>
        <img src={tablokep} alt="tablokep" />    
      </motion.div> 
      <div className="back-text">Teacher</div>
    </div>
  );
};
