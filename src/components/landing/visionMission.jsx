"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

const VisionMission = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
    
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            // data-aos="fade-right"
            className="flex flex-col space-y-8"
          >
            <div className="text-center lg:text-left">
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/NIT-patna.jpg"
                  alt="NIT Patna Campus"
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed">
                National Institute of Technology Patna is the 18th National
                Institute of Technology created by the Ministry of H.R.D. Government
                of India after rechristening the erstwhile Bihar College of
                Engineering Patna on 28.01.2004.
              </p>
              
              <div className="mt-8">
                <Link
                  href="/about-nit-patna"
                  className="inline-flex items-center text-red-700 font-medium hover:text-red-800 transition-colors group"
                >
                  Read More
                  <ArrowRight 
                    size={20} 
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  />
                </Link>
              </div>
            </div>
          </div>
          <div 
            // data-aos="fade-left"
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4 text-blue-500">
                <Twitter size={24} />
                <h3 className="text-xl font-semibold">Latest Updates</h3>
              </div>
              <div className="border-t pt-4">
                <a
                  className="twitter-timeline"
                  data-lang="en"
                  data-height="400"
                  data-theme="light"
                  data-chrome="noheader nofooter noborders"
                  href="https://twitter.com/NITPatna1"
                >
                  Tweets by NIT Patna
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Follow Us On</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <SocialLink 
                  icon={<Facebook size={20} className="text-blue-600" />}
                  name="Facebook"
                  href="#"
                />
                <SocialLink 
                  icon={<Instagram size={20} className="text-pink-600" />}
                  name="Instagram"
                  href="#"
                />
                <SocialLink 
                  icon={<Youtube size={20} className="text-red-600" />}
                  name="YouTube"
                  href="#"
                />
                <SocialLink 
                  icon={<Twitter size={20} className="text-blue-400" />}
                  name="Twitter"
                  href="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ icon, name, href }) => (
  <a
    href={href}
    className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
  >
    <div className="mb-2">{icon}</div>
    <span className="text-sm font-medium text-gray-700">{name}</span>
  </a>
);

export default VisionMission;