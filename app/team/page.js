"use client";
import { TeamContext } from "@/context/TeamContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
export default function Team() {
  const { filteredPeople } = useContext(TeamContext);

  return (
    <div className="bg-gray-900 text-white py-24 sm:py-32 px-6 sm:px-8 lg:px-16">
      <div className="pt-4 mx-auto grid max-w-7xl gap-x-8 gap-y-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            "The passionate minds behind our innovative solutions."
          </p>
        </div>
        {filteredPeople && filteredPeople.length > 0 ? (
          <ul
            role="list"
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8"
          >
            {filteredPeople.map((person, i) => {
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 150,
                    damping: 25,
                  }}
                  className="bg-slate-800 rounded-lg shadow-md p-4 w-full max-w-[280px] mx-auto flex flex-col items-center text-center gap-y-3"
                >
                  <Image
                    className="h-20 w-20 rounded-full"
                    src={person.image}
                    alt={person.name}
                    width={80}
                    height={80}
                  />
                  <h3 className="text-lg font-semibold leading-6 text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {person.role === "Member" ? person.year : person.role}
                  </p>
                  <Link
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
                  >
                    <FaLinkedinIn className="text-white mr-2" />
                    LinkedIn
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        ) : (
          <p className="text-white mt-4">No team members to display.</p>
        )}
      </div>
    </div>
  );
}
