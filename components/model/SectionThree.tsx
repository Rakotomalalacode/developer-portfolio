"use client"

import { motion } from "motion/react"
import SectionThreeCenter from "./SectionThreeCenter"
import SectionThreeLeft from "./SectionThreeLeft"
import SkillSections from "./Skills"

const SectionThree = () => {
    return (
        <div className="relative">
             <svg className="absolute skew-x-12 z-0 -inset-y-0.5 -left-44 size-full  stroke-white/20 stroke-[2] [mask-image:radial-gradient(white,transparent_70%)]"><defs><pattern id="«r2»" viewBox="0 0 64 64" width="52" height="52" patternUnits="userSpaceOnUse" x="0" y="0"><path d="M64 0H0V64" fill="none"></path></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#«r2»)"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="469" y="469"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="209" y="417"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="105" y="157"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="365" y="157"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="261" y="209"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="1" y="261"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="313" y="261"></rect></svg>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}>
                <h1 className="lg:text-4xl  text-3xl font-bold text-center lg:text-left font-Major mb-1"> <span className="text-myorange">M</span>es compétences</h1>
            </motion.div >
            <SectionThreeLeft />
            <SkillSections />
     
        </div>

    )
}

export default SectionThree