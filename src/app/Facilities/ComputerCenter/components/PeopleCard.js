

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faGraduationCap,
  faEnvelope,
  faPhone,
  faEye,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

function PeopleCard({
  name,
  designation,
  image,
  email,
  phone,
  Expertise,
  }) 
  {
  return (
    <>
      <div
  className="backdrop-blur-md text-black flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden border m-4 md:m-6"
>
  {/* Left Section - Image */}
  <div className="flex justify-center items-center p-5 md:p-7 bg-red-700 md:w-1/4">
    <div 
      className="relative w-[clamp(70px,10vw,130px)] h-[clamp(70px,10vw,130px)] aspect-square rounded-full overflow-hidden shrink-0"
    >
      <Image
        className="object-cover w-full h-full rounded-full"
        src={image === "" ? "/faculty.jpeg" : image}
        alt={name}
        fill
        loading="lazy"
      />
    </div>
  </div>

  {/* Right Section - Details */}
  <div className="flex flex-col p-5 md:p-7 md:w-3/4">
    <h5 className="text-lg md:text-xl text-red-800 font-bold">{name}</h5>

    <span className="flex items-center font-semibold text-gray-800 mt-1">
      <FontAwesomeIcon icon={faIdCard} className="w-5 mr-2 text-red-700" /> {designation}
    </span>

    {Expertise && (
      <span className="flex items-center text-gray-700 mt-2">
        <FontAwesomeIcon icon={faLightbulb} className="w-5 mr-2 text-red-700" /> 
        <a href={`mailto:${Expertise}`} className="hover:text-red-700 transition">
          {Expertise}
        </a>
      </span>
    )}

    {email && (
      <span className="flex items-center text-gray-700 mt-2">
        <FontAwesomeIcon icon={faEnvelope} className="w-5 mr-2 text-red-700" /> 
        <a href={`mailto:${email}`} className="hover:text-red-700 transition">
          {email}
        </a>
      </span>
    )}

    {phone && (
      <span className="flex items-center text-gray-700 mt-2">
        <FontAwesomeIcon icon={faPhone} className="w-5 mr-2 text-red-700" /> 
        <a href={`tel:${phone}`} className="hover:text-red-700 transition">
          {phone}
        </a>
      </span>
    )}
  </div>
</div>

    </>
  );
}

export default PeopleCard;
