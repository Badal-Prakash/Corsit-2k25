"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedinIn } from "react-icons/fa";
import ansa from "@/public/image/img/Alumini/Ansa.jpg";
import asra from "@/public/image/img/Alumini/Asra.png";
import gaurav from "@/public/image/img/Alumini/Gaurav Kumar.jpg";
import rahul from "@/public/image/img/Alumini/Rahul Kumar.jpg";
import rajeev from "@/public/image/img/Alumini/Rajeev Ranjan.jpg";
import rohan from "@/public/image/img/Alumini/RohanJadhav.jpg";
import shivu from "@/public/image/img/Alumini/Shivu P.jpg";
import amaan from "@/public/image/img/Alumini/amanaa.jpeg";
import anushant from "@/public/image/img/Alumini/anushant.jpg";
import keshav from "@/public/image/img/Alumini/keshav.jpg";
import kundan from "@/public/image/img/Alumini/kundan - K k.jpeg";
import meghraj from "@/public/image/img/Alumini/meghraj.jpeg";
import pradhan from "@/public/image/img/Alumini/pradhan.jpg";
import shaswat from "@/public/image/img/Alumini/shashwat.jpg";
import shristi from "@/public/image/img/Alumini/shrishti.jpeg";
import tanmay from "@/public/image/img/Alumini/Tanmay.jpg";
import shubham from "@/public/image/img/Alumini/shubham.png";
import vivek from "@/public/image/img/Alumini/vivekMoha.jpg";
import abhinav from "@/public/image/img/Alumini/abhinav.jpeg";
import pankaj from "@/public/image/img/Alumini/pankaj.jpeg";
import shaksham from "@/public/image/img/Alumini/shaksham.jpeg";
import manojna from "@/public/image/img/Alumini/manojna.jpeg";
import vivk from "@/public/image/img/Alumini/vivk.jpeg";
import prince from "@/public/image/img/Alumini/prince.jpeg";
import anurag from "@/public/image/img/Alumini/anurag.jpeg";
import nitish from "@/public/image/img/Alumini/nitish.jpeg";
import nalini from "@/public/image/img/Alumini/nalini.jpeg";
import krishnakant from "@/public/image/img/Alumini/raj.jpeg";
import ranjeet from "@/public/image/img/Alumini/Ranjeet.jpg";
import amit from "@/public/image/img/Alumini/amit.jpeg";
import ankit from "@/public/image/img/Alumini/Ankit Gourav.jpg";
import VM from "@/public/image/img/Alumini/Vishal.jpg";
import Sb from "@/public/image/img/Alumini/Sudhamshu.jpg";
import Harshitha from "@/public/image/img/Alumini/Harshitha.jpg";
import HarshKanth from "@/public/image/img/Alumini/HARSHKANT.jpeg";
import hrishi from "@/public/image/img/Alumini/Hrishikesh.jpg";
import amang from "@/public/image/img/Alumini/Aman.jpg";
import razee from "@/public/image/img/Alumini/Razee.jpg";
import utk from "@/public/image/img/Alumini/Utkarsh Sahay.jpg";
import shrutiB from "@/public/image/img/Alumini/Shruti.jpg";
import ks from "@/public/image/img/Alumini/Kshitiz Singh.jpg";
import aditiD from "@/public/image/img/Alumini/Aditi.jpg";
import sumanth from "@/public/image/img/Alumini/Sumanth Jain.jpg";
import adityRaj from "@/public/image/img/Alumini/ADITYA RAJ.jpg";
import AdithyaD from "@/public/image/img/Alumini/AdityaD.jpg";
import Ashish from "@/public/image/img/Alumini/Ashish.jpg";
import AyushmanSharma from "@/public/image/img/Alumini/AyushmanSharma.jpeg";
import Jeevitha from "@/public/image/img/Alumini/Jeevitha.jpg";
import Kunal from "@/public/image/img/Alumini/Kunal.jpg";
import ojas from "@/public/image/img/Alumini/ojas.jpg";
import Sameer from "@/public/image/img/Alumini/Sameer.jpg";
import TannisthaNandy from "@/public/image/img/Alumini/Tannistha Nandy .jpg";
import YashaswiniK_1 from "@/public/image/img/Alumini/YashaswiniK_1.jpg";
import Link from "next/link";

