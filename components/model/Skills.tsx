"use client";


import Skills from "@/constant/skill";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from 'motion/react';

const SkillSections = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}

      id="skills" className="relative z-30 border-t-0 mt-7  border-yellow-500">
      {/* <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div> */}

      {/* <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent  w-full" />
        </div>
      </div> */}

      {/* <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-yellow-500"></span>
          <span className="bg-yellow-500 shadow-[0_4px_20px_rgba(255,191,0,0.6)] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-yellow-500"></span>
        </div>
      </div> */}

      <div className="w-full">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {Skills.map((skill, id) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-blue-500/15 bg-[#27272a] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-green-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="h-[40px] w-[40px]"
                    />


                  </div>
                  <p className="text-white text-sm sm:text-lg">
                    {skill.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </motion.div>
  );
};

export default SkillSections;