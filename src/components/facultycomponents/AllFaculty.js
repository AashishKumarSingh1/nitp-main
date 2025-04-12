"use client";
import { useState, useEffect } from "react";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Loading from "../../Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faEye } from "@fortawesome/free-solid-svg-icons";
import FacultyCard from "./Facultycard";

const AllFaculty = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const excludedDepartments = ["Other Employees", "Officers"];

  useEffect(() => {
    const apiEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty?type=all`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        const filteredFaculty = data.filter(
          (item) => !excludedDepartments.includes(item.department)
        );
        const sortedData = filteredFaculty.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setFacultyData(sortedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching faculty data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const renderFacultiesByDesignation = (designations, title) => {
    const filteredFaculties = facultyData.filter((faculty) =>
      designations.includes(faculty.designation)
    );

    if (filteredFaculties.length === 0) return null;

    return (
      <div key={title} className="mb-8">
        <h2 className="text-2xl font-bold text-black">{title}</h2>
        <div className="flex flex-wrap justify-center gap-4 p-4 mt-2">
          {filteredFaculties.map((faculty) => (
            <FacultyCard
              key={faculty.id}
              name={faculty.name}
              image={faculty.image}
              department= {faculty.department}
              designation={faculty.designation}
              email={faculty.email}
              phone={faculty.ext_no}
              profileLink={`/profile/${faculty.email}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto px-4 py-8">
      {renderFacultiesByDesignation(
        [
          "Professor & HOD",
          "Associate Professor & HOD",
          "Professor & HoD",
          "Associate Professor & HoD",
          "HoD & Professor",
          "HoD & Associate Professor",
          "HoD and Professor",
        ],
        "Head of Department"
      )}
      {renderFacultiesByDesignation(["Professor"], "Professor")}
      {renderFacultiesByDesignation(
        ["Associate Professor"],
        "Associate Professor"
      )}
      {renderFacultiesByDesignation(
        ["Assistant Professor"],
        "Assistant Professor"
      )}
    </div>
  );
};

export default AllFaculty;