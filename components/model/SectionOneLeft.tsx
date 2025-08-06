"use client";

import Link from "next/link"
import { Button } from "../ui/button"
import { motion } from "motion/react"
import { FiDownload } from "react-icons/fi";

const SectionOneLeft = () => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="z-40">
        <div className='flex  flex-col items-start gap-4'>
            <h1 className="lg:text-6xl  text-5xl font-medium font-Major mb-6 leading-tight">
                <span className="text-yellow-500">B</span>ienvenue <br /> sur mon <br /> <span className="text-yellow-500 ">P</span>ortfolio
            </h1>
        </div>
        <div className=" mb-8 max-w-2xl mx-auto flex flex-col gap-4 lg:mx-0">
            <div className="text-4xl text-white md:flex gap-2">Salut, moi c'est <h1 className=" text-green-500 font-Montserrat"><span className="font-Major">R</span>.Tahina</h1></div>
            <p>Développeur passionné par la création  d'applications <br /> web modernes et innovantes.</p>
        </div>
        <div className="flex flex-col md:flex-row z-50 items-center gap-4 lg:gap-8">
            <div>

                <Link
                    href="/project"
                    className="bg-yellow-500 cursor-pointer z-10 text-black text-sm font-semibold px-6 py-3 rounded-lg shadow-[0_4px_20px_rgba(255,191,0,0.6)]"
                >
                    Voir mes projets
                </Link>

            </div>
            <div>
                <Button
                    variant={"myModelButtonTow"}
                >
                    <a
                        href="https://example.com/example.pdf"
                        download
                        className="flex items-center"
                    >
                        Mon CV<FiDownload className="ml-4  text-myorange" />
                    </a>
                </Button>
            </div>
        </div>
    </motion.div>
)

export default SectionOneLeft