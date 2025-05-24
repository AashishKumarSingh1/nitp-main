import React from "react";
import DeptSidebar from "@/components/department/DeptSidebar";
import { Topbar, Middle, BottomNav } from "@/components/navbar";
import Footer from "@/components/footer";
import Imagefooter from "@/components/Imagefooter";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/loadingSpinner";
import ErrorBoundary from "@/components/errorBoundary";

export default function CSELayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">

        {/* Sidebar Button Below BottomNav */}
        <div className="relative md:hidden flex justify-start">
          <DeptSidebar dept="CSE" />
        </div>

        <div className="flex min-h-screen">
          {/* Sidebar (Visible in Desktop) */}
          <DeptSidebar dept="CSE" />

          {/* Main Content */}
          <div className="md:w-[85%] overflow-auto p-2">
            <h2 className="text-center px-2 text-4xl lg:text-5xl mt-2 text-red-700 uppercase">
              Computer Science And Engineering
            </h2>
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </body>
    </html>
  );
}
