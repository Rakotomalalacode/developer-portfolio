"use client";

interface Coder {
    name: string;
    skills: string[];
    hardWorker: boolean;
    quickLearner: boolean;
    problemSolver: boolean;
    hireable: () => boolean;
}

const coder: Coder = {
    name: "Rakotomalal Hery Niaina Tahina",
    skills: ["React", "NextJS", "TypeScript", "NodeJS", "TailwindCSS", "Laravel", "Djnago", "MySql", "MongoDB", "PostgreSQL"],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function () {
        return this.hardWorker && this.problemSolver && this.skills.length >= 5;
    },
};
import { motion } from "motion/react"
const SectionOneRigth = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-[#27272a] z-10 border-[0.5px] border-[#facc15]/15 text-white rounded-lg max-w-xl font-mono mt-10 lg:mt-0"
        >
            <div className="p-4 border-b-[0.5px] border-[#facc15]/15 flex gap-3">
                <div className="w-4 flex h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 flex h-4 bg-[#facc15] rounded-full"></div>
                <div className="w-4 flex h-4 bg-green-500 rounded-full"></div>
            </div>

            <div className="w-full p-6">
                <p><span className="text-pink-500">const</span> <span className="text-white">coder</span> = {'{'}</p>
                <div className="ml-4">
                    <p><span className="text-white">name</span>: <span className="text-yellow-400">' {coder.name} '</span>,</p>
                    <p><span className="text-white">skills</span>: [
                        {coder.skills.map((skill, i) => (
                            <span key={i} className="text-green-400">
                                {` ' ${skill} ' ${i < coder.skills.length - 1 ? ' , ' : ''} `}
                            </span>
                        ))}],
                    </p>
                    <p><span className="text-white">hardWorker</span>: <span className="text-orange-400">{String(coder.hardWorker)}</span>,</p>
                    <p><span className="text-white">quickLearner</span>: <span className="text-orange-400">{String(coder.quickLearner)}</span>,</p>
                    <p><span className="text-white">problemSolver</span>: <span className="text-orange-400">{String(coder.problemSolver)}</span>,</p>
                    <p><span className="text-green-500">hireable</span>: <span className="text-pink-500">function</span>() {'{'}</p>
                    <div className="ml-4">
                        <p><span className="text-pink-500">return</span> (</p>
                        <div className="ml-4">
                            <p><span className="text-blue-400">this</span>.hardWorker &&</p>
                            <p><span className="text-blue-400">this</span>.problemSolver &&</p>
                            <p><span className="text-blue-400">this</span>.skills.length &gt;= <span className="text-yellow-400">5</span></p>
                        </div>
                        <p>);</p>
                    </div>
                    <p>{'}'},</p>
                </div>
                <p>{'}'};</p>

            </div>
        </motion.div>
    )
}

export default SectionOneRigth