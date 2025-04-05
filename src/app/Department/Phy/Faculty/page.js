"use client";
import FacultyList from "../../../../components/facultycomponents/FacultyList";
import React, { useEffect, useState } from "react";
import axios from "axios";

const PhyFacultyPage = () => {
  const [faculty, setFaculty] = useState(true);
  const [loading, setLoading] = useState(true);

  const hasFaculty = true;

  return (
    <div className="flex flex-col px-3 py-10 max-sm:p-4 text-black">

      {faculty && hasFaculty && (
        <div className="flex flex-col">
          <p className="text-red-900 text-xl lg:text-3xl font-bold text-center">FACULTY</p>
          <FacultyList url={"/Department/Phy/Faculty"} branch={"phy"} />
        </div>
      )}
    </div>
  );
};

export default PhyFacultyPage;
