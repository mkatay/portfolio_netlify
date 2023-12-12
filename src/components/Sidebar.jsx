import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import "./sidebar.scss";
import { motion } from "framer-motion";

const menu = ["Home", "About", "Portfolio","Contact"];

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const sidebarVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness:100,
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
    },
  };
  
  return (
    <div
      className="sidebar"
    
    >
      <button onClick={() => setOpen((prev) => !prev)} >
        {open ? <IoClose className="close" /> : <GiHamburgerMenu />}
      </button>
      {open && (
        <motion.div className="bg"
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={sidebarVariants}
        >
          {menu.map((name) => (
            <motion.a
              key={name}
              href={`#${name}`}
              onClick={() => setOpen((prev) => !prev)}
              whileHover={{borderLeft:'2px dotted gray'}}
            >
              {name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </div>
  );
};
