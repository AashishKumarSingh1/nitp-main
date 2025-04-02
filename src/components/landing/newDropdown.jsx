import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const NewDropdown = ({ title, items, icon, isSubmenu = false }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="relatuve group">
      {!isSubmenu && (
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-red-800 transition-all duration-200 rounded-md ">
          {/* {icon} */}
           <span>{title}</span>
          {items.length > 0 && <ChevronRight size={16} className="ml-auto" />}
        </button>
      )}
      {items.length > 0 && (
        <div className="absolute flex flex-col top-full w-fit bg-white backdrop-blur-md shadow-lg border border-gray-200 py-2 px-2 max-w-screen text-black  group-hover:opacity-100 group-hover:visible transition-all duration-200 invisible text-nowrap rounded-2xl text-[15px]">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <Link
                href={item.url}
                className="flex items-center gap-2 px-4 py-1 hover:bg-gray-100 transition tex-sm"
              >
                {item.icon}
                <span>{item.name}</span>
                {item.dropdown && <ChevronRight size={16} className="ml-auto" />}
              </Link>
              {item.dropdown && openIndex === index && (
                <div className="absolute flex flex-col left-full top-0 bg-white/70 backdrop-blur-md shadow-lg border border-gray-300 rounded-md w-[56]">
                  <NewDropdown items={item.dropdown} isSubmenu={true} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewDropdown;

