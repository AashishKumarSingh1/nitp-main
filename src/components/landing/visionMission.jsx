"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";
// import MagazinePage from "@/app/Institute/Magazine/page";
const VisionMission = () => {
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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 py-16 bg-gray-50">
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-3 gap-10 h-[60vh]">
        <div
          data-aos=""
          className="flex flex-col items-center lg:items-start text-center rounded-lg lg:text-left bg-white shadow-lg "
        >
          <h2 className="text-3xl font-bold text-white w-full bg-red-700 py-3 text-center rounded-t-2xl">
            About NIT Patna
          </h2>
          <div className="relative w-full h-80 overflow-hidden shadow-md">
            <Image
              src="/NIT-patna.jpg"
              alt="NIT Patna Campus"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="mt-6 pl-2 pr-2 text-lg text-gray-700 leading-relaxed">
            National Institute of Technology Patna is the 18th National
            Institute of Technology created by the Ministry of H.R.D. Government
            of India after rechristening the erstwhile Bihar College of
            Engineering Patna on 28.01.2004.
          </p>
          <div className="w-full flex justify-end mb-3 items-center pr-3">
            <Link
              href="/about-nit-patna"
              className="mt-4 inline-flex items-center gap-2 text-blue-600 font-semibold transition-all duration-300 group"
            >
              Read More
              <span className="relative transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-0.5">
                <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full bg-white border rounded-md dark:border-gray-800 shadow-lg overflow-auto">
          <h2 className="text-3xl font-bold mb-4 text-center bg-red-700 text-white w-full py-2 px-3">
            View our Social Media
          </h2>
          <div className="flex flex-col gap-4 p-4">
            <a
              className="twitter-timeline"
              data-lang="en"
              data-height="500"
              href="https://twitter.com/NITPatna1?ref_src=twsrc%5Etfw"
            >
              Tweets by NIT Patna
            </a>
          </div>
        </div>
        <div
          data-aos=""
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
        >
          <h2 className="text-xl font-bold text-gray-900">
            Placement Stats
          </h2>
          <p className="text-gray-700 mt-2 text-center">
            Stay updated with the latest events and achievements at NIT Patna.
          </p>
          <button className="mt-4 px-6 py-2 bg-gray-800 text-white font-semibold rounded-md shadow-md hover:bg-gray-900 transition-transform transform hover:scale-105">
            Explore Out our Placement
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
