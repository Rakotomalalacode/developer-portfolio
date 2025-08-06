"use client";

import { motion } from "motion/react"
import { Button } from "../ui/button"
import Link from "next/link";

const SectionTowLeft = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className=" lg:w-[90%] self-end">
            <h1 className="lg:text-4xl font-bold font-Major mb-8 text-center text-3xl lg:text-left"><span className="text-myorange">À</span> propos de moi</h1>
            <div className=" flex justify-between gap-6">
                <div className=" flex flex-col gap-6">
                    <p className="text-2xl">Je suis connu sous le nom de <span className="text-3xl">RAKOTOMALALA Hery Niaina Tahina</span>, mais vous pouvez également me nommer <span className="text-myorange">Tahina</span>.</p>
                    <p className="text-lg ">
                        Avec plusieurs années d'expéself-endrience dans le développement informatique, j'ai travaillé
                        sur divers projets qui m'ont permis d'acquérir une solide expertise technique.
                    </p>
                </div>
            </div>
            <div className="mt-5 flex justify-center lg:justify-start">
                <Link href={"#me-contacter"}>
                    <button
                        className="bg-yellow-500 cursor-pointer z-10 text-black text-sm font-semibold px-6 py-3 rounded-lg shadow-[0_4px_20px_rgba(255,191,0,0.6)]"
                    >
                        Contactez-moi
                    </button>
                </Link>
            </div>
        </motion.div>
    )
}

export default SectionTowLeft