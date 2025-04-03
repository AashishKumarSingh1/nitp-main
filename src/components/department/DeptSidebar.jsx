"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import getNavItems from "./DeptNavItems";

export default function DepartmentSidebar({ dept }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [topOffset, setTopOffset] = useState(0);
  const menuButtonRef = useRef(null);
  const navItems = getNavItems(dept);

  useEffect(() => {
    if (menuButtonRef.current) {
      const rect = menuButtonRef.current.getBoundingClientRect();
      setTopOffset(rect.bottom -50); // Position sidebar just below the button
    }
  }, [isOpen]);

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
      {/* Sidebar Toggle Button for Mobile */}
      <div className="fixed left-4 z-50 md:hidden" ref={menuButtonRef}>
        <button
          className="bg-red-700 text-white p-3 rounded-full shadow-lg"
          onClick={toggleSidebar}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:relative left-0 min-h-screen w-64 bg-[#F8F0EE] border-r border-[#E8D0CB] transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
        style={{
          top: `${isOpen ? topOffset : 0}px`,
          height: "calc(100% - " + topOffset + "px)",
        }}
      >
        <div className="p-4 bg-red-700 text-white">
          <h3 className="font-bold text-lg">Department Menu</h3>
        </div>
        <nav className="p-2">
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
                        openSubmenu === item.name ? "max-h-40 overflow-y-auto" : "max-h-0"
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

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
