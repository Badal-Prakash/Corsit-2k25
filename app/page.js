"use client";
import { useState } from "react";
import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <main className="relative h-screen w-screen bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Spline
          scene="https://prod.spline.design/YAAk9LeqPb2XZqt1/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 space-y-6">
        <h1 className="text-yellow-400 md:text-6xl sm:text-5xl text-4xl font-extrabold leading-tight">
          CORSIT
        </h1>
        <h2 className="text-white md:text-5xl sm:text-4xl text-3xl font-semibold">
          Learn With Us
          <br />
        </h2>
        <p className="text-gray-400 md:text-lg text-sm max-w-xl leading-relaxed">
          The Robotics Club at SIT is a group passionate about robotics. We come
          together to learn, build, and enjoy working on robot projects.
        </p>
      </div>

      <div className="absolute bottom-6 left-0 w-full flex justify-center text-gray-400 z-20">
        <ul className="flex space-x-6 text-center">
          <Link href="/" onClick={() => handleTabClick("Home")}>
            <li
              className={`cursor-pointer ${
                activeTab === "Home" ? "text-white" : "hover:text-white"
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/about" onClick={() => handleTabClick("About")}>
            <li
              className={`cursor-pointer ${
                activeTab === "About" ? "text-white" : "hover:text-white"
              }`}
            >
              About
            </li>
          </Link>
          <Link href="/projects" onClick={() => handleTabClick("Projects")}>
            <li
              className={`cursor-pointer ${
                activeTab === "Projects" ? "text-white" : "hover:text-white"
              }`}
            >
              Projects
            </li>
          </Link>
          <Link href="/team" onClick={() => handleTabClick("OurTeam")}>
            <li
              className={`cursor-pointer ${
                activeTab === "OurTeam" ? "text-white" : "hover:text-white"
              }`}
            >
              Team
            </li>
          </Link>
          <Link href="/contact" onClick={() => handleTabClick("Contact")}>
            <li
              className={`cursor-pointer ${
                activeTab === "Contact" ? "text-white" : "hover:text-white"
              }`}
            >
              Contact
            </li>
          </Link>
          <Link href="/alumni" onClick={() => handleTabClick("Alumni")}>
            <li
              className={`cursor-pointer ${
                activeTab === "Alumni" ? "text-white" : "hover:text-white"
              }`}
            >
              Alumni
            </li>
          </Link>
        </ul>
      </div>
    </main>
  );
}
