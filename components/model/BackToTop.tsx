"use client";

import { useState, useEffect } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#FF6B00] hover:bg-[#ff6a00e7] text-white p-3 rounded-full shadow-lg transition duration-300"
        aria-label="Retour en haut"
      >
        <MdOutlineArrowBackIos className="rotate-90 " />
      </button>
    )
  );
};

export default BackToTop;
