"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { navItems } from "./landing/navItems";
import { BoldIcon, ChevronDown, Menu, X } from "lucide-react";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { IoIosArrowDown, IoIosArrowDropright } from "react-icons/io";
import "@/components/styles/navbar.css";
import NewDropdown from "./landing/newDropdown";

export const Topbar = () => {
  const rightSide = [
    { href: "/Notices/jobsNitp", text: "Jobs@NITP" },
    {
      href: "https://paydirect.eduqfix.com/app/mnYv9Q6+C+3lIMqghRCwdaqVZusPrJtq2RGJrJFnKnmtz3KBqtsEFPVrZFvoPubG/3466",
      text: "Fee Payment",
    },
    { href: "/academic/intranet", text: "Intranet" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/story.php?story_fbid=704954328428607&id=100067421393593&mibextid=K8Wfd2",
      src: "/facebook.png",
      alt: "Facebook",
    },
    {
      href: "https://twitter.com/nitpatna1/status/1749690769500430475?s=48",
      src: "/twitter.svg",
      alt: "Twitter",
    },
    {
      href: "https://www.linkedin.com/school/national-institute-of-technology-patna/",
      src: "/linkedin.svg",
      alt: "LinkedIn",
    },
    {
      href: "https://goo.gl/maps/srZ6whpfDGqg85sp6",
      src: "/location.png",
      alt: "Location",
    },
  ];

  return (
    <div className="flex justify-between items-center bg-black/80  text-white w-full py-1 px-4 md:px-6">
      <div className="flex space-x-2 md:text-sm text-xs gap-3">
        {rightSide.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-white hover:underline hover:underline-offset-2 font-semibold"
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div className="flex space-x-2">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={link.src}
              alt={link.alt}
              width={24}
              height={24}
              className="w-5 h-5 md:w-6 md:h-6 transition-transform transform hover:scale-110 duration-200 ease-in-out"
              priority
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export const Middle = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` w-full transition-all duration-300 backdrop-blur-2xl ${
        isScrolled ? "backdrop-blur-xl bg-white/60" : "bg-white/80"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-1">
        {/* mobile */}
        <div className="flex md:hidden items-center justify-between w-full">
          <Link href="/">
            <Image
              src={"/nitp-logo.svg"}
              alt="NIT PATNA"
              width={50}
              height={50}
              className={`transition-transform duration-500  ${
                isScrolled ? "scale-80" : "scale-100"
              }`}
            />
          </Link>
          <div className="flex flex-col text-center leading-tight">
            <span className="text-[0.85rem] font-semibold text-gray-900 tracking-wide">
              राष्ट्रीय प्रौद्योगिकी संस्थान पटना
            </span>
            <span className="text-[0.75rem] text-gray-700">
              NATIONAL INSTITUTE OF TECHNOLOGY PATNA
            </span>
          </div>
        </div>

        {/* laptop */}
        <div
          className={`hidden md:flex items-center justify-between w-full transition-all duration-500 ease-in-out 
    ${isScrolled ? "h-16" : "h-24"}`}
        >
          {/* Left Content */}
          <div className="text-gray-900 transition-all duration-500 ease-in-out">
            <h1 className="text-xl font-semibold tracking-wide">
              राष्ट्रीय प्रौद्योगिकी संस्थान पटना
            </h1>
            <p className="text-md text-gray-700">
              NATIONAL INSTITUTE OF TECHNOLOGY PATNA
            </p>
          </div>

          <Link href="/">
            <Image
              src={"/nitp-logo.svg"}
              alt="NIT PATNA"
              width={90}
              height={90}
              className={`transition-transform duration-300 hover:scale-110 m-2 ${
                isScrolled
                  ? "scale-75 -translate-y-1 "
                  : "scale-105 translate-y-0 border-rose-700"
              }`}
            />
          </Link>

          <div className="text-center text-gray-800 transition-all duration-500 ease-in-out">
            <p className="text-md font-medium">
              An Institute of National Importance
            </p>
            <p className="text-sm text-gray-600">
              (Under Ministry of Education, Govt. of India)
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export const BottomNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`bg-red-700 backdrop-blur-xl text-white xl:px-6 ${
          isScrolled
            ? "py-1 transition-transform duration-500"
            : "py-2 transition-transform duration-500 w-full"
        } md:flex hidden md:gap-0 xl:gap-6 items-center justify-evenly transition duration-300 ease-in-out  mx-auto w-full`}
      >
        {navItems.map((item, index) =>
          item.dropdown ? (
            <NewDropdown
              key={index}
              title={item.name}
              items={item.dropdown}
              icon={item.icon}
            />
          ) : (
            <Link
              key={index}
              href={item.url}
              className="flex items-center gap-2 hover:opacity-80"
            >
              {item.icon}
              {item.name}
            </Link>
          )
        )}
      </nav>

      <div className="md:hidden flex items-center justify-end bg-red-700 text-white px-4 py-3">
        <button onClick={() => setSideMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-red-800 text-white shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setSideMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>


        <div className="flex flex-col gap-2 px-6">
          {navItems.map((item, index) =>
            item.dropdown ? (
              <Dropdown
                key={index}
                title={item.name}
                items={item.dropdown}
                icon={item.icon}
                mobile
              />
            ) : (
              <Link
                key={index}
                href={item.url}
                className="flex items-center gap-2 py-2 hover:bg-red-900 rounded-md px-3"
                // onClick={() => setIsMobileMenuOpen(false)}
                onClick={() => setSideMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            )
          )}
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
      {/* <BoldIcon
            onClick={() => setSideMenuOpen(true)} 
            className="cursor-pointer text-3xl md:hidden text-black ml-auto" 
          /> */}
      {isSideMenuOpen && (
        <MobileNav
          closeSideMenu={() => setSideMenuOpen(false)}
          navItems={navItems}
        />
      )}
    </>
  );
};

function MobileNav({ closeSideMenu }) {
  return (
    <div className="mobile-nav text-black">
      <div className="mobile-nav-content text-black">
        <AiOutlineClose
          onClick={closeSideMenu}
          className="mobile-nav-close text-4xl text-black z-[1000]"
        />
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((item, index) => (
            <SingleNavItem
              key={index}
              item={item}
              closeSideMenu={closeSideMenu}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleNavItem({ item, closeSideMenu }) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItemOpen] = useState(false);

  return (
    <div ref={animationParent} className="relative px-1 py-3 transition-all">
      <p
        onClick={() => setItemOpen(!isItemOpen)}
        className="flex cursor-pointer items-center gap-2 text-neutral-900 group-hover:text-black"
      >
        {item.icon}
        <Link href={"#"} onClick={closeSideMenu}>
          {item.name}
        </Link>
        {item.dropdown && (
          <IoIosArrowDown
            className={`text-xs transition-all ${isItemOpen && "rotate-180"}`}
          />
        )}
      </p>
      {isItemOpen && item.dropdown && (
        <div className="w-auto flex-col gap-1  bg-neutral-50 py-3 transition-all flex">
          {item.dropdown.map((child, index) => (
            <SubSidemenu key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
}
function SubSidemenu({ item, closeSideMenu }) {
  const [isSubItemOpen, setSubItemOpen] = useState(false);
  const [isItemOpen, setItemOpen] = useState(true);
  const handleSubToggle = () => {
    setSubItemOpen(!isSubItemOpen);
  };

  return (
    <div className="relative px-1 py-1 transition-all ">
      <p
        onClick={handleSubToggle}
        className="flex cursor-pointer items-center gap-1 text-neutral-700 group-hover:text-black"
      >
        {item.icon}
        <Link href={item.url ?? "#"} onClick={closeSideMenu}>
          <span>{item.name}</span>
        </Link>
        {item.dropdown && (
          <IoIosArrowDown
            className={`text-xs transition-all ${
              isSubItemOpen && "rotate-180"
            } `}
          />
        )}
      </p>
      {isSubItemOpen && item.dropdown && (
        <div className="w-auto flex-col gap-1 bg-white py-1 transition-all text-sm">
          {item.dropdown.map((subChild, index) => (
            <p key={index} className="flex pl-4">
              {item.icon}
              <Link
                href={subChild.url ?? "#"}
                className="flex cursor-pointer items-center py-1 text-neutral-700 hover:text-black pl-1"
              >
                <span>{subChild.name}</span>
              </Link>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export const Dropdown = ({ title, items, icon, mobile = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const dropdownRef = useRef(null);
  const subDropdownRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState("top-full left-0");
  const [subDropdownPosition, setSubDropdownPosition] =
    useState("left-full top-0");

  useEffect(() => {
    if (isHovered && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;

      let newPosition = "top-full left-0";
      if (rect.bottom > screenHeight) {
        newPosition = "bottom-full left-0";
      }
      if (rect.right + 500 > screenWidth) {
        newPosition = "top-full right-0";
      }

      setDropdownPosition(newPosition);
    }
  }, [isHovered]);

  useEffect(() => {
    if (hoveredItem !== null && subDropdownRef.current) {
      const rect = subDropdownRef.current.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;

      let newPosition = "left-full top-0";
      if (rect.right > screenWidth) {
        newPosition = "right-full top-0";
      }
      if (rect.bottom > screenHeight) {
        newPosition = "left-full bottom-0";
      }

      setSubDropdownPosition(newPosition);
    }
  }, [hoveredItem]);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-1 cursor-pointer py-2 xl:px-4 rounded-md hover:bg-red-800 transition duration-200">
        <span className="font-medium">{title}</span>
        <ChevronDown
          size={18}
          className="transition-transform duration-300 group-hover:rotate-180"
        />
      </div>
      {isHovered && (
        <div
          ref={dropdownRef}
          className={`absolute ${dropdownPosition} w-[250px] bg-white shadow-lg border border-gray-200 z-50 rounded-lg transition-all duration-300 opacity-100 scale-100 max-h-[65vh] overflow-y-auto`}
        >
          <div className="py-3 px-4 flex flex-col gap-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.url}
                  className="flex items-center justify-between px-4 py-2 text-gray-800 rounded-md hover:bg-gray-100 transition duration-200"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.name}
                  </div>
                  {item.dropdown?.length > 0 && <ChevronDown size={16} />}
                </Link>
                {hoveredItem === index && item.dropdown?.length > 0 && (
                  <div
                    ref={subDropdownRef}
                    className={`absolute top-full left-0 w-[200px] bg-white shadow-lg border border-gray-200 z-50 rounded-lg transition-all duration-300 opacity-100 scale-100 max-h-[30vh] overflow-y-auto`}
                  >
                    <div className="py-2 absolute">
                      {item.dropdown.map((dlr, i) => (
                        <Link
                          key={i}
                          href={dlr.url}
                          className="block px-4 py-2 text-gray-800 rounded-md hover:bg-gray-100 transition duration-200"
                        >
                          {dlr.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
