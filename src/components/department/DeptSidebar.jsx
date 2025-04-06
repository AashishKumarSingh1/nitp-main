"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import getNavItems from "./DeptNavItems";

export default function DepartmentSidebar({ dept }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const navItems = getNavItems(dept);

  const toggleSubmenu = (title) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Toggle button on mobile */}
      <div className="fixed top-4 left-4 z-50 md:hidden" ref={menuButtonRef}>
        <button
          className="bg-red-700 text-white p-3 rounded-full shadow-lg"
          onClick={toggleSidebar}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-[#F8F0EE] border-r border-[#E8D0CB] z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:h-auto md:block`}
      >
        <div className="p-4 bg-red-700 text-white">
          <h3 className="font-bold text-lg">Department Menu</h3>
        </div>
        <nav className="p-2 overflow-y-auto h-[calc(100vh-64px)] md:h-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="flex items-center justify-between w-full p-2 rounded-md hover:bg-[#E8D0CB] text-red-700 font-medium"
                    >
                      <span className="flex items-center gap-2">
                        {item.icon}
                        {item.name}
                      </span>
                      {openSubmenu === item.name ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      )}
                    </button>
                    <ul
                      className={`ml-6 mt-1 space-y-2 overflow-hidden transition-all duration-200 ${
                        openSubmenu === item.name
                          ? "max-h-40 overflow-y-auto"
                          : "max-h-0"
                      }`}
                    >
                      {item.dropdown.map((subitem) => (
                        <li key={subitem.name}>
                          <Link
                            href={subitem.url}
                            className="block p-2 rounded-md hover:bg-[#E8D0CB] text-[#8B3A32]"
                            onClick={closeSidebar}
                          >
                            {subitem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={item.url}
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-[#E8D0CB] text-red-700 font-medium"
                    onClick={closeSidebar}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
