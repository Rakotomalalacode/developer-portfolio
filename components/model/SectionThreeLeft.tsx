"use client"

import { Terminal } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { motion } from "motion/react"

const Competences = [
    {
        name: "Frontend Development",
        description: "Création d'interfaces utilisateur modernes et responsives"
    },
    {
        name: "Backend Development",
        description: "Développement d'APIs et de services robustes"
    },
    {
        name: "Mobile Development",
        description: "Applications mobiles cross-platform"
    },
]

const SectionThreeLeft = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid  grid-cols-1 w-full lg:mt-9 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        >
            {Competences.map((items) => (
                <div
                    key={items.name} className="z-40">
                    <div
                        className="bg-[#27272a]  border-[0.5px] border-[#facc15]/15 text-white rounded-lg min-h-48 font-mono mt-10 lg:mt-0"
                    >
                        <div>
                            <div className="flex flex-row-reverse p-4 border-b-[0.5px] border-[#facc15]/15 justify-between items-center">
                                <Terminal className="h-4 w-4" />
                                <div className=" flex gap-3">
                                    <div className="w-4 flex h-4 bg-red-500 rounded-full"></div>
                                    <div className="w-4 flex h-4 bg-[#facc15] rounded-full"></div>
                                    <div className="w-4 flex h-4 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-green-500 lg:flex gap-2"><span className="text-blue-400">$</span> <span>cd</span> ~/Documents/r-code-main <span>&&</span> <span>ls</span> <span>-l</span></p>
                                <AlertTitle>{items.name}</AlertTitle>
                                <AlertDescription>
                                    {items.description}
                                </AlertDescription>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    )
}

export default SectionThreeLeft