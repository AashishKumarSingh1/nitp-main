"use client";
import React from "react";
import Image from "next/image";
import { sliderData } from "./clubData";
import { useState, useEffect, useRef } from "react";
import { Users, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import SocialHandles from "./socialHandles";
const images = [
    "https://i.postimg.cc/bwy2BtkJ/nit-patna-001.jpg",
    "https://i.postimg.cc/02dwnf6F/nit-patna-002.jpg",
    "https://i.postimg.cc/zX1hTMfT/nit-patna-003.jpg",
    "https://i.postimg.cc/h4mxzgKS/nit-patna-004.jpg",
    "https://i.postimg.cc/fyY06783/nit-patna-005.jpg",
    "https://i.postimg.cc/HLP55kJL/nit-patna-006.jpg",
    "https://i.postimg.cc/TwLbcvmJ/nit-patna-007.jpg",
    "https://i.postimg.cc/pTwFGcJb/nit-patna-008.jpg",
    "https://i.postimg.cc/LssLn187/nit-patna-009.jpg",
  ];

export const ClubGallery = () => {
    const [scrollingClub,setScrollingClub]=useState(true);
    const scrollingRef=useRef(null);

    useEffect(()=>{
        const clubObserver= new IntersectionObserver(
            (entries)=>{
                entries.forEach((entry)=>{
                    setScrollingClub(entry.isIntersecting);
                });
            },
            {threshold:0.1}
        );
        if(scrollingRef.current){
            clubObserver.observe(scrollingRef.current);
        }
        return ()=>{
            if(clubObserver.current){
                clubObserver.unobserve(scrollingRef.current);
            }
        }
    },[scrollingRef])

    useEffect(()=>{
        const scrollSection = (ref, scrolling) => {
            if (!ref.current) return;
      
            const scroll = () => {
              if (scrolling && ref.current) {
                ref.current.scrollTop += 1;
                if (
                  ref.current.scrollTop >= ref.current.scrollHeight - ref.current.clientHeight
                ) {
                  ref.current.scrollTop = 0;
                }
              }
            };
      
            const interval = setInterval(scroll, 30);
            return () => clearInterval(interval);
          };

          const clubScroll=scrollSection(scrollingRef,scrollingClub);

          return ()=>{
            clubScroll();
          }
    },[scrollingClub]);

    const handleMouseEnter=()=>setScrollingClub(false);
    const handleMouseLeave=()=>setScrollingClub(true);
  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center ">
        <div className="w-[80%] mx-auto">
          <h1 className="text-2xl md:text-4xl font-semibold flex items-center gap-2 text-white w-full justify-center bg-red-700 rounded-t-2xl py-3">
            <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
            Clubs & Societies
          </h1>
          <div className="space-y-6 h-[71vh] bg-[#EAF3FF rounded-2xl py-3 overflow-y-scroll mx-auto w-full scrollbar-hide no-scroll p-4" ref={scrollingRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {sliderData.map((club, index) => (
              <ClubCard key={index} club={club} />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-4xl font-semibold flex items-center gap-2 text-black w-full justify-center mb-4 md:mb-7">
            <ImageIcon className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
            NIT Patna Glimpses
          </h1>
          <div className="flex flex-wrap gap-1 w-full h-[60vh]">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-1 basis-1/4 transition-all duration-300 hover:basis-1/3 h-[20vh]"
                style={{ flexShrink: 1 }}
              >
                <Image
                  src={image}
                  alt={`NIT Patna Glimpse ${index + 1}`}
                  width={300}
                  height={200}
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ClubCard = ({ club }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white shadow-md hover:shadow-lg rounded-2xl transition-transform transform lg:w-[90%] mx-auto ">
      <div className="w-full lg:w-1/3">
        <img
          src={club.image}
          alt={club.heading}
          className="w-full h-52 md:h-60 object-cover rounded-t-2xl lg:rounded-l-2xl"
        />
      </div>
      <div className="w-full md:w-2/3 md:ml-6 mt-4 md:mt-0 p-4">
        <h2 className="text-xl font-bold text-black">{club.heading}</h2>
        <p className="bg-purple-500 text-white text-sm font-semibold px-3 py-1 inline-block rounded-2xl mt-2">
          {club.theme}
        </p>
        <p className="text-black mt-3 text-sm md:text-base leading-relaxed">
          {club.description.length > 110
            ? `${club.description.substring(0, 110)}...`
            : club.description}
        </p>
        <Link
          href={`/club/${club.heading.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-blue-600 font-semibold mt-3 inline-block hover:underline"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};
