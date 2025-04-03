import DepartmentCounter from "@/components/department/DeptCounter";
import React from "react";
import {
  Users,
  BookOpen,
  FileText,
  Award,
  Briefcase,
  BarChart2,
} from "lucide-react";

const about = `The Department of Architecture was established at the Bihar College of Engineering (BCE) Patna in 1979 under Patna University. It was the first time that architectural education had commenced in Bihar. When BCE Patna was rechristened as the National Institute of Technology Patna on 28th January 2004, it came under the control of the Ministry of Human Resource Development (MHRD), Government of India. The Department of Architecture and Planning offers programmes in Bachelor of Architecture (B.Arch.), Master of Urban and Regional Planning (MURP),  and Ph.D. in Architecture and Planning.
The B.Arch. course, apart from fulfilling the functional requirements, leads towards creativity, innovation and aesthetics in the design of buildings and their environments. The postgraduate course in Master of Urban and Regional Planning, which commenced in 2012-13, imparts knowledge of urban and regional planning, green infrastructure, environment planning, sustainability and energy efficient aspects in urban and regional planning. It emphasizes creating new ideas and innovative physical/spatial planning concepts in the present scenario. The nomenclature of the Department of Architecture was changed to the Department of Architecture and Planning in the year 2020. This course is affiliated with the Institute of Town Planners, India.
The PhD programme started in 2009 with research areas in architecture, urban planning, regional planning, environmental planning, transport planning, architectural conservation, landscape, housing, healthcare architecture, and construction planning management.`;

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

const Aboutpage = () => {
  return (
    <div className="">
      {/* About the department */}
      <div className="py-1 mt-2">
        <div className="w-full px-5 xs:px-0 md:w-[90%] lg:w-[80%] mx-auto">
          <div className="w-full">
            <h2 className="text-center text-4xl text-red-700 mt-2">
              About The Department
            </h2>
            <div className="w-[100%] mx-auto px-2 py-5 text-justify text-black">
              {about.split("\n").map((line, index) => (
                <p key={index} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
          </div>
          <DepartmentCounter counts={counts} />
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
