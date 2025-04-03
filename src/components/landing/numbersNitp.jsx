import React from "react";

const NumbersNitp = () => {
  const stats = [
    { label: "Students", value: "7000+", icon: "👨‍🎓" },
    { label: "Faculty & Staff", value: "500+", icon: "👩‍🏫" },
    { label: "Academic Departments", value: "10+", icon: "🏛️" },
    { label: "Student Clubs", value: "20+", icon: "🎭" },
    { label: "Incubated Startups", value: "12+", icon: "🚀" },
    { label: "PhD Scholars", value: "200+", icon: "🔬" },
  ];

  return (
    <section className="relative bg-gray-900 py-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-20 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Building India's <span className="text-yellow-400">Technical Future</span>
              </h2>
              <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                National Institute of Technology Patna stands among India's premier technical 
                institutions, fostering innovation and leadership through comprehensive 
                education and research.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {stats.slice(0, 4).map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-5">
              {stats.slice(4, 6).map((stat, index) => (
                <StatCard key={index + 4} stat={stat} index={index + 4} />
              ))}
            </div>
            <div className="relative bg-gray-800/70 p-8 rounded-2xl border border-gray-700 overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Our Impact</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                With state-of-the-art infrastructure and distinguished faculty, 
                NIT Patna continues to shape the future of technical education in India.
              </p>
              <div className="absolute bottom-4 right-4 text-6xl opacity-10 text-yellow-400">⚡</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index }) => (
  <div 
    className={`relative bg-gray-800/70 p-6 rounded-xl border border-gray-700 transition-all duration-300 hover:border-yellow-400 group overflow-hidden ${
      index % 2 === 0 ? "hover:-translate-y-2" : "hover:translate-y-2"
    }`}
  >
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10">
      <div className="text-3xl mb-3 text-yellow-400">{stat.icon}</div>
      <p className="text-yellow-400 text-4xl font-bold mb-2 leading-none">{stat.value}</p>
      <p className="text-gray-300 text-sm uppercase tracking-wider font-medium">{stat.label}</p>
    </div>
  </div>
);

export default NumbersNitp;