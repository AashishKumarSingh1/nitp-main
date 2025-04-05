import React from "react";
import DeptSidebar from "@/components/department/DeptSidebar";
import { Topbar, Middle, BottomNav } from "@/components/navbar";
import Footer from "@/components/footer";
import Imagefooter from "@/components/Imagefooter";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/loadingSpinner";
import ErrorBoundary from "@/components/errorBoundary";

export default function MechatronicsLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">

        {/* Sidebar Button Below BottomNav */}
        <div className="relative md:hidden flex justify-start">
          <DeptSidebar dept="Mechatronics" />
        </div>

        <div className="flex min-h-screen">
          {/* Sidebar (Visible in Desktop) */}
          <DeptSidebar dept="Mechatronics" />

          {/* Main Content */}
          <div className="flex-1 overflow-auto p-4">
            <h2 className="text-center px-2 text-4xl lg:text-5xl mt-2 text-red-700 uppercase">
              Mechatronics and Automation
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
