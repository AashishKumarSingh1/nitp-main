import React from "react";

const Disclaimer = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 bg-white bg-opacity-90 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-extrabold mb-6 text-red-700 text-center uppercase border-b-4 border-red-500 pb-2">
        Disclaimer
      </h1>
      <p className="text-gray-800 leading-relaxed">
        National Institute of Technology Patna (NITP) does not provide any guarantee for the accuracy and authenticity of contents within its website. The users of this site maintain full responsibility for their actions when using the information contained within this website. NIT Patna is in no way liable for any direct, indirect, special, punitive, incidental, exemplary, or consequential damages whether in an action under contract, negligence, or any other theory arising out of or in connection with the use, inability to use, or performance of the information, products, services, contents, or materials on this website.
      </p>
      <p className="mt-4 text-gray-800 leading-relaxed">
        The website is subject to periodic updates and revisions. NIT Patna reserves the right to delete or modify information on this website without prior notice.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 text-red-700 border-l-4 border-red-500 pl-3">Copyright</h2>
      <p className="mt-2 text-gray-800 leading-relaxed">
        Material on this site is subject to copyright protection unless specified otherwise. Any proposed use of the material is subject to approval from NIT Patna. Unauthorized reproduction, modification, distribution, or republication is strictly prohibited.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 text-red-700 border-l-4 border-red-500 pl-3">Trademarks</h2>
      <p className="mt-2 text-gray-800 leading-relaxed">
        Trademarks, service marks, and trade names related to NIT Patna are the property of the Institute.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 text-red-700 border-l-4 border-red-500 pl-3">Links to External Sites</h2>
      <p className="mt-2 text-gray-800 leading-relaxed">
        The NITP website may contain links to third-party websites that are not controlled by NITP. We assume no responsibility for their content or policies.
      </p>
      
      <h2 className="text-2xl font-bold mt-8 text-red-700 border-l-4 border-red-500 pl-3">Contact Information</h2>
      <p className="mt-2 text-gray-800 text-center">
        For approvals and permissions, contact:
        <a href="mailto:registrar@nitp.ac.in" className="text-red-700 font-bold hover:underline ml-1">
          registrar@nitp.ac.in
        </a>
      </p>
    </div>
  );
};

export default Disclaimer;