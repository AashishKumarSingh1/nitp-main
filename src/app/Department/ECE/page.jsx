"use client";
import React from "react";
import DepartmentCounter from "@/components/department/DeptCounter";
import AcadProgram from "@/components/department/AcadProgramCard";
import AboutDept from "@/components/department/AboutDept";
import DeptPic from "@/components/department/DeptPic";
import DeptNotice from "@/components/department/DeptNotice";

const about = `The Department of Electronics and Communication Engineering at the National Institute of Technology Patna began its journey in 1978 with just 10 undergraduate students. The department is dedicated to providing quality education at both undergraduate (UG) and postgraduate levels. Currently, it offers the following programs:
1. B.Tech in "Electronics & Communication Engineering" with an intake of 161.
2. Dual degree (B.Tech + M.Tech) in "Microelectronics and VLSI System Design" with an intake of 22.
3. M.Tech in:
   (a) "Next Generation Wireless Technologies" with an intake of 22.
   (b) "Microelectronics and VLSI System Design" with an intake of 22.
4. Ph.D. (Full-time and Part-time) in Electronics and Communication Engineering.`;

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
    specialization: ["ECE"],
    timeTableLink: "",
    syllabusLink: "",
  },
  {
    name: "Dual Degree",
    degree: "Integrated B.Tech and M.Tech",
    duration: `5`,
    specialization: ["VLSI", "ECE"],
    timeTableLink: "",
    syllabusLink: "",
  },
  {
    name: "Post Graduate",
    degree: "M.Tech",
    duration: `2`,
    specialization: ["ECE"],
    timeTableLink: "",
    syllabusLink: "",
  },
  {
    name: "Ph.D.",
    degree: "Post Doctrate",
    duration: `5+`,
    specialization: ["ECE"],
    timeTableLink: "",
    syllabusLink: "",
  },
];

const ECEPage = () => {
  return (
    <div className="">
      {/* Department Picture and Notice */}
      <div className="flex flex-row w-[80%] h-[420px] mx-auto flex-1 shrink-0 mt-5">
        <DeptPic pictures={pictures} />
        <DeptNotice dept="ECE" />
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

export default ECEPage;
