"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FileText, Download, Calendar, AlertCircle, Loader2 } from 'lucide-react';

const NoticeCard = ({ detail, time, attachments, notice_link }) => {
  const parsedNoticeLink = notice_link ? JSON.parse(notice_link) : null;

  return (
    <div className="notice bg-white rounded-xl p-6 mb-6 shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-red-100">
      <div className="flex items-start gap-4">
        <div className="bg-red-50 p-3 rounded-lg">
          <FileText className="w-6 h-6 text-red-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-gray-900 text-lg mb-3 font-semibold">{detail}</h3>
          
          <div className="flex items-center gap-2 mb-4 text-gray-600 text-sm">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span>{new Date(time).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>

          <div className="space-y-3">
            {attachments && attachments.length > 0 && (
              <div className="space-y-2">
                {attachments.map((attachment, index) => (
                  <a
                    key={index}
                    href={attachment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-red-600 hover:text-red-700 transition-colors px-3 py-2 bg-red-50 rounded-md hover:bg-red-100"
                  >
                    <Download className="w-4 h-4" />
                    <span>{attachment.caption || "Download Attachment"}</span>
                  </a>
                ))}
              </div>
            )}

            {parsedNoticeLink && (
              <a
                href={parsedNoticeLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-red-600 hover:text-red-700 transition-colors px-3 py-2 bg-red-50 rounded-md hover:bg-red-100"
              >
                <Download className="w-4 h-4" />
                <span>View Notice</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <Loader2 className="w-12 h-12 text-red-600 animate-spin mb-4" />
    <p className="text-gray-600">Loading tenders...</p>
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="flex flex-col items-center justify-center py-20 text-center">
    <div className="bg-red-100 p-5 rounded-full mb-6">
      <AlertCircle className="w-10 h-10 text-red-600" />
    </div>
    <h3 className="text-xl font-medium text-gray-900 mb-2">Something went wrong</h3>
    <p className="text-gray-600 max-w-md">{message}</p>
    <button 
      onClick={() => window.location.reload()}
      className="mt-6 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
    >
      Try Again
    </button>
  </div>
);

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-20 text-center">
    <div className="bg-gray-100 p-5 rounded-full mb-6">
      <FileText className="w-10 h-10 text-gray-500" />
    </div>
    <h3 className="text-xl font-medium text-gray-900 mb-2">No Tenders Available</h3>
    <p className="text-gray-600 max-w-md">
      There are currently no active tenders. Please check back later for updates.
    </p>
  </div>
);

const Page = () => {
  const [tender, setTender] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const academicsUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=tender`;
        const response = await axios.get(academicsUrl);
        setTender(response.data.filter((notice) => notice.notice_type === "tender"));
        setIsLoading(false);
      } catch (e) {
        console.error("Error fetching notices:", e);
        setIsLoading(false);
        setFetchError(true);
      }
    };

    fetchTenders();
  }, []);

  return (
    <div className=" min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tenders</h1>
          <p className="text-gray-600">
            Current and upcoming tender notices from the institution
          </p>
        </div>

        {isLoading ? (
          <LoadingSpinner />
        ) : fetchError ? (
          <ErrorMessage message="Sorry, we couldn't fetch the latest tender notices. Please try again later." />
        ) : (
          <div className="space-y-6">
            {tender.length === 0 ? (
              <EmptyState />
            ) : (
              tender.map((notice) => {
                const { title, timestamp, id, attachments, notice_link } = notice;
                return (
                  <NoticeCard
                    detail={title}
                    time={timestamp}
                    key={id}
                    attachments={attachments}
                    notice_link={notice_link}
                  />
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;