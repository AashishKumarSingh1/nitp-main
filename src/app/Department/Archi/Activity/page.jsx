import React from "react";

const ArchiActivityData = {
  workshops: [
    {
      title: "Workshops / Seminars / Training / Course Conducted",
      content: [
        {
          name: "Concepts of Cryptographic Engineering",
          date: "19th Feb 2018 - 23rd Feb 2018",
        },
        {
          name: "Artificial Intelligence & Machine Learning",
          date: "18th May 2018 - 22nd May 2018",
        },
        {
          name: "Deep Learning and applications",
          date: "27th May 2019 - 31st May 2019",
        },
        {
          name: "Introduction to Programming: A Pedagogical Approach",
          date: "17th June 2019 - 22nd June 2019",
        },
        {
          name: "Academia-Future of Industry",
          date: "23rd Aug 2019 - 24th Aug 2019",
        },
        {
          name: "Natural Language Processing",
          date: "6th Jan 2020 - 10th Jan 2020",
        },
        {
          name: "Artificial Intelligence & Machine Learning",
          date: "12th Feb 2020 - 16th Feb 2020",
        },
        {
          name: "Cyber Security Using Machine Learning/Big Data Analytics",
          date: "17th Feb 2020 - 21st Feb 2020",
        },
      ],
    },
  ],
  expertLectures: [
    {
      title: "Expert Lectures Conducted",
      content: [
        {
          name: "Pattern Recognition with relevance to Soft Computing / Granular Data Mining with Applications to image processing and Bio-Informatics",
          speaker: "Prof. Shankar K. Pal, ISI Kolkata",
        },
        {
          name: "Soft Computing",
          speaker: "Prof. Paramartha Dutta, VBU, Shantiniketan",
        },
        {
          name: "ABC of Big Data",
          speaker: "Prof. Shankar K. Pal, ISI Kolkata",
        },
      ],
    },
  ],
  projects: [
    {
      fundingBody: "DST SERB",
      area: "Efficient Reliable Data Delivery during Forest Fire using Wireless Network",
      faculty: "Dr. Ditipriya Sinha",
      amount: "11 lakhs",
      year: "2017-2020",
    },
    {
      fundingBody: "DST SERB",
      area: "Study of Road Coverage Problem in Wireless Sensor Network",
      faculty: "Dr. Dinesh Dash",
      amount: "7.42 lakhs",
      year: "2016-2019 Completed",
    },
    {
      fundingBody: "SERB (DST)",
      area: "Fault-tolerant Coordination in Infrastructure-less Network",
      faculty: "Dr. Suddhasil De",
      amount: "Rs. 20.85 lakhs",
      year: "2017- Ongoing",
    },
    {
      fundingBody:
        "Ministry of Electronics and Information Technology (MeitY), Government of India",
      area: "Information Security Education and Awareness (ISEA) - Phase 1",
      faculty:
        "Dr. G.K. Choudhary, Dr. Prabhat Kumar (CSE deptt.) (Co-chief Investigator)",
      amount: "19.32 lakhs",
      year: "2006-2014 Completed",
    },
  ],
};

const ArchiActivitypage = () => {
  const data = ArchiActivityData;
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6 text-red-700">
        Activities
      </h1>

      {/* Workshops */}
      {data.workshops.map((workshop, index) => (
        <div key={index} className="mb-8 p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
            {workshop.title}
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {workshop.content.map((item, idx) => (
              <li key={idx} className="text-gray-700">
                <span className="font-semibold">{item.name}</span> - {item.date}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Expert Lectures */}
      {data.expertLectures.map((lecture, index) => (
        <div key={index} className="mb-8 p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
            {lecture.title}
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {lecture.content.map((item, idx) => (
              <li key={idx} className="text-gray-700">
                <span className="font-semibold">{item.name}</span> -{" "}
                {item.speaker}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Projects */}
      <div className="mb-8 p-4 bg-white shadow rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
          Research Projects
        </h2>
        <div className="w-full overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-left text-sm md:text-base">
                <th className="border border-gray-300 p-2">Funding Body</th>
                <th className="border border-gray-300 p-2">Area</th>
                <th className="border border-gray-300 p-2">Faculty</th>
                <th className="border border-gray-300 p-2">Amount</th>
                <th className="border border-gray-300 p-2">Year</th>
              </tr>
            </thead>
            <tbody>
              {data.projects.map((project, idx) => (
                <tr
                  key={idx}
                  className="border border-gray-300 text-sm md:text-base"
                >
                  <td className="border border-gray-300 p-2">
                    {project.fundingBody}
                  </td>
                  <td className="border border-gray-300 p-2">{project.area}</td>
                  <td className="border border-gray-300 p-2">
                    {project.faculty}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {project.amount}
                  </td>
                  <td className="border border-gray-300 p-2">{project.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ArchiActivitypage;
