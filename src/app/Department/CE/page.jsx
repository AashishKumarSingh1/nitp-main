"use client";
import React from "react";
import DepartmentCounter from "@/components/department/DeptCounter";
import AcadProgram from "@/components/department/AcadProgramCard";
import AboutDept from "@/components/department/AboutDept";
import DeptPic from "@/components/department/DeptPic";
import DeptNotice from "@/components/department/DeptNotice";
import { Users, BookOpen, FileText, Award, Briefcase, BarChart2 } from "lucide-react";

const about = `The Department of Civil Engineering is the oldest and vibrant department of the institute, which was established along with the inception of the Institute in the year 1924. The Institute was formerly known as the Bihar College of Engineering Patna, a constituent engineering college under Patna University, until 27thJan 2004. It was rechristened to National Institute of Technology Patna on 28th Jan 2004 as an Autonomous Institute under MHRD, Govt. of India.`;

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

const CEPage = () => {
  return (
    <div className="">
      {/* Department Picture and Notice */}
      <div className="flex flex-row w-[90%] h-[420px] mx-auto flex-1 shrink-0 mt-5">
        <DeptPic pictures={pictures} />
        <DeptNotice dept="ce" />
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

export default CEPage;
