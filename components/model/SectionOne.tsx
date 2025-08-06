"use client"

import React from "react";
import SectionOneLeft from "./SectionOneLeft";
import SectionOneRigth from "./SectionOneRigth";
import { useEffect, useRef } from "react";


const SectionOne: React.FC = () => {
  const maskRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const svg = maskRef.current;
      if (!svg) return;

      const rect = svg.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Appliquer le masque centré autour du curseur
      const maskStyle = `radial-gradient(120px at ${x}px ${y}px, white, transparent 70%)`;
      svg.style.maskImage = maskStyle;
      svg.style.webkitMaskImage = maskStyle;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // La position des rectangles
  const rects = [
    { x: 469, y: 469 },
    { x: 209, y: 417 },
    { x: 105, y: 157 },
    { x: 365, y: 157 },
    { x: 261, y: 209 },
    { x: 1, y: 261 },
    { x: 313, y: 261 },
  ];


  return (
    <div className="lg:flex relative items-center justify-between">
      <SectionOneLeft />
      {/* <div className="pointer-events-none  absolute inset-0 h-full w-full " style={{ opacity: 1 }}>
        <div className="pointer-events-none absolute top-0 left-0 z-40 h-screen w-screen" style={{ transform: "translateX(5.39415px)" }}>
          <div className="absolute top-0 left-0 w-[560px] h-[1380px]" style={{ transform: "translateY(-350px) rotate(-45deg)", background: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(250, 204, 21, 0.08) 0px, rgba(249, 115, 22, 0.02) 50%, rgba(234, 88, 12, 0) 80%)" }}></div>
          <div className="absolute top-0 left-0 origin-top-left  w-[240px] h-[1380px]" style={{ transform: "rotate(-45deg) translate(5%, -50%)", background: "radial-gradient(50% 50% at 50% 50%, rgba(250, 204, 21, 0.06) 0px, rgba(249, 115, 22, 0.02) 80%, transparent 100%)" }}></div>
          <div className="absolute top-0 left-0 origin-top-left w-[240px] h-[1380px]" style={{ transform: "rotate(-45deg) translate(-180%, -70%)", background: "radial-gradient(50% 50% at 50% 50%, rgba(250, 204, 21, 0.04) 0px, rgba(249, 115, 22, 0.02) 80%, transparent 100%)" }}></div>
        </div>
        <div className="pointer-events-none absolute top-0 right-0 z-40 h-screen w-screen" style={{ transform: "translateX(-5.39415px)" }}><div className="absolute top-0 right-0  w-[560px] h-[1380px]" style={{ transform: "translateY(-350px) rotate(45deg)", background: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(250, 204, 21, 0.08) 0px, rgba(249, 115, 22, 0.02) 50%, rgba(234, 88, 12, 0) 80%)" }}></div>
          <div className="absolute top-0 right-0 origin-top-right w-[240px] h-[1380px]" style={{ transform: "rotate(45deg) translate(-5%, -50%)", background: "radial-gradient(50% 50% at 50% 50%, rgba(250, 204, 21, 0.06) 0px, rgba(249, 115, 22, 0.02) 80%, transparent 100%)" }}></div>
          <div className="absolute top-0 right-0 origin-top-right w-[240px] h-[1380px]" style={{ transform: "rotate(45deg) translate(180%, -70%)", background: "radial-gradient(50% 50% at 50% 50%, rgba(250, 204, 21, 0.04) 0px, rgba(249, 115, 22, 0.02) 80%, transparent 100%)" }}></div>
        </div>
      </div> */}
      {/* <svg className="absolute skew-y-12 z-0 -inset-x-0.5 -top-8 size-full  stroke-white/20 stroke-[2] [mask-image:radial-gradient(white,transparent_70%)]"><defs><pattern id="«r2»" viewBox="0 0 64 64" width="52" height="52" patternUnits="userSpaceOnUse" x="0" y="0"><path d="M64 0H0V64" fill="none"></path></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#«r2»)"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="469" y="469"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="209" y="417"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="105" y="157"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="365" y="157"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="261" y="209"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="1" y="261"></rect><rect className="fill-white/20 transition duration-500 hover:fill-white/10" stroke-width="0" width="51" height="51" x="313" y="261"></rect></svg> */}
      <svg
        className="absolute z-0 -inset-x-0.5 -top-8 size-full  stroke-white/20 stroke-[2] [mask-image:radial-gradient(white,transparent_70%)]"
      //    className="absolute inset-0 w-full h-full stroke-white/20 stroke-[2]"
      >
        <defs>
          <pattern
            id="r2"
            viewBox="0 0 64 64"
            width="52"
            height="52"
            patternUnits="userSpaceOnUse"
          >
            <path d="M64 0H0V64" fill="none"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#r2)" />
        {rects.map((pos, i) => (
          <rect
            key={i}
            className="fill-white/20"
            strokeWidth="0"
            width="51"
            height="51"
            x={pos.x}
            y={pos.y}
          />
        ))}
      </svg>

      {/* Layer supérieur masqué, en jaune */}
     <div className="z-0">
       <svg
        ref={maskRef}
        className="absolute z-0 -inset-x-0.5 -top-8 size-full  stroke-white/20 stroke-[2] [mask-image:radial-gradient(white,transparent_70%)]"
      // className="absolute inset-0 w-full h-full stroke-white/20 stroke-[2] pointer-events-none transition-all duration-300"
      >
        <rect width="100%" height="100%" fill="url(#r2)" />
        {rects.map((pos, i) => (
          <rect
            key={i}
            className="fill-white/20"
            strokeWidth="0"
            width="51"
            height="51"
            x={pos.x}
            y={pos.y}
          />
        ))}
      </svg>
     </div>
      <SectionOneRigth />
    </div>
  );
}

export default SectionOne