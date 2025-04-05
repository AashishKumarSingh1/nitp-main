"use client";
import FacultyInfo from "../../../../../components/facultycomponents/FacultyInfo";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col px-3 py-10 max-sm:p-4 text-black">
      <div className="flex flex-col mb-4">
        <div>
          <p className="text-red-900 text-xl lg:text-2xl font-bold">FACULTY</p>
        </div>
        <div className="mt-2">
          <p className="text-gray-500 text-sm lg:text-base font-semibold">
            Applied Physics and Materials Engineering
          </p>
        </div>
        <div>
          <button
            onClick={() => router.push("/Department/Phy")}
            className=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={"1.5"}
              stroke="currentColor"
              className="size-8 hover:size-7 hover:text-red-800"
            >
              <path
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <FacultyInfo />
    </div>
  );
};

export default page;
