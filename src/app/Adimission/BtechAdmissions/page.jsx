"use client";
import { useState } from "react";

export default function Admission() {
  const [activeTab, setActiveTab] = useState("admissions"); // State to track the active tab

  const notices = [
    "Notice 1: Admission process starts on April 10, 2025.",
    "Notice 2: Last date for application submission is May 15, 2025.",
    "Notice 3: Counseling schedule will be announced soon.",
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-400 text-white p-5 rounded-b-lg shadow-lg">
        <h2
          className="
    text-xl 
    font-bold 
    mb-4 
    text-gray-800 
    text-center 
    relative 
    before:absolute 
    before:content-[''] 
    before:top-0 
    before:left-0 
    before:shadow-[0_0_0_3px_#f7f5ec]
  "
        >
          B.TECH
        </h2>
        <ul>
          <li
            className={`p-3 rounded-lg mb-2 flex items-center cursor-pointer transition-all ${
              activeTab === "admissions"
                ? "bg-gray-800 text-white"
                : "text-black hover:bg-gray-500"
            }`}
            onClick={() => setActiveTab("admissions")}
          >
            <span className="mr-2">👥</span> B.Tech Admissions
          </li>
          <li
            className={`p-3 rounded-lg flex items-center cursor-pointer transition-all ${
              activeTab === "notices"
                ? "bg-gray-800 text-white"
                : "text-black hover:bg-gray-500"
            }`}
            onClick={() => setActiveTab("notices")}
          >
            <span className="mr-2">ℹ️</span> B.Tech Notices
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {activeTab === "admissions" ? (
          <>
            <h2 className="text-2xl font-bold text-red-500 mb-6">
              B.Tech Admissions
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {/* JOSAA Card */}
              <div className="border p-4 rounded-lg shadow-lg text-center">
                <a
                  href="https://josaa.nic.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://nitsikkim.ac.in/admissions/assets/images/josaaLogo.jpg"
                    alt="JoSAA Logo"
                    className="mx-auto mb-4 h-32"
                  />
                </a>
                <h3 className="font-semibold">
                  JOSAA 23 - Joint Seat Allocation Authority 2023
                </h3>
              </div>

              {/* DASA Card */}
              <div className="border p-4 rounded-lg shadow-lg text-center">
                <a
                  href="https://dasanit.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://nitsikkim.ac.in/admissions/assets/images/dasaImg.png"
                    alt="DASA Logo"
                    className="mx-auto mb-4 h-32"
                  />
                </a>
                <h3 className="font-semibold">
                  DASA 23 - Direct Admission of Students Abroad 2023
                </h3>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-red-900 mb-6">
              B.Tech Notices
            </h2>
            <ul className="space-y-6">
            {notices.map((notice, index) => (
              <li key={index} className="relative pl-6 text-gray-700">
                <span className="absolute left-0 top-0 h-full w-1 bg-red-500"></span>
                <p className="mb-2">{notice}</p>
              </li>
            ))}
          </ul>
          </>
        )}
      </div>
    </div>
  );
}
