/** @format */

import React from "react";
import { FiTwitter, FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi";
import Circle from "./Circle";
import classes from "./css/head.module.css";

const Contact = () => {
  return (
    <div id="contact" className="overflow-y-hidden text-white relative">
      <div className="opacity-20 absolute -bottom-44  right-12">
        <Circle />
      </div>
      <div
        className={`${classes.head}  font-Comfortaa text-6xl flex tracking-wider justify-center lg:justify-end  lg:text-8xl lg:mr-80`}
      >
        CONTACT
      </div>
      <div className="lg:ml-28 ml-10 mt-20">
        <div className=" text-xl font-bold text-yellow-100">mail me at</div>
        <div className="text-xl lg:text-4xl font-Comfortaa">
          mehta.jain@northeastern.edu
        </div>
        <div className="mt-12 text-xl font-bold text-yellow-100">
          or drop a DM on
        </div>
        <div className="flex my-8">
          {/* <a href='https://www.instagram.com/anshgupta610/' target='_blank' rel='noreferrer'>
            <FiInstagram className='mr-10' size={45} />
          </a> */}
          <a
            href="https://www.linkedin.com/in/jainam-mehta-2a1b68187/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className="mr-10" size={45} />
          </a>
        </div>
        <div className="text-xl font-bold text-yellow-100">
          and follow my work on
        </div>
        <div>
          <a
            href="https://github.com/jainam240101"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub className="mt-10" size={45} />
          </a>
        </div>
      </div>
      <div className="mt-44 text-black font-bold bg-yellow-100 h-16 flex justify-center items-center">
        Copyright 2021. Jainam Mehta. All Rights Reserved
      </div>
    </div>
  );
};

export default Contact;
