"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

const SectionFive = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope size={35} />,
      title: 'Email',
      value: 'tahina615@gmail.com',
      link: 'mailto:tahina615@gmail.com'
    },
    {
      icon: <FaPhone size={35} />,
      title: 'Téléphone',
      value: '+261 34 07 513 90',
      link: 'tel:+261 34 07 513 90'
    },
    {
      icon: <FaMapMarkerAlt size={35} />,
      title: 'Adresse',
      value: 'Madagascar',
      link: 'https://maps.app.goo.gl/ERLqrdubZrcjtmn99'
    },
    {
      icon: <FaSquareWhatsapp size={35} />,
      title: 'Whatsapp',
      value: 'Rakotomalala Tahina',
      link: 'https://maps.google.com'
    }
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}

    >
      <h1 className="lg:text-4xl font-bold font-Major mb-8 text-3xl lg:text-left"><span className="text-myorange">M</span>es coordonnées</h1>
      <div className="grid md:grid-cols-4 gap-10">
        {contactInfo.map((items) => (
          <Link
            key={items.title}
            href={items.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-6 items-center"
          >
            <div className="text-myorange">{items.icon}</div>
            <div>
              <h1 className="font-Major">{items.title}</h1>
              <p className="text-sm text-myorange">{items.value}</p>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export default SectionFive