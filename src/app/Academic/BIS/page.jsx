"use client";
import React, { useEffect, useState } from "react";
import { ExternalLink } from 'lucide-react';

const BISdashboard = () => {
  const uri = "https://www.services.bis.gov.in/php/BIS_2.0/dgdashboard/Standards_master/get_academic_dashboard_banner_scroll_items/";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = new FormData();
        formData.append("Instemailid", "amit@nitp.ac.in");
        formData.append("Loginid", "bisscmd");
        formData.append("Loginpwd", "SNr@12#$%&!Rk");

        const res = await fetch(uri, {
          method: "POST",
          body: formData,
        });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await res.json();
        if (result.status === "success" && Array.isArray(result.banner_scroll_data)) {
          setData(result.banner_scroll_data);
        } else {
          setError("Unexpected data format");
        }
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-700 text-center">
          BIS Dashboard
        </h1>

        {loading ? (
          <div className="flex justify-center items-center">
            <svg
              version="1.1"
              id="L1"
              height="150px"
              width="150px"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enableBackground="new 0 0 100 100"
            >
              <circle
                fill="none"
                stroke="#f87171"
                strokeWidth="6"
                strokeMiterlimit="15"
                strokeDasharray="14.2472,14.2472"
                cx="50"
                cy="50"
                r="47"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="5s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                fill="none"
                stroke="#f87171"
                strokeWidth="1"
                strokeMiterlimit="10"
                strokeDasharray="10,10"
                cx="50"
                cy="50"
                r="39"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="5s"
                  from="0 50 50"
                  to="-360 50 50"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center">
            <div className="text-center">
              <p className="text-red-500">Sorry, Error Occurred - {error}</p>
              <p className="text-red-500">Try Refreshing the Tab</p>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg shadow-md border border-gray-100">
            <div className="overflow-x-auto max-h-[700px]">
              <table className="w-full border-collapse bg-white">
                <thead className="sticky top-0 z-10">
                  <tr className="bg-red-700 text-white">
                    <th className="text-left px-6 py-4 font-semibold">S.No.</th>
                    <th className="text-left px-6 py-4 font-semibold">Title</th>
                    <th className="text-left px-6 py-4 font-semibold">Description</th>
                    <th className="text-left px-6 py-4 font-semibold">Date</th>
                    <th className="text-center px-6 py-4 font-semibold w-48">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="text-left px-6 py-4 text-gray-800">{index + 1}</td>
                      <td className="text-left px-6 py-4 text-gray-800">{item.title}</td>
                      <td className="text-left px-6 py-4 text-gray-800">{item.description}</td>
                      <td className="text-left px-6 py-4 text-gray-800">{item.created_at}</td>
                      <td className="text-center px-6 py-4">
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View
                          </a>
                        ) : (
                          <span className="text-gray-400">N/A</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const BISpage = () => (
  <BISdashboard url="faculties" title="BIS Dashboard" />
);

export default BISpage;