const people = [
  {
    name: "Ranjeet Kumar Chaurasiya",
    role: "Informatica SME at Kyndryl India",
    email: "",
    ima: ranjeet,
    git: "",
    linkedin: "https://www.linkedin.com/in/ranjeetchaurasiya",
  },
  {
    name: "Ankit Gourav",
    role: "Deep Learning Engineer at Blaize",
    email: "",
    ima: ankit,
    git: "",
    linkedin: "https://www.linkedin.com/in/ankit-gourav-b611b7192/",
  },

  {
    name: "Vivek Kumar",
    role: "Full-Stack devloper @ Airbus",
    email: "",
    ima: vivk,
    git: "",
    linkedin: "https://www.linkedin.com/in/vivek-kumar-877348105/",
  },
  {
    name: "Prince Kumar",
    role: "Senior Software Engineer @ Juniper Networks",
    email: "",
    ima: prince,
    git: "",
    linkedin: "https://www.linkedin.com/in/prince-kumar-45a19a10a/",
  },
  {
    name: "Anurag Shahwal",
    role: "Senior Manager at Morgan Stanley",
    email: "",
    ima: anurag,
    git: "",
    linkedin: "https://www.linkedin.com/in/anurag-shahwal/",
  },
  {
    name: "Nitish Kumar",
    role: "MDM Developer(Reltio)",
    email: "",
    ima: nitish,
    git: "",
    linkedin: "https://www.linkedin.com/in/nitish-kumar-49741a141/",
  },
  {
    name: "Nalini Singh",
    role: "Software Engineer 3 at Walmart",
    email: "",
    ima: nalini,
    git: "",
    linkedin: "https://www.linkedin.com/in/nalini-singh-82a97412b/",
  },
  {
    name: "Rajeev Ranjan",
    role: "Software Engineer at Nvidia",
    email: "Ranjan.rajeev1609@gmail.com",
    ima: rajeev,
    git: "",
    linkedin: "https://www.linkedin.com/in/rajeev-ranjan-426b241b0/",
  },
  {
    name: "Vivek Mohla",
    role: "Escalation engineer Microsoft ",
    email: "vivekmohla31@gmail.com",
    ima: vivek,
    git: "",
    linkedin: "https://www.linkedin.com/in/vivek-mohla-83a44115a",
  },
  {
    name: "Shubham Shekhar",
    role: "Lead Developer (AI, Fullstack)",
    email: "shubhamshekhar576@gmail.com",
    ima: shubham,
    git: "https://github.com/Shubham567",
    linkedin: "https://www.linkedin.com/in/shekhar567/",
  },
  {
    name: "Gaurav Kumar",
    role: "Manager - Advance Automation and Robotics",
    email: "gaurav.1si11ee016@gmail.com",
    ima: gaurav,
    git: "",
    linkedin: "https://www.linkedin.com/in/gaurav-kumar-60277b9a",
  },
  {
    name: "Rahul Kumar",
    role: "Alumni",
    email: "rahul.1si15ee029@gmail.com",
    ima: rahul,
    git: "",
    linkedin: "https://www.linkedin.com/in/rahul-kr96",
  },

  {
    name: "Rohan Jadhav",
    role: "Software developer ",
    email: "jadhavrohan534@gmail.com",
    ima: rohan,
    git: "",
    linkedin: "https://www.linkedin.com/in/rohan-jadhav-717385186",
  },

  {
    name: "Pradhan V",
    role: "Technical specialist ",
    email: "pradhan772@gmail.com",
    ima: pradhan,
    git: "",
    linkedin: "https://www.linkedin.com/in/pradhan4v",
  },

  {
    name: "KESHAV KUMAR MISHRA",
    role: "Commercial Pilot",
    email: "kkm01.1998@gmail.com",
    ima: keshav,
    git: "",
    linkedin: "https://www.linkedin.com/in/kkmhere",
  },

  {
    name: "Pankaj M Thakur",
    role: "Network Consulting Engineer - II at Cisco",
    email: "",
    ima: pankaj,
    git: "",
    linkedin: "https://www.linkedin.com/in/pankajthakur62/",
  },
  {
    name: "Abhinav Kumar",
    role: "Full Stack Developer @Speridian Technologies",
    email: "",
    ima: abhinav,
    git: "",
    linkedin: "https://www.linkedin.com/in/abhinav-kumar-804473196/",
  },
  {
    name: "Amit Anand",
    role: "System Engineer at Mahindra Group",
    email: "",
    ima: amit,
    git: "",
    linkedin: "https://www.linkedin.com/in/amitanand509/",
  },
  {
    name: "Krishnkant Jaiswal",
    role: "SDE-1 At Pick Your Trail",
    email: "",
    ima: krishnakant,
    git: "",
    linkedin: "https://www.linkedin.com/in/krishnkant-jaiswal-04578214a/",
  },
  {
    name: "Kundan Kumar",
    role: "Alumni, UPSC Civil Services",
    email: "kundan.bvm@gmail.com",
    ima: kundan,
    git: "kundank123",
    linkedin: "https://www.linkedin.com/in/kundan-kumar-78a6a0145",
  },

  {
    name: "Shaksham Sinha",
    role: "SDE 1 @ yellow.ai",
    email: "",
    ima: shaksham,
    git: "",
    linkedin: "https://www.linkedin.com/in/shaksham-sinha-788a19190/",
  },
  {
    name: "Manojna Rao",
    role: "Associate Engineer @ L&T Technology Services Limited",
    email: "",
    ima: manojna,
    git: "",
    linkedin: "https://www.linkedin.com/in/manojna-rao-002892141/",
  },
  {
    name: "Anushant Bhushan",
    role: "Full Stack Engineer",
    email: "anushant.2k16@gmail.com",
    ima: anushant,
    git: "",
    linkedin: "https://www.linkedin.com/in/anushant-bhushan-354bb4184",
  },
  {
    name: "Amaan Zia",
    role: "Test Solutions Engineer at Micron Technology ",
    email: "amaanzia1si17ec004@gmail.com",
    ima: amaan,
    git: "",
    linkedin: "",
  },
  {
    name: "Asra Sadik",
    role: "Alumni",
    email: "asramdsadik@gmail.com",
    ima: asra,
    git: "",
    linkedin: "https://www.linkedin.com/in/asrasadik/",
  },
  {
    name: "Shivaneeth P",
    role: "Associate software developer",
    email: "shivu61133@gmail.com",
    ima: shivu,
    git: "",
    linkedin: "",
  },
  {
    name: "Shashwat Shrivastava",
    role: "Decision Analytics Associate at ZS Associates",
    email: "shashwat.shrivastava21@gmail.com",
    ima: shaswat,
    git: "",
    linkedin:
      "https://www.linkedin.com/mwlite/in/shashwat-shrivastava-6a49021a8",
  },
  {
    name: "Srishti Gupta",
    role: " IAM Analyst @vmware",
    email: "2362001srishti@gmail.com",
    ima: shristi,
    git: "",
    linkedin: "https://www.linkedin.com/in/srishti-gupta-02b6b71b3",
  },
  {
    name: "Megharaj Goudar",
    role: "Junior Manager (JSW Steel)",
    email: "megharajgoudar1999@gmail.com",
    ima: meghraj,
    git: "",
    linkedin: "https://www.linkedin.com/in/megharaj-goudar-8b5232193",
  },
  {
    name: "Ansa S Mathew",
    role: " DC Analyst in Deloitte USI ",
    email: "ansasmathew@gmail.com",
    ima: ansa,
    git: "",
    linkedin: "https://www.linkedin.com/in/ansa-s-mathew/",
  },
  {
    name: "Tanmay M",
    role: " Software developer",
    email: "tanmaym2k@gmail.com",
    ima: tanmay,
    git: "",
    linkedin: "https://www.linkedin.com/in/tanmaytan",
  },
  {
    name: "Vishal Mishra",
    linkedin: "https://www.linkedin.com/in/vishal-kumar-575724206",
    ima: VM,
    role: "Enterprise Software Engineer at Wolters Kluwer",
  },
  {
    id: 2,
    name: "Sudhamshu Bhatta S",
    linkedin: "https://www.linkedin.com/in/sudhamshu-bhat",
    ima: Sb,
    role: "Software Engineer at Tally Solutions",
  },
  {
    name: "Harshitha M",
    linkedin: "https://www.linkedin.com/company/corsit/",
    ima: Harshitha,
    role: "Assistant Development Engineer at Signify Innovation Labs",
  },
  {
    name: "Hrishikesh Pradhan",
    linkedin: "https://www.linkedin.com/company/corsit/",
    ima: hrishi,
    role: "Full Stack Developer at Siemens Healthineers",
  },
  {
    name: "Aman Gupta",
    linkedin: "https://www.linkedin.com/in/aman-gupta-b420751b2/",
    ima: amang,
    role: "GET at Mercedes Benz R&D",
  },
  {
    name: "Aditi Dubey",
    linkedin: "https://www.linkedin.com/in/aditi-dubey-0007",
    ima: aditiD,
    role: "Software Engineer at JP Morgan Chase & Co.",
  },
  {
    name: "Kshitiz Singh",
    linkedin: "https://www.linkedin.com/company/corsit/",
    ima: ks,
    role: "Alumni",
  },

  {
    name: "Aditya Raj",
    linkedin: "https://www.linkedin.com/company/corsit/",
    ima: adityRaj,
    role: "Software developer at RedBus",
  },
  {
    name: "Utkarsh Sahay",
    linkedin: "https://www.linkedin.com/in/utkarsh-sahay-84ab5a222",
    ima: utk,
    role: "Cloud Engineer at Aptean",
  },
  {
    name: "Razee Shrivastav",
    linkedin: "https://www.linkedin.com/in/razee-srivastav-90034b244",
    ima: razee,
    role: "Software Development Engineer at Amadeus Software Labs",
  },
  {
    name: "Harshkant",
    linkedin: "https://www.linkedin.com/company/corsit/",
    ima: HarshKanth,
    role: "Alumni",
  },
  {
    name: "Shruti Bharadwaj",
    linkedin: "https://www.linkedin.com/in/shruti-bhardwaj-266344220",
    ima: shrutiB,
    role: "Alumni",
  },
  {
    name: "Sumanth Jain",
    linkedin: "https://www.linkedin.com/in/sumanth-jain-v-b-9a3188218",
    ima: sumanth,
    role: "DevOps Engineer at Light & Wonder",
  },
  {
    name: "Ojas Sangra",
    linkedin: "https://www.linkedin.com/in/ojas-sangra05/",
    ima: ojas,
    role: "Oracle - Associate Applications Developer",
  },
  {
    name: "Ashish Mahanth",
    linkedin: "https://www.linkedin.com/in/ashish-mahanth-887b0721b/",
    ima: Ashish,
    role: "Microchip -Software Engineer 1",
  },
  {
    name: "Kunal",
    linkedin: "https://www.linkedin.com/in/kunal-chanda-104a63226/",
    ima: Kunal,
    role: "Oracle - Associate Engineer",
  },
  {
    name: "Sameer Kumar",
    linkedin: "https://www.linkedin.com/in/sameer-shetty-478481217/",
    ima: Sameer,
    role: "Contentstack - Associate Software Engineer",
  },
  {
    name: "Ayushman Sharma",
    linkedin: "https://www.linkedin.com/in/ayushmansrma/",
    ima: AyushmanSharma,
    role: "Delloite - Analyst",
  },
  {
    name: "Jeevitha",
    linkedin: "https://www.linkedin.com/in/jeevitha-k-a-744405229/",
    ima: Jeevitha,
    role: "Oracle - Associate application developer",
  },
  {
    name: "Tannistha Nandy",
    linkedin: "https://www.linkedin.com/in/tannistha-nandy-568a8131a/",
    ima: TannisthaNandy,
    role: "Toshiba - Associate software engineer",
  },
  {
    name: "Yashaswini",
    linkedin: "https://www.linkedin.com/in/yashaswini-kodi-924258227/",
    ima: YashaswiniK_1,
    role: "Saks Cloud Services - Cloud Engineer",
  },
  {
    name: "Aditya Dubey",
    linkedin: "https://www.linkedin.com/in/aditya-dubey-611445331/",
    ima: AdithyaD,
    role: "Alumini",
  },
];
function AlumniPerson({ person }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <li ref={ref} className="flex items-center gap-x-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 50,
        }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-x-4"
      >
        <Image
          src={person.ima}
          alt={`${person.name}'s Profile Picture`}
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <h3 className="text-sm font-semibold leading-6">{person.name}</h3>
          <p className="text-sm leading-6 text-gray-300">{person.role}</p>
          <Link
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-blue-400 hover:text-blue-600"
          >
            <FaLinkedinIn className="inline-block mr-1" />
          </Link>
        </div>
      </motion.div>
    </li>
  );
}

export default function Alumni() {
  return (
    <div className="bg-slate-800 text-white py-24 sm:py-32">
      <div className="pt-4 mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet our Alumni
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            <em>Continuing the Legacy: Corsit Alumni Making their Mark!</em>
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person, i) => (
            <AlumniPerson key={i} person={person} />
          ))}
        </ul>
      </div>
    </div>
  );
}
