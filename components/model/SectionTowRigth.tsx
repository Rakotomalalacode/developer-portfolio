"use client";

import { motion } from "motion/react";
import Image from "next/image";
import ImagePresented from '@/public/images/profilt.png';

const SectionTowRigth = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 mt-6 lg:mt-0"

        >
            <div className="bg-[#27272a] z-40 border-[0.5px] border-[#facc15]/15 text-white rounded-lg w-fit font-mono mt-10 lg:mt-0">
                <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-green-500 to-transparent" />
                    </div>
                </div>
                <div className="p-4 border-b-[0.5px] border-[#facc15]/15 flex gap-3">
                    <div className="w-4 flex h-4 bg-red-500 rounded-full"></div>
                    <div className="w-4 flex h-4 bg-[#facc15] rounded-full"></div>
                    <div className="w-4 flex h-4 bg-green-500 rounded-full"></div>
                </div>
                <div className="w-fit p-6">
                    <Image
                        src={ImagePresented}
                        alt={"ImagePresented"}
                        width={500}
                        height={500}
                        className=" w-[300px] h-[300px] object-cover rounded-md"
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default SectionTowRigth