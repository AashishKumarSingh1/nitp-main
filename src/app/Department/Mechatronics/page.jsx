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

const about = `Welcome to the Department of Mechatronics and Automation Engineering at the National Institute of Technology Patna. Established in 2024, the Department of Mechatronics and Automation Engineering at NIT Patna is one of the institution's newest departments, committed to delivering a premier educational experience aimed at preparing students to be industry-ready through its four-year full-time B.Tech. program. The Mechatronics and Automation Programme is committed to prepare the graduates to synergistically integrate mechanical engineering, electronics, and intelligent computer control systems seamlessly in the design and manufacturing of industrial products and processes. The department is dedicated to preparing graduates with strong team skills to solve multi-disciplinary problems using the Mechatronics approach. Graduates of this program will have the opportunity to work in a variety of sectors, including aviation, electronics, automotive, manufacturing, oil and gas, mining, transportation, defense, robotics, and aerospace industries, as well as pursue advanced degrees. A meticulously designed curriculum aims to enhance self-reliance, soft skills, and leadership qualities, empowering our graduates to build successful careers and emerge as ethical entrepreneurs serving the nation and society. It is tailored to keep pace with rapidly changing technologies and industrial environments, considering both global and Indian contexts.

The Department maintains strong industrial interactions and significantly contributes to the industry by providing consultancy services and undertaking sponsored research projects. The increasing number of patents and publications in leading multidisciplinary journals highlights the department's thriving research environment.`;

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

const MechatronicsPage = () => {
  return (
    <div className="">
      {/* Department Picture and Notice */}
      <div className="flex flex-row w-[90%] h-[420px] mx-auto flex-1 shrink-0 mt-5">
        <DeptPic pictures={pictures} />
        <DeptNotice dept="Mechatronics" />
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

export default MechatronicsPage;
