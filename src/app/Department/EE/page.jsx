"use client";
import React from "react";
import DepartmentCounter from "@/components/department/DeptCounter";
import AcadProgram from "@/components/department/AcadProgramCard";
import AboutDept from "@/components/department/AboutDept";
import DeptPic from "@/components/department/DeptPic";
import DeptNotice from "@/components/department/DeptNotice";

const about = `The Department of Electrical Engineering in National Institute of Technology Patna (Formerly known as Bihar College of Engineering) was established in 1945 under Patna University with an intake of 45 students leading to a Bachelor of Science (Engineering) degree of four-year duration. In the year 1978 AICTE approved Post Graduate (PG) course leading to M.Sc. (Engg.) Degree in two specializations: (i) Power System Engineering and (ii) Control System Engineering. The department is also offering the Ph.D. research program since 2009.`;

const pictures = ["", "", ""];

const counts = [
  {
    name: "Undergraduate Students",
    icon: "/students_icon.png",
    count: 456,
    color: "#FFCDD2", // Soft Red
  },
  {
    name: "Postgraduate Students",
    icon: "/students_icon.png",
    count: 123,
    color: "#BBDEFB", // Soft Blue
  },
  {
    name: "Ph.D. Students",
    icon: "/students_icon.png",
    count: 49,
    color: "#D1C4E9", // Soft Purple
  },
  {
    name: "Faculty",
    icon: "/faculty_icon.png",
    count: 25,
    color: "#FFECB3", // Soft Yellow
  },
  {
    name: "Journal",
    icon: "/journal_icon.png",
    count: 25,
    color: "#C8E6C9", // Soft Green
  },
  {
    name: "Conferences",
    icon: "/conference_icon.png",
    count: 78,
    color: "#FFCCBC", // Soft Orange
  },
  {
    name: "Projects",
    icon: "/projects_icon.png",
    count: 49,
    color: "#D7CCC8", // Soft Brown
  },
  {
    name: "Research",
    icon: "/research_icon.png",
    count: 123,
    color: "#B2DFDB", // Soft Teal
  },
  {
    name: "Patents",
    icon: "/patents_icon.png",
    count: 123,
    color: "#F8BBD0", // Soft Pink
  },
];

const AcadProgrammes = [
  {
    name: "Under Graduate",
    degree: "B.Tech",
    duration: `4`,
    specialization: ["EE"],
    timeTableLink: "",
    syllabusLink: "",
  },
  {
    name: "Dual Degree",
    degree: "Integrated B.Tech and M.Tech",
    duration: `5`,
    specialization: ["VLSI", "EE"],
    timeTableLink: "",
    syllabusLink: "",
  },
  {
    name: "Post Graduate",
    degree: "M.Tech",
    duration: `2`,
    specialization: ["EE"],
    timeTableLink: "",
    syllabusLink: "",
  },
  {
    name: "Ph.D.",
    degree: "Post Doctrate",
    duration: `5+`,
    specialization: ["EE"],
    timeTableLink: "",
    syllabusLink: "",
  },
];

const EEPage = () => {
  return (
    <div className="">
      {/* Department Picture and Notice */}
      <div className="flex flex-row w-[80%] h-[420px] mx-auto flex-1 shrink-0 mt-5">
        <DeptPic pictures={pictures} />
        <DeptNotice dept="EE" />
      </div>

      {/* About the department */}
      <div className="py-1 mt-2">
        <div className="flex flex-col lg:flex-row w-full px-5 xs:px-0 md:w-[90%] lg:w-[80%] mx-auto">
          <AboutDept about={about} />

          <DepartmentCounter counts={counts} />
        </div>
      </div>

      {/* Academic Programmes */}
      <div className="py-1 mt-2">
        <h2 className="text-center w-[80%] mx-auto text-4xl text-red-700 mb-2">
          Academic Programmes
        </h2>
        <div className="w-[80%] mx-auto">
          <AcadProgram acadProgrammes={AcadProgrammes} />
        </div>
      </div>

      {/* Vision And Mission */}
      <div></div>
    </div>
  );
};

export default EEPage;
