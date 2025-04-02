"use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import CountUp from "react-countup";
import { ProjectCard } from "./projectCard";
import { PublicationCard } from "./publicationCard";
import {
  Activity,
  Briefcase,
  BookOpen,
  Cpu,
  Users,
  Loader2,
} from "lucide-react";
import ResearchName from "./researchName";

const Research = () => {
  const [researchData, setResearchData] = useState({
    patents: 0,
    books: 0,
    journals: 0,
    conferences: 0,
    articles: 0,
    projectCount: 0,
  });
  const [recentProjects, setRecentProjects] = useState([]);
  const [recentPublications, setRecentPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollingPublications, setScrollingPublications] = useState(true);
  const [scrollingProjects, setScrollingProjects] = useState(true);
  const publicationRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [publicationsRes, projectsRes, patentsRes] = await Promise.all([
          axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/publications?type=all`
          ),
          axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/project?type=count`
          ),
          axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/patent?type=count`
          ),
        ]);

        const publications = publicationsRes.data;
        const projectCount = projectsRes.data.projectCount || 0;
        const patentCount = patentsRes.data.patentCount || 0;

        const counts = publications.reduce(
          (acc, pub) => {
            if (pub.conference_name) acc.conferences++;
            if (pub.publisher || pub.isbn) acc.books++;
            if (pub.journal_name || pub.doi_url) acc.articles++;
            return acc;
          },
          { books: 0, conferences: 0, articles: 0 }
        );

        setResearchData({ ...counts, projectCount, patents: patentCount });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching research data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchRecentPublications = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/publications?type=all`
        );
        const recentPubs = response.data.filter(
          (paper) =>
            paper.journal_quartile === "Q1" &&
            (paper.publication_year === 2024 || paper.publication_year === 2025)
        );
        setRecentPublications(recentPubs);
      } catch (error) {
        console.error("Error fetching publications:", error);
      }
    };

    fetchRecentPublications();
  }, []);

  useEffect(() => {
    const fetchRecentProjects = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/project?type=all`
        );
        setRecentProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchRecentProjects();
  }, []);

  useEffect(() => {
    const publicationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setScrollingPublications(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setScrollingProjects(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (publicationRef.current)
      publicationObserver.observe(publicationRef.current);
    if (projectsRef.current) projectObserver.observe(projectsRef.current);

    return () => {
      if (projectsRef.current) projectObserver.unobserve(projectsRef.current);
      if (publicationRef.current)
        publicationObserver.unobserve(publicationRef.current);
    };
  }, []);

  useEffect(() => {
    const scrollSection = (ref, shouldScroll) => {
      if (!ref.current) return;

      const scroll = () => {
        if (shouldScroll && ref.current) {
          ref.current.scrollTop += 1;
          if (
            ref.current.scrollTop >=
            ref.current.scrollHeight - ref.current.clientHeight
          ) {
            ref.current.scrollTop = 0;
          }
        }
      };

      const interval = setInterval(scroll, 30);
      return () => clearInterval(interval);
    };

    const publicationScroll = scrollSection(
      publicationRef,
      scrollingPublications
    );
    const projectScroll = scrollSection(projectsRef, scrollingProjects);

    return () => {
      publicationScroll();
      projectScroll();
    };
  }, [scrollingProjects, scrollingPublications]);

  const handleMouseEnterPublications = () => setScrollingPublications(false);
  const handleMouseLeavePublications = () => setScrollingPublications(true);
  const handleMouseEnterProjects = () => setScrollingProjects(false);
  const handleMouseLeaveProjects = () => setScrollingProjects(true);

  return (
    <section className="py-12 bg-[#f3f0eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ResearchName />
        <p className="text-lg text-center text-gray-600 mb-12">
          Driving innovation through cutting-edge research
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
          {isLoading ? (
            Array(5)
              .fill(0)
              .map((_, i) => <StatCardSkeleton key={i} />)
          ) : (
            <>
              <StatCard
                title="Patents"
                icon={<Activity className="w-6 h-6" />}
                value={researchData.patents}
              />
              <StatCard
                title="Books"
                icon={<BookOpen className="w-6 h-6" />}
                value={researchData.books}
              />
              <StatCard
                title="Projects"
                icon={<Briefcase className="w-6 h-6" />}
                value={researchData.projectCount}
              />
              <StatCard
                title="Articles"
                icon={<Users className="w-6 h-6" />}
                value={researchData.articles}
              />
              <StatCard
                title="Conferences"
                icon={<Cpu className="w-6 h-6" />}
                value={researchData.conferences}
              />
            </>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            onMouseEnter={handleMouseEnterPublications}
            onMouseLeave={handleMouseLeavePublications}
          >
            <div className="bg-gradient-to-r from-red-700 to-red-600 py-3 px-6 rounded-t-lg shadow-sm">
              <h3 className="text-lg font-semibold text-white text-center tracking-wide flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Recent Publications
              </h3>
            </div>

            <div
              ref={publicationRef}
              className="h-[400px] overflow-y-auto p-5 bg-rose-50 border-l border-r border-b border-gray-200 rounded-b-lg"
            >
              {recentPublications.length > 0 ? (
                <div className="space-y-3">
                  {recentPublications.map((publication, index) => (
                    <PublicationCard
                      key={index}
                      year={publication.publication_year}
                      authors={publication.authors}
                      journalName={publication.journal_name}
                      title={publication.title}
                      journalQuartile={publication.journal_quartile}
                      volume={publication.volume}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full p-6 bg-white rounded-md border border-gray-200 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-gray-400 mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-600 font-medium">
                    No publications available
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    New publications will appear here when available
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            onMouseEnter={handleMouseEnterProjects}
            onMouseLeave={handleMouseLeaveProjects}
          >
            <div className="bg-gradient-to-r from-red-700 to-red-600 py-3 px-6 rounded-t-lg shadow-sm">
              <h3 className="text-lg font-semibold text-white text-center tracking-wide flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                Research Projects
              </h3>
            </div>

            <div
              ref={projectsRef}
              className="h-[400px] overflow-y-auto p-5 bg-rose-50 border border-t-0 border-gray-200 rounded-b-lg"
            >
              {recentProjects.length > 0 ? (
                <div className="space-y-3">
                  {recentProjects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      project_title={project.project_title}
                      facultyName={project.investigators}
                      sponsor={project.funding_agency}
                      amount={project.financial_outlay}
                      start={project.start_date}
                      end={project.end_date}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full p-6 bg-white rounded-md border border-gray-200 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-gray-400 mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-600 font-medium">
                    No active research projects
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    New projects will appear here when available
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const StatCard = ({ title, icon, value }) => (
  <div className="bg-gradient-to-br from-red-700 to-red-800 rounded-lg p-6 flex flex-col items-center text-white shadow-md hover:shadow-lg transition-all duration-300">
    <div className="p-3 bg-white/20 rounded-full mb-3">{icon}</div>
    <h3 className="text-sm font-medium mb-1">{title}</h3>
    <span className="text-2xl font-bold">
      <CountUp end={value} duration={2.5} />
    </span>
  </div>
);
const StatCardSkeleton = () => (
  <div className="bg-gray-200 rounded-lg p-6 flex flex-col items-center animate-pulse">
    <div className="w-12 h-12 bg-gray-300 rounded-full mb-3"></div>
    <div className="h-4 w-16 bg-gray-300 rounded mb-2"></div>
    <div className="h-6 w-8 bg-gray-300 rounded"></div>
  </div>
);

export default Research;
