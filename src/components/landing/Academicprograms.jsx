"use client"
import React from "react";

const AcademicPrograms = () => {
  const programs = [
    {
      category: "Undergraduate Programs",
      icon: "🎓",
      items: [
        { name: "B.Tech", link: "/academics/btech" },
        { name: "B.Sc.-B.Ed.", link: "/academics/bsc-bed" },
      ],
    },
    {
      category: "Postgraduate Programs",
      icon: "📚",
      items: [
        { name: "M.Tech", link: "/academics/mtech" },
        { name: "M.Sc", link: "/academics/msc" },
        { name: "MBA", link: "/academics/mba" },
      ],
    },
    {
      category: "Doctoral Programs",
      icon: "🔬",
      items: [
        { name: "Ph.D", link: "/academics/phd" },
      ],
    },
  ];

  return (
    <section className="relative bg-gray-900 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-gray-900 to-purple-900/20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-yellow-400/10 blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-blue-400/10 blur-xl animate-float-delay"></div>
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block mb-3 text-yellow-400 text-sm font-semibold tracking-widest uppercase">
            ACADEMIC OFFERINGS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Our <span className="text-yellow-400">Programs</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed">
            Discover comprehensive education pathways designed to shape future leaders and innovators
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="relative bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-yellow-400 rounded-bl-full"></div>
              <div className="text-4xl mb-4 text-yellow-400">{program.icon}</div>
              
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-yellow-400 transition-colors">
                {program.category}
              </h3>
              
              <div className="space-y-3">
                {program.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={item.link}
                    className="flex items-center px-5 py-3 bg-gray-700/50 hover:bg-gradient-to-r from-yellow-500 to-yellow-600 hover:text-gray-900 text-gray-200 rounded-lg transition-all duration-300 font-medium group/item"
                  >
                    <span className="flex-grow">{item.name}</span>
                    <span className="opacity-0 group-hover/item:opacity-100 transform group-hover/item:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </a>
                ))}
              </div>
              
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/5 via-transparent to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float 8s ease-in-out 2s infinite; }
      `}</style>
    </section>
  );
};

export default AcademicPrograms;