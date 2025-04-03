import React from "react";

const CSEAchievementpage = () => {
  return (
    <div>
      <div className="py-1 mt-2">
        <div className="w-full px-5 xs:px-0 md:w-[90%] lg:w-[80%] mx-auto">
          <div className="w-full">
            <h2 className="text-center text-4xl text-red-700 mt-2">
              Achievement
            </h2>
          </div>
          <p className="text-justify mt-2">
            <ul className="list-disc pl-5 space-y-2 text-xl">
              <li className="ml-4">ISEA Project Phase – I (Completed)</li>
              <li className="ml-4">ISEA Project Phase – II (Ongoing)</li>
              <li className="ml-4">ICT-Academy Project (Ongoing)</li>
              <li className="ml-4">
                “Digital Literacy” Course under Skill Development Program (PMRY
                scheme) Completed
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CSEAchievementpage;
