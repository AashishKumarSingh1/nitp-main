import React from "react";
import Link from "next/link";
import Image from "next/image";

const DevelopmentFundPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10 py-8 md:py-12 bg-white bg-opacity-90">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-red-800">
          NIT Patna Development Fund
        </h1>
        <h2 className="text-lg md:text-xl text-red-700 font-medium">
          Centenary Year Celebration (1924-2024) - BCE-NIT Patna's Glorious 100 Years
        </h2>
        <div className="w-24 h-1 bg-red-700 mx-auto mt-4"></div>
      </div>

      <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
        <img
          src="/home2.png"
          alt="Development Fund"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="space-y-8">
        <section className="prose max-w-none">
          <p className="text-gray-800 leading-relaxed">
            NIT Patna marked its humble beginnings in 1886 with the establishment of pleader's survey training school which was subsequently elevated to the Bihar College of Engineering Patna in 1924, & subsequently to NIT Patna in 2004. In the year 2024 it completed its 100 glorious years of imparting Engineering Education. Being a firm believer of continuous growth, we are in the process of upgrading our Institute's infrastructure and other facilities for the students and presently the development work of our state-of-the-art additional campus at Bihta is underway, which is spread over 125 Acres. We are also constantly improvising the academics and research activities to match the evolving needs of the Industry & Society.
          </p>
        </section>

        <div className="bg-red-50 border-l-4 border-red-700 p-6 rounded-r-lg">
          <p className="text-gray-800 font-medium">
            NIT Patna is glad to announce that vide order dated 10.12.2024, Income Tax Department, Ministry of Finance, Govt. of India, has granted the approval under sub clause (iiif) of sub section 2(a) of section 80G to NIT Patna for receiving donations which shall be utilised for achievement of its objects for which it was established. Donations made to NIT Patna under this section shall have 100% exemption under Income Tax. Moreover, NIT Patna has got registration from the office of the Registrar of Companies, Ministry of Corporate Affairs, New Delhi, vide Registration Number CSR00060203 by which NIT Patna under CSR.
          </p>
        </div>

        <section className="prose max-w-none">
          <p className="text-gray-800 leading-relaxed">
            Accordingly, NIT Patna has established "National Institute of Technology Development Fund" where we welcome our alumni, other interested parties to become the stakeholders in 360° progress of the institute. Bank and other details for this generous gesture are given below.
          </p>
        </section>

        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="bg-red-800 px-6 py-4">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              (A) Bank Details
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-gray-600">Account Name</p>
                <p className="font-medium">National Institute of Technology Patna Development Fund Account</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Account Number</p>
                <p className="font-medium">43633480545</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">IFSC</p>
                <p className="font-medium">SBIN0003129</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">SWIFT Code</p>
                <p className="font-medium">SBININBB156</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Account Type</p>
                <p className="font-medium">Saving Bank</p>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-600">Bank Name & Branch</p>
              <p className="font-medium">SBI Mahendru, Patna Branch</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="bg-red-800 px-6 py-4">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              (B) Information for 80G Certificate
            </h2>
            <p className="text-red-100 text-sm mt-1">
              Please provide the following details for tax exemption certificate
            </p>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <div className="h-10 border-b border-gray-300"></div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="h-10 border-b border-gray-300"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">PAN</label>
                <div className="h-10 border-b border-gray-300"></div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <div className="h-10 border-b border-gray-300"></div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">TAN (In case of Company)</label>
              <div className="h-10 border-b border-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentFundPage;

export async function generateMetadata({ params }) {
  return {
    title: "Development Fund | NIT Patna",
    description: "Contribute to NIT Patna's Development Fund and be part of our growth journey during our Centenary Year Celebration (1924-2024).",
  };
}