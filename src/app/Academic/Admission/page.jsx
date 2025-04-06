"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Admissions from "./Admission";

export default function InstitutePage() {
  const [activeSection, setActiveSection] = useState("SII");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get("tab") || "SII";
    setActiveSection(tab);
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section);
    updateURL(section);
  };

  const updateURL = (section) => {
    const url = new URL(window.location.href);
    url.searchParams.set("tab", section);
    window.history.pushState({}, "", url.toString());
  };

  return (
    <div className="bg-gradient-to-b from-white to-red-50 min-h-screen">
      {/* Header Tabs */}
      <header className="bg-red-600 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center gap-6">
          {[
            { label: "SII", icon: faGlobe },
            { label: "JoSAA", icon: faUserGraduate },
          ].map(({ label, icon }) => (
            <div
              key={label}
              onClick={() => handleNavigation(label)}
              className={`flex flex-col items-center justify-center px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                activeSection === label
                  ? "bg-white text-red-600 shadow-md"
                  : "bg-red-500 hover:bg-red-400"
              }`}
            >
              <FontAwesomeIcon icon={icon} size="lg" />
              <span className="mt-1 text-sm font-semibold">
                {label === "JoSAA" ? "Admission" : label}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* Content Section */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        {activeSection === "SII" && (
          <section>
            <h1 className="text-3xl font-bold text-red-700 text-center mb-10">
              Admission in UG/PG/PhD Programme via Study In India (SII)
            </h1>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Qualifications */}
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Minimum Qualifications
                </h2>
                <ul className="space-y-4 text-sm text-gray-700 list-disc list-inside">
                  <li>
                    <strong>B.Tech/DD(B.Tech+M.Tech)/B.Arch Programme:</strong>{" "}
                    PCM with 65% or Diploma in relevant branch with 65%. Valid
                    JEE(Main) score or Institute level Written Test/Interview.
                  </li>
                  <li>
                    <strong>M.Tech/M.Arch/MURP Programme:</strong> UG in any
                    branch with 65%. Valid GATE Score in relevant paper or
                    Institute level Written Test/Interview.
                  </li>
                  <li>
                    <strong>PhD:</strong> PG in any branch with 65%. Valid GATE
                    Score or Institute level Written Test/Interview.
                  </li>
                </ul>
              </div>

              {/* Schedule */}
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Admission Schedule
                </h2>
                <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                  <li>Last date of registration: 25 June 2024</li>
                  <li>
                    Scrutiny of applications (Select/Reject): 27 June 2024, 5 PM
                  </li>
                  <li>Upload missing documents: 28 June 2024, 5 PM</li>
                  <li>Admission letter confirmation: 28 June 2024</li>
                </ul>
              </div>
            </div>

            {/* Fees Table */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-red-800 mb-4">
                Course Fees
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm bg-white rounded-md border-1  border-black">
                  <thead className="bg-gray-100 text-left text-gray-700">
                    <tr>
                      <th className="p-4 border border-black">Course</th>
                      <th className="p-4 border border-black">
                        Annual Tuition Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border border-black">
                        B.Tech / BArch / MTech / MArch / MURP / PhD
                      </td>
                      <td className="p-4 border border-black space-y-1">
                        <div>SAARC: $5000/year</div>
                        <div>Non-SAARC: $8000/year</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border border-black font-semibold">
                        Total Annual Fee*
                      </td>
                      <td className="p-4 border border-black space-y-1">
                        <div>SAARC: $6779/year</div>
                        <div>Non-SAARC: $9779/year</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border border-black">
                        Miscellaneous Cost
                      </td>
                      <td className="p-4 border border-black">$100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Registration Button */}
            <div className="mt-8 flex items-center gap-4">
              <span className="font-medium text-gray-800">
                International Student Registration:
              </span>
              <a
                href="https://www.studyinindia.gov.in/admission/registrations"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Register Now
              </a>
            </div>
          </section>
        )}

        {activeSection === "JoSAA" && (
          <section>
            <h1 className="text-3xl font-bold text-red-700 text-center mb-10">
              JoSAA Admission Details
            </h1>
            <div className="grid gap-8">
              {Admissions.map((admission, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 shadow-sm rounded-xl p-6"
                >
                  {admission.heading && (
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {admission.heading}
                    </h2>
                  )}
                  {admission.title && (
                    <div className="bg-red-100 text-red-800 px-4 py-2 rounded-md mb-4 text-sm font-medium border-l-4 border-red-600">
                      {admission.title}
                    </div>
                  )}
                  <div className="space-y-4 text-sm text-gray-700">
                    {admission.data.map((item, idx) => {
                      const [title, content] = item.para.split(" : ");
                      return (
                        <div
                          key={idx}
                          className="flex flex-col md:flex-row justify-between items-start gap-2 border-b pb-4 last:border-none"
                        >
                          <div className="flex flex-col md:flex-row md:gap-6">
                            <div className="font-semibold text-gray-600 min-w-[160px]">
                              {title}:
                            </div>
                            <p>{content}</p>
                          </div>
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              className="text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-md text-xs font-medium"
                            >
                              View Details
                            </a>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
