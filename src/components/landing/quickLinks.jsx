"use client";
import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Book,
  Building,
  GraduationCap,
  Plane,
  School,
  Users,
  Handshake,
} from "lucide-react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const menuItems = [
  { title: "STUDENT", icon: <GraduationCap size={40} color="#BA210E" />, link: "/students" },
  { title: "ALUMNI", icon: <GraduationCap size={40} color="#BA210E" />, link: "https://alumini-nitp.vercel.app/", external: true },
  { title: "ADMISSIONS", icon: <School size={40} color="#BA210E" />, link: "/Academic/Admission?tab=JoSAA" },
  { title: "MAGAZINE", icon: <Book size={40} color="#BA210E" />, link: "/Institute/Magazine" },
  { title: "RECRUITMENT", icon: <Users size={40} color="#BA210E" />, link: "/Notices/jobsNitp" },
  { title: "International Affairs", icon: <Plane size={40} color="#BA210E" />, link: "/Institute/International" },
  { title: "Electronics & ICT Academy", icon: <Building size={40} color="#BA210E" />, link: "https://nitp-ict.ct.ws", external: true },
  { title: "Development Fund", icon: <Handshake size={40} color="#BA210E" />, link: "/DevelopmentFund" },
];

const Popbuttons = () => {
  const [containerHeight, setContainerHeight] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: false, offset: 50 });

    const updateHeight = () => {
      const centerContainer = document.getElementById("popup-container");
      if (centerContainer) {
        setContainerHeight(centerContainer.clientHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full px-2 md:px-4 md:pt-11">
      <div className="hidden xl:flex w-1/4 justify-end">
        <div
          className="w-full bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url('https://i.postimg.cc/TwLbcvmJ/nit-patna-007.jpg')`,
            height: containerHeight ? `${containerHeight}px` : "auto",
          }}
        />
      </div>
      <div
        id="popup-container"
        className="grid grid-cols-4 md:grid-cols-4 gap-[12px] md:gap-6 p-1 md:p-6 bg-opacity-90 rounded-2xl max-w-2xl w-full transform transition-all duration-300"
      >
        {menuItems.map((item, index) =>
          item.external ? (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2  md:p-6 bg-white rounded-xl ring-1 ring-red-500 shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {item.icon}
              <p className="text-[12px] md:text-sm font-semibold mt-2 text-black">{item.title}</p>
              <ArrowUpRight size={20} className="mt-1 text-gray-500 hidden md:flex " />
            </a>
          ) : (
            <Link
              key={index}
              href={item.link}
              className="p-2 md:p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl ring-1 ring-red-500"
            >
              {item.icon}
              <p className="text-[12px] md:text-sm font-semibold mt-2 text-black">{item.title}</p>
            </Link>
          )
        )}
      </div>
      <div className="hidden xl:flex w-1/4 justify-start">
        <div
          className="w-full bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url('https://i.postimg.cc/TwLbcvmJ/nit-patna-007.jpg')`,
            height: containerHeight ? `${containerHeight}px` : "auto",
          }}
        />
      </div>
    </div>
  );
};

export default Popbuttons;
