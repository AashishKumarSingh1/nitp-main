"use client";
import React from "react";
import DepartmentCounter from "@/components/department/DeptCounter";
import AcadProgram from "@/components/department/AcadProgramCard";
import AboutDept from "@/components/department/AboutDept";
import DeptPic from "@/components/department/DeptPic";
import DeptNotice from "@/components/department/DeptNotice";
import {
  Users,
  BookOpen,
  FileText,
  Award,
  Briefcase,
  BarChart2,
} from "lucide-react";

const about = `The Chemistry department was established in 1924, at the same time the institute was founded. The Department has expanded significantly since 2014 and offers several compulsory and elective courses to B.Tech. and B.Arch. students of the Institute in 1st, 2nd and 3rd years of the UG and UG-PG dual degree programs. The department has offered a UG-PG 5-year Integrated M.Sc. in Chemistry degree from 2015 where the curriculum offers students an excellent theoretical foundation in both traditional as well as contemporary areas of chemistry along with extensive hands on training in experiments. Several of the pass out students have cleared GATE and NET examinations and have pursued higher studies in Institutes of repute like IITs, NIT and IISER. Some of the students have received placements through Institute T&P in teaching institutes, banks and IT companies. From the academic session of 2023, the department has started a 5-year UG-PG program - B. Tech.-M. Tech. dual degree in Chemical Technology. The expected outcome of the curriculum is to promote R&D in Chemistry with technological advancements and equip students to contribute effectively for the enhancement of both industry and academia in the country.`;

const pictures = ["", "", ""];

const counts = [
  { name: "Undergraduate Students", icon: <Users size={40} />, count: "456+" },
  { name: "Postgraduate Students", icon: <Users size={40} />, count: "123+" },
  { name: "Ph.D. Students", icon: <Users size={40} />, count: "49+" },
  { name: "Faculty", icon: <BookOpen size={40} />, count: "25+" },
  { name: "Journal", icon: <FileText size={40} />, count: "25+" },
  { name: "Conferences", icon: <Award size={40} />, count: "78+" },
  { name: "Projects", icon: <Briefcase size={40} />, count: "49+" },
  { name: "Book", icon: <BookOpen size={40} />, count: "123+" },
  { name: "Patents", icon: <BarChart2 size={40} />, count: "123+" },
];

const AcadProgrammes = [
  {
    name: "Under Graduate",
    degree: "B.Tech",
    duration: `4`,
    specialization: ["CSE"],
    timeTableLink: "",
    syllabusLink: "",
  },
  {
    name: "Dual Degree",
    degree: "Integrated B.Tech and M.Tech",
    duration: `5`,
    specialization: ["Cyber Security", "Data Science"],
    timeTableLink: "",
    syllabusLink: "",
  },
  {
    name: "Post Graduate",
    degree: "M.Tech",
    duration: `2`,
    specialization: ["CSE"],
    timeTableLink: "",
    syllabusLink: "",
  },
  {
    name: "Ph.D.",
    degree: "Post Doctrate",
    duration: `5+`,
    specialization: ["CSE"],
    timeTableLink: "",
    syllabusLink: "",
  },
];

const ChemPage = () => {
  return (
    <div className="">
      {/* Department Picture and Notice */}
      <div className="flex flex-row w-[90%] h-[420px] mx-auto flex-1 shrink-0 mt-5">
        <DeptPic pictures={pictures} />
        <DeptNotice dept="che" />
      </div>

      {/* About the department */}
      <div className="py-1 mt-2">
        <div className="flex flex-col lg:flex-row w-full px-5 xs:px-0 md:w-[90%] lg:w-full mx-auto">
          <AboutDept about={about} />

          <DepartmentCounter counts={counts} />
        </div>
      </div>
    </div>
  );
};

export default ChemPage;
