"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faSchool, faBookOpen, faBullseye, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Suspense } from 'react'
function InstituteComponent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'about';
  const [activeSection, setActiveSection] = useState(initialTab);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && tab !== activeSection) {
      setActiveSection(tab);
    }
  }, [searchParams]);

  const handleNavigation = (section) => {
    setActiveSection(section);
    const url = new URL(window.location.href);
    url.searchParams.set('tab', section);
    window.history.pushState({}, '', url.toString());
  };

  return (
    <div className="">
      <div className=" mx-auto px-4 py-8">
        <div className="flex">
          <div className="w-24 md:w-32 flex-shrink-0">
            <div className="flex flex-row flex-wrap md:flex-col space-y-4 sticky top-20">
              {[
                { id: 'about', icon: faUserGraduate, label: 'About' },
                { id: 'mission', icon: faBullseye, label: 'Mission' },
                { id: 'values', icon: faLightbulb, label: 'Values' },
                { id: 'campus', icon: faSchool, label: 'Campus' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleNavigation(tab.id)}
                  className={`flex flex-col items-center p-3 rounded-lg transition-all duration-300 ${
                    activeSection === tab.id 
                      ? 'bg-red-700 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-red-100'
                  }`}
                >
                  <FontAwesomeIcon icon={tab.icon} className="text-xl md:text-2xl" />
                  <span className="text-xs md:text-sm font-medium mt-1">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 ml-6 md:ml-10">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
              {activeSection === 'about' && (
                <div className="p-6 md:p-10">
                  <h1 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-8">About NIT Patna</h1>
                  <div className="space-y-6 text-gray-700">
                    <p className="leading-relaxed">
                      National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. NIT Patna marked its humble beginning in 1886 with the establishment of pleaders survey training school which was subsequently promoted to Bihar College of Engineering Patna in 1924.
                    </p>
                    <p className="leading-relaxed">
                      This made this institute the 6th Oldest Engineering Institute of India. The graduate level curriculum was later elevated to the post graduate level in 1978. The institute is situated on the south bank of holy river Ganges behind Gandhi Ghat, one of the most important and reverential place of Patna.
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-700">
                      <p className="font-medium text-red-800">
                        The campus has a picturesque river view with historic building presenting a spectacle of architectural delight and natural beauty.
                      </p>
                    </div>
                    <p className="leading-relaxed">
                      National Institute of Technology Patna has been declared as an Institute of National Importance and has been granted a fully Autonomous Status by MHRD, Government of India. The Institute has also been declared as a Centre of Excellence of impart high level education training, research and development in science, engineering technology and humanities.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === 'mission' && (
                <div className="p-6 md:p-10">
                  <div className="space-y-8">
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-6">Our Vision</h1>
                      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                        <p className="text-lg font-medium text-center text-blue-800">
                          "To contribute to India and the World through excellence in scientific and technical education and research; to serve as a valuable resource for industry and society; and to remain a source of pride for all Indians."
                        </p>
                      </div>
                    </div>

                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-6">Our Mission</h1>
                      <ul className="space-y-4">
                        {[
                          "To generate new knowledge by engaging in cutting-edge research and to promote academic growth by offering state-of-the-art undergraduate, postgraduate and doctoral programmes",
                          "To identify, based on an informed perception of Indian, regional and global needs, areas of specialization upon which the Institute can concentrate",
                          "To undertake collaborative projects which offer opportunities for long term interaction with academia and industry",
                          "To develop human potential to its fullest extent so that intellectually capable and imaginatively gifted leaders can emerge in a range of profession"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block bg-red-100 text-red-800 rounded-full p-1 mr-3 mt-1">
                              <FontAwesomeIcon icon={faBullseye} className="text-sm" />
                            </span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'values' && (
                <div className="p-6 md:p-10">
                  <h1 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-8">Our Core Values</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      "Academic integrity and accountability",
                      "Respect and tolerance for the views of every individual",
                      "Attention to issues of national relevance as well as of global concern",
                      "Breadth of understanding, including knowledge of the human sciences",
                      "Appreciation of intellectual excellence and creativity",
                      "An unfettered spirit of exploration, rationality and enterprise"
                    ].map((value, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-start">
                        <span className="inline-block bg-red-100 text-red-800 rounded-full p-2 mr-3">
                          <FontAwesomeIcon icon={faLightbulb} />
                        </span>
                        <p className="text-gray-700">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'campus' && (
                <div className="p-6 md:p-10">
                  <h1 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-8">Our Campus</h1>
                  <div className="space-y-6 text-gray-700">
                    <p className="leading-relaxed">
                      NIT Patna is situated on the South bank of river Ganges behind Gandhi Ghat, one of the most important and sacred places of Patna. The Institute campus is 8 Km from the Patna junction railway station and 20 Km from the Jai Prakash Narayan International Airport, Patna.
                    </p>
                    <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                      <p className="font-medium text-amber-800">
                        The entrance to the institute is from Ashok Rajpath and it is about 3Km from the famous Gandhi Maidan.
                      </p>
                    </div>
                    <p className="leading-relaxed">
                      The Institute is residential in nature and provides residential facilities to its students as well as teachers as per availability. Its large campus has a picturesque river view with eye-catching historic buildings presenting a spectacle of architectural and natural beauty.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InstituteComponent />
    </Suspense>
  );
}