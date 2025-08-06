"use client"

import Image from "next/image";
import Link from "next/link";
import projects from "@/constant/Project";
import { motion } from "motion/react";
import { CodeXml, SquareArrowOutUpRight } from "lucide-react";

const SectionFour = () => {

    const lastProjects = projects.slice(-3).reverse();

    return (
        <div className="container relative mx-auto pb-10">
            <svg className="absolute -skew-x-12 z-0 inset-y-0.5 -left-44 size-full  stroke-white/20 stroke-[2] [mask-image:radial-gradient(white,transparent_70%)]"><defs><pattern id="«r2»" viewBox="0 0 64 64" width="52" height="52" patternUnits="userSpaceOnUse" x="0" y="0"><path d="M64 0H0V64" fill="none"></path></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#«r2»)"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="469" y="469"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="209" y="417"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="105" y="157"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="365" y="157"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="261" y="209"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="1" y="261"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="313" y="261"></rect></svg>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className=" lg:flex justify-between mb-8 lg:mb-0">
                <h1 className="lg:text-4xl font-bold font-Major mb-8 text-center text-3xl lg:text-left"><span className="text-myorange">M</span>es <span className="text-myorange">P</span>rojets</h1>
                <div className="flex justify-center lg:justify-start">
                    <Link
                        href="/project"
                        // className="bg-[#FF6B00] px-6 h-11 py-3 text-white"
                        className="bg-yellow-500 cursor-pointer h-fit z-10 text-black text-sm font-semibold px-6 py-3 rounded-lg shadow-[0_4px_20px_rgba(255,191,0,0.6)]"
                    >
                        Tous mes projets
                    </Link>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="grid md:grid-cols-3 gap-8">
                {lastProjects.map((project, index) => (
                    <div
                        key={index}
                        // className="bg-gray-800 rounded shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
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
        </div >
    );
};

export default SectionFour;
