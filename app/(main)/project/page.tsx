"use client";

import { useState } from "react";
import SectionFive from "@/components/model/SectionFive";
import projects from "@/constant/Project";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { CodeXml, SquareArrowOutUpRight } from "lucide-react";

const categories = ["Tous", ...new Set(projects.flatMap((project) => project.category))];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) =>
    (selectedCategory === "Tous" || project.category.includes(selectedCategory)) &&
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container font-Montserrat mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}>
        <h1 className="lg:text-4xl font-bold font-Major mb-8 text-center text-3xl lg:text-left">
          <span className="text-myorange">M</span>es <span className="text-myorange">P</span>rojets
        </h1>
      </motion.div>

      <div className="lg:flex justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap justify-center mb-8 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded transition-all duration-300 text-gray-700 bg-gray-200 hover:bg-gray-300 ${selectedCategory === category ? "bg-green-500 text-white" : ""}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex xl:w-[395px] lg:w-[310px] justify-center mb-8">
          <input
            type="text"
            placeholder="Rechercher un projet..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded w-full max-w-md text-black"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-16 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-[#27272a] z-10 border-[0.5px] border-[#facc15]/15 text-white rounded-lg max-w-xl font-mono mt-10 lg:mt-0 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex -translate-y-[1px] justify-center">
              <div className="w-3/4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-green-500 to-transparent" />
              </div>
            </div>
            <div className="border-b-[0.5px] border-[#facc15]/15 p-4 flex justify-between">
              <div className="flex gap-3">
                <div className="w-4 flex h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 flex h-4 bg-[#facc15] rounded-full"></div>
                <div className="w-4 flex h-4 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex gap-3 items-center">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    <CodeXml />
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    <SquareArrowOutUpRight size={18} />
                  </Link>
                )}
              </div>
            </div>
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.description}</p>
              <div className="mt-3">
                {/* <h4 className="text-gray-300 text-sm">Technologies :</h4> */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-gray-700 text-white rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <div id="me-contacter">
        <SectionFive />
      </div>
    </div>
  );
};

export default Projects;
