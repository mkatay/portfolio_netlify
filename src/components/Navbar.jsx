import React from 'react'
import './navbar.scss'

import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {motion} from 'framer-motion'
import { Sidebar } from './Sidebar';

export const Navbar = () => {

  return (
    <div className='navbar'>
        <div >
            <Sidebar/>
        </div>
        <div className="logo-holder">
           <motion.span
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}
           >MyLogo</motion.span> 
        </div>
        <div className="social">
            <span><a href="#"><FaFacebookF/></a></span>
            <span><a href="#"><FaGithub/></a></span>
            <span><a href="#"><FaInstagram/></a></span>
        </div>

    </div>
  )
}
