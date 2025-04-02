import React from "react";

const Page = () => {
  const feeData = [
    { category: "B.Tech", years: ["2024-25", "2023-24"] },
    { category: "M.Tech", years: ["2024-25", "2023-24"] },
    { category: "M.Sc", years: ["2024-25", "2023-24"] },
    { category: "Ph.D.", years: ["2024-25", "2023-24"] },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-red-800 mb-6">
        Fee Structure
      </h2>

      <div className="text-center mb-6">
        <a href="#" className="text-blue-600 font-semibold block">
          Online Payment Gateway for Mess Fee
        </a>
        <a href="#" className="text-blue-600 font-semibold block">
          Online Payment Gateway for Institute & Hostel Fee
        </a>
      </div>

      {feeData.map((fee) => (
        <div
          key={fee.category}
          className="bg-white rounded-lg shadow-md p-5 mb-6"
        >
          <h3 className="text-xl font-bold text-red-800 mb-4">{fee.category}</h3>
          {fee.years.map((year) => (
            <div
              key={year}
              className="flex justify-between items-center border-b py-2"
            >
              <p className="text-gray-700">
                {fee.category} fee structure for Academic Year {year}
              </p>
              <a href="#" className="text-blue-600 font-semibold flex items-center">
                PDF
                <span className="ml-1">📥</span>
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Page;
