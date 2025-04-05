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

const about = `The Department of Physics was established in the year 1924 and since then has been functioning as an important unit of the institute. As of now, the Department has nine faculty members who are actively involved in both teaching and research and three supporting staffs including one Technical Assistant for Labs. The Department of Materials Science and Engineering started in the year 2022. The Department has started a new Dual degree program B.Tech-M.Tech in Material Science and Engineering from the session 2022-23. There are 08 candidates enrolled in dual degree program in the session 2022-23 and 09 candidates enrolled in the session 2023-24 and 10 candidates enrolled in the session 2024-25. In the year of 2024-25 the department has been merged with Physics department and thereafter new department has started and named as “Applied Physics and Materials Engineering”. The Department of Applied Physics and Materials Engineering also offers Ph.D program (Full time and Part time research program) in Engineering to provide a platform for bright graduates and post graduates to conduct research in the diversified area of Applied Physics. The faculty is also involved in producing good number of high quality research publications each year. The new department is an interdisciplinary department which draws attention from all other engineering applications with basic understanding of Materials science. The different laboratories of the department mainly focuses on the study of the development of new materials and its advanced manufacturing methods and modification of its properties by suitable compositional and heat treatment methods by altering the physical and mechanical behaviour materials for its widespread application.`;

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
