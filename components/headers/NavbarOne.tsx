"use client";

import Link from "next/link";
import { Code, FolderGit, House, Mail, UserRound } from "lucide-react";
import { motion } from 'motion/react';

interface menu {
  icon: any;
  link: string;
}

const menu: menu[] = [
  {
    icon: <House />,
    link: "/",
  },
  {
    icon: <UserRound />,
    link: "#apropos",
  },
  {
    icon: <Code />,
    link: "#competence",
  },
  {
    icon: <FolderGit />,
    link: "#projets-top",
  },
  {
    icon: <Mail />,
    link: "#me-contacter",
  },
];

const NavbarOne = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    
    className="lg:w-[50%] m-auto w-[90%]">
      <div className=" px-6 py-4 border-b-[0.5px] border-x-[0.5px] border-[#facc15]/15 flex backdrop-blur-lg rounded-b-lg justify-between w-full ">
        {menu.map((item, index) => (
          <Link className="hover:text-blue-400" href={item.link} key={index}>
            {item.icon}
          </Link>
        ))}
      </div>
      <div className="flex -translate-y-[1px] justify-center">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-green-500 to-transparent" />
        </div>
      </div>
    </motion.div>
  )
};

export default NavbarOne;
