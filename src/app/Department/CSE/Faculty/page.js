"use client";
import FacultyList from "../../../../components/facultycomponents/FacultyList";
import React, { useEffect, useState } from "react";
import axios from "axios";

const CSEFacultyPage = () => {
  const [faculty, setFaculty] = useState(true);
  const [loading, setLoading] = useState(true);

  const hasFaculty = true;

  return (
    <div className="flex flex-col px-3 py-10 max-sm:p-2 text-black">
      {/* <div className="flex flex-col mb-4">
        <div className="mt-2 w-full justify-center flex">
          <p className="text-gray-500 text-sm lg:text-xl font-semibold">
            COMPUTER SCIENCE ENGINEERING
          </p>
        </div>
        <button
          onClick={() => router.push("/Department/CSE")}
          className="text-red-900 hover:text-red-800"
        >
          Back
        </button>
      </div> */}

      {faculty && hasFaculty && (
        <div className="flex flex-col">
          <p className="text-red-900 text-xl lg:text-3xl font-bold text-center">FACULTY</p>
          <FacultyList url={"/Department/CSE/Faculty"} branch={"cse"} />
        </div>
      )}
    </div>
  );
};

export default CSEFacultyPage;
