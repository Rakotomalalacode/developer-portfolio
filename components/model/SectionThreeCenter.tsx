"use client"

import { motion } from "motion/react"
import SectionThreeHybrid from "./SectionThreeHybrid"

const SectionThreeCenter = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-3/5 mt-6 lg:mt-0 flex flex-col gap-4">
            <p className="text-lg text-gray-600 ">
                Je suis un développeur passionné par la création d'applications web modernes
                et performantes. J'aime résoudre des problèmes complexes et apprendre
                de nouvelles technologies.
            </p>
            <SectionThreeHybrid />
        </motion.div>
    )
}

export default SectionThreeCenter