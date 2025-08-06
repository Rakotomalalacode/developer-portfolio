"use client";

import { motion } from "motion/react";
import { ScrollArea } from "@/components/ui/scroll-area"
import Skills from "@/constant/skill";

const SectionThreeHybrid = () => {
    return (
        <ScrollArea className="h-[162.5px] rounded-md border p-4">
        <div className="flex flex-wrap gap-5 justify-center">
              {Skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-5 rounded-lg shadow size-32 flex flex-col items-center gap-4"
                >
                  <div><img className='w-12 rounded-md' src={skill.logo} alt="" /></div>
                 <div className='w-full'>
                    <p className="text-center">{skill.name}</p>
                 </div>
                </motion.div>
              ))}
            </div>
            </ScrollArea>
    )
}

export default SectionThreeHybrid