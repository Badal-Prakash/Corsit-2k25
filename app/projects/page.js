"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import LFR from "@/public/image/img/bots/LFR.jpg";
import Gesture from "/public/image/img/bots/gesture.png";
import Obstacle from "/public/image/img/bots/obstacle.png";
import blue from "/public/image/img/bots/blue.jpg";
import augmented from "/public/image/img/bots/augmented.jpg";
import soccer from "/public/image/img/bots/soccer.jpeg";
import RFID from "/public/image/img/bots/RFID.png";

// ProjectCard component for handling each project display
const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the item is in the viewport
  });

  return (
    <motion.div
      ref={ref}
      className="p-4 md:w-1/3 sm:mb-0 mb-6"
      initial={{ opacity: 0, y: 50 }} // Start from the bottom
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 50, // Move upwards
      }}
      transition={{
        duration: 0.8, // Slow down the animation
        type: "spring",
        stiffness: 100,
        damping: 25,
        delay: 0.2 * index, // Stagger animation delay
      }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="rounded-lg h-64 overflow-hidden">
        <Image
          alt="content"
          className="object-cover object-center h-full w-full"
          src={project.img}
        />
      </div>
      <h2 className="text-xl font-medium title-font bg-white text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text uppercase mt-5">
        {project.title}
      </h2>
      <p className="text-base leading-relaxed mt-2">{project.description}</p>
    </motion.div>
  );
};

function Projects() {
  const projects = [
    {
      img: LFR,
      title: "Line Following Robot",
      description:
        "A Line Follower Robot is a fundamental type of robot that is programmed to follow a designated path marked by a line with a specific width, utilizing sensors and algorithms for accurate tracking and navigation.",
    },
    {
      img: Gesture,
      title: "Gesture Controlled Bot",
      description:
        "A gesture-controlled robot is a type of robot that can be controlled by hand gestures, allowing for intuitive and hands-free operation without the need for physical buttons or external devices.",
    },
    {
      img: Obstacle,
      title: "Obstacle Avoiding Bot",
      description:
        "An Obstacle Avoiding Robot is a type of autonomous mobile robot that is equipped with sensors and algorithms enabling it to navigate its environment while actively avoiding collisions with unexpected obstacles.",
    },
    {
      img: blue,
      title: "Bluetooth Bot",
      description:
        "A Bluetooth-controlled robot is a type of robot that is operated by an Android mobile phone, utilizing wireless Bluetooth communication for remote control and command input.",
    },
    {
      img: augmented,
      title: "Augmented Reality",
      description:
        "Augmented reality refers to an enhanced depiction of the physical world that combines digital visual elements, sounds, or other sensory stimuli, delivered through technology to provide an enriched and interactive experience.",
    },
    {
      img: soccer,
      title: "Robo Soccer Bot",
      description:
        "A Robot Soccer BOT is a specialized robot designed to compete in an arena specifically tailored for robotic soccer matches, showcasing their abilities in the field of robotic sports.",
    },
    {
      img: RFID,
      title: "RFID Attendance System",
      description:
        "The RFID attendance system utilizes wireless identification to track and record the presence of stakeholders as they come within the radiofrequency range of the RFID attendance reader.",
    },
  ];

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <motion.div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <motion.h1
                className="sm:w-2/5  bg-white text-transparent
                bg-gradient-to-r
                 from-violet-600
                 to-indigo-600
                 bg-clip-text uppercase font-large title-font text-5xl mb-2 sm:mb-0"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Bots & Projects
              </motion.h1>
              <motion.p
                className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                Group projects cultivate synergy by harnessing diverse skills,
                fostering innovation, and enhancing efficiency. Through
                collaboration, individuals contribute expertise towards shared
                goals, yielding impactful outcomes. A collective vision guides
                the endeavor, ensuring cohesion and alignment, leading to the
                realization of ambitious objectives with greater effectiveness.
              </motion.p>
            </motion.div>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
