"use client";
import React from "react";
import DepartmentCounter from "@/components/department/DeptCounter";
import AcadProgram from "@/components/department/AcadProgramCard";
import AboutDept from "@/components/department/AboutDept";
import DeptPic from "@/components/department/DeptPic";
import DeptNotice from "@/components/department/DeptNotice";

const about = `The Chemistry department was established in 1924, at the same time the institute was founded. The Department has expanded significantly since 2014 and offers several compulsory and elective courses to B.Tech. and B.Arch. students of the Institute in 1st, 2nd and 3rd years of the UG and UG-PG dual degree programs. The department has offered a UG-PG 5-year Integrated M.Sc. in Chemistry degree from 2015 where the curriculum offers students an excellent theoretical foundation in both traditional as well as contemporary areas of chemistry along with extensive hands on training in experiments. Several of the pass out students have cleared GATE and NET examinations and have pursued higher studies in Institutes of repute like IITs, NIT and IISER. Some of the students have received placements through Institute T&P in teaching institutes, banks and IT companies. From the academic session of 2023, the department has started a 5-year UG-PG program - B. Tech.-M. Tech. dual degree in Chemical Technology. The expected outcome of the curriculum is to promote R&D in Chemistry with technological advancements and equip students to contribute effectively for the enhancement of both industry and academia in the country.`;

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
    specialization: ["Chem"],
    timeTableLink: "",
    syllabusLink: "",
  },
  {
    name: "Dual Degree",
    degree: "Integrated B.Tech and M.Tech",
    duration: `5`,
    specialization: ["Chem"],
    timeTableLink: "",
    syllabusLink: "",
  },
  {
    name: "Post Graduate",
    degree: "M.Tech",
    duration: `2`,
    specialization: ["Chem"],
    timeTableLink: "",
    syllabusLink: "",
  },
  {
    name: "Ph.D.",
    degree: "Post Doctrate",
    duration: `5+`,
    specialization: ["Chem"],
    timeTableLink: "",
    syllabusLink: "",
  },
];

const ChemPage = () => {
  return (
    <div className="">
      {/* Department Picture and Notice */}
      <div className="flex flex-row w-[80%] h-[420px] mx-auto flex-1 shrink-0 mt-5">
        <DeptPic pictures={pictures} />
        <DeptNotice dept="Chem" />
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

export default ChemPage;
