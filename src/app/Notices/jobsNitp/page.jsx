"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Noticecard } from "@/components/notice/noticeCard";
import { LoadingSpinner } from "@/components/loadingSpinner";

const Page = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [activeFilter, setActiveFilter] = useState("facultystaffjob");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=all`;
        const response = await axios.get(jobsUrl);
        const visibleJobs = response.data.filter((notice) => notice.isVisible === 1);
        setJobs(visibleJobs);
        setFilteredJobs(visibleJobs.filter((job) => job.notice_type === "facultystaffjob")); // Default filter
      } catch (e) {
        console.error("Error fetching Jobs notices:", e);
        setFetchError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setFilteredJobs(jobs.filter((job) => job.notice_type === filter));
  };

  return (
    <div className="relative flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/4 bg-gray-100 border-r overflow-y-auto">
          <div className="sticky top-0 p-4">
            <ul className="space-y-2">
              <li>
                <button
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeFilter === "facultystaffjob" ? "bg-red-800 text-white" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => handleFilterChange("facultystaffjob")}
                >
                  Faculty/Staff Jobs
                </button>
              </li>
              <li>
                <button
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeFilter === "tender" ? "bg-red-800 text-white" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => handleFilterChange("tender")}
                >
                  Tenders
                </button>
              </li>
              <li>
                <button
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeFilter === "jrfsrf" ? "bg-red-800 text-white" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => handleFilterChange("jrfsrf")}
                >
                  JRF/SRF
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-6 md:p-10 overflow-y-auto">

          {isLoading ? (
            <LoadingSpinner />
          ) : fetchError ? (
            <ErrorMessage message="Sorry, failed to fetch the latest job notices." />
          ) : filteredJobs.length === 0 ? (
            <NoDataMessage message="No job notices available for the selected filter." />
          ) : (
            <div className="space-y-4 max-w-[80vw] mx-auto overflow-auto ring-2ring-rose-600 p-7 rounded-l-2xl">
              {filteredJobs.map((notice) => (
                <Noticecard
                  key={notice.id}
                  detail={notice.title}
                  time={notice.timestamp}
                  attachments={notice.attachments}
                  imp={notice.important}
                  link={notice.notice_link ? JSON.parse(notice.notice_link).url : ""}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

export const ErrorMessage = ({ message }) => (
  <div className="flex justify-center items-center flex-col text-center text-red-500">
    <svg
      width="60px"
      height="60px"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="mb-2"
    >
      <path d="M3 0c-1.66 0-3 1.34-3 3v7c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3H3zm0 2h10c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1zm3 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM8 7c-1.43 0-2.75.76-3.46 2-.13.24-.05.54.18.68.23.14.55.05.68-.18.54-.93 1.52-1.5 2.6-1.5s2.06.57 2.6 1.5c.14.24.44.32.68.18.23-.14.32-.44.18-.68-.71-1.24-2.03-2-3.46-2zm-3 7c-1.1 0-2 .89-2 2h10c0-1.1-.89-2-2-2z" />
    </svg>
    <p>{message}</p>
  </div>
);

export const NoDataMessage = ({ message }) => (
  <div className="flex justify-center items-center flex-col text-center text-gray-500">
    <svg
      width="60px"
      height="60px"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="mb-2"
    >
      <path d="M8 1a7 7 0 1 0 7 7 7 7 0 0 0-7-7zm0 12.5A5.5 5.5 0 1 1 13.5 8 5.51 5.51 0 0 1 8 13.5zM8 4a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm1 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
    </svg>
    <p>{message}</p>
  </div>
);


