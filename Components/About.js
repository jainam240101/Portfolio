/** @format */

import React from "react";
import Image from "next/image";
import classes from "./css/head.module.css";
import Circle from "./Circle";

const About = () => {
  return (
    <div
      id="about"
      className="relative lg:px-28 lg:mt-56 flex flex-col lg:flex-row text-white"
    >
      <div className="absolute -right-32 bottom-52 opacity-20">
        <Circle />
      </div>
      <div className="invisible lg:visible font-Comfortaa text-8xl mr-16">
        <span className={classes.head}>A</span>
        <br />
        <span className={classes.head}>B</span>
        <br />
        <span className={classes.head}>O</span>
        <br />
        <span className={classes.head}>U</span>
        <br />
        <span className={classes.head}>T</span>
      </div>
      <div
        className={`${classes.head} flex justify-center lg:hidden -mb-36 -mt-96 font-Comfortaa text-6xl lg:text-8xl lg:mr-16`}
      >
        ABOUT
      </div>
      <Image
        width={"980px"}
        height={"350px"}
        className="invisible lg:visible mx-20 w-36 h-36 rounded-lg"
        alt="userImage"
        src={"/Photo.jpeg"}
      />
      <Image
        width={"80px"}
        height={"400px"}
        className="visible px-16 lg:invisible mx-20 rounded-lg"
        alt="userImage"
        src={"/Photo.jpeg"}
      />
      <div className="px-4 lg:px-0 mt-4 lg:mt-0 lg:pl-12 font-sans ">
        Hey! I am a graduate student at Northeastern University majoring in
        Software Engineering Systems. I am a passionate engineer who likes
        working on products that creates a difference in one's life. I would
        like to work on roles that involve designing large-scale distributed
        systems. I am well-versed in GoLang, NodeJS, Docker, and databases such
        as SQL and NoSQL. My primary objective during my master's degree is to
        learn more about Distributed Systems, Cloud Computing, and creating
        Infrastructures with technologies like Kubernetes and Terraform.
      </div>
    </div>
  );
};

export default About;
2;
