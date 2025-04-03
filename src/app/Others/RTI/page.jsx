import React from 'react';
import { FileText, ExternalLink, Info } from 'lucide-react';

const RTIPage = () => {
  const sections = [
    {
      title: "About ACT",
      data: [
        {
          sno: "1.1",
          name: "Name & Title of the Act",
          details: "Right to Information Act. 2005 (RTI Act)\nOffice Orders",
        },
        {
          sno: "1.2",
          name: "Definition",
          details:
            "Right to Information means the right to\n" +
            "- inspection of work, documents, records\n" +
            "- taking notes, extracts or, certified copies of documents or records;\n" +
            "- taking certified samples of material;\n" +
            "- obtaining information in the form of diskettes, floppies, tapes, video cassettes or in any other electronic mode or through printouts where such information is stored in a computer or in any other device subject to relevant provisions in this regard",
        },
        {
          sno: "1.3",
          name: "Objective/purpose of the Act",
          details:
            "To provide available information of the Institute as enshrined in RTI ACT to the Indian citizen on payment of prescribed fees.",
        },
        {
          sno: "1.4",
          name: "Users",
          details: "Citizens of India.",
        },
      ]
    },
    {
      title: "About Organisation",
      data: [
        {
          sno: "2.1",
          name: "Name",
          details: "National Institute of Technology Patna",
        },
        {
          sno: "2.2",
          name: "Functions and Duties",
          details: "As per Act and Statutes of the Institute",
        },
        {
          sno: "2.3",
          name: "Powers and duties of its officers and employees",
          details: "As per Act and Statutes of the Institute",
        },
        {
          sno: "2.4",
          name: "The procedure followed in the decision making process, including channels of supervision and accountability",
          details: "As per Act and Statutes of the Institute",
        },
        {
          sno: "2.5",
          name: "The norms set by it for the discharge of its functions",
          details: "As per Act and Statutes of the Institute",
        },
        {
          sno: "2.6",
          name: "The rules, regulations, instructions, manuals and records, held by it or under its control or used by its employees for discharging its functions",
          details: "As per Act and Statutes of the Institute",
        },
        {
          sno: "2.7",
          name: "A statement of the categories of documents that are held by it or under its control",
          details: "Administrative Office Orders / Decisions and Guidelines as approved by Institutes' Governing Body i.e. Board of Governors (BOG)",
        },
        {
          sno: "2.8",
          name: "The particulars of any arrangement that exists for consultation with, or representation by the member so of the public in relation to the formulation of its policy or implementation thereof",
          details: "Interested persons may write to the Public Information Officer of the Institute",
        },
        {
          sno: "2.9",
          name: "A statement of the boards, councils, committees and other bodies consisting of two or more persons constituted as its part or for the purpose of its advice, and as to whether meetings of those boards, councils, committees and other bodies are open to the public, or the minutes of such meetings are accessible for public",
          details:
            "Following are the Main Committees / Governing body of the Institute\n" +
            "- Board of Governors\n" +
            "- Finance Committee\n" +
            "- Building and Works Committee\n" +
            "- Senate\n" +
            "Meetings of these Committees/Board are not open to Public\n" +
            "Minutes of the meetings are not accessible to public",
        },
      ]
    },
    {
      title: "Directory of Officers and Employees",
      subtitle: "Institute Telephone Directory",
      data: [
        {
          sno: "3.0",
          name: "A directory of its officers and employees",
          details: "Institute Telephone Directory",
        },
        {
          sno: "3.1",
          name: "The monthly remuneration received by each of its officers and employees, including the system of compensation as provided in its regulations",
          details: "Pay Structure of Institute Employees",
        },
        {
          sno: "3.2",
          name: "The budget allocated to each of its agency, indicating the particulars of all plans, proposed expenditures and reports on disbursements made",
          details: "Non Plan and Plan Budget for Financial Year 2007-08",
        },
        {
          sno: "3.3",
          name: "The manner of execution of subsidy programmes, including the amounts allocated and the details of beneficiaries of such programmes",
          details: "No Subsidy is given",
        },
        {
          sno: "3.4",
          name: "Particulars of recipients of concessions, permits or authorizations granted by it",
          details: "None",
        },
        {
          sno: "3.5",
          name: "Details in respect of the information available to or held by it reduced in an electronic form",
          details: "Please see Institute website",
        },
        {
          sno: "3.6",
          name: "The particulars of facilities available to citizens for obtaining information, including the working hours of a library or reading room, if maintained for public use",
          details: "All the information is available on the institute website.",
        },
        {
          sno: "3.7",
          name: "The names, designations and other particulars of the Public Information Officers",
          details:
            "Appellate Authority Registrar National Institute of Technology Patna Patna-800 005.\n" +
            "All matters relating to NIT Patna including its various Departments including Research & Development matters, Centres, Interdisciplinary Programmes and Sections.\n" +
            "All matters relating to NIT Patna including its various Departments (except Dean Research & Development),Centres,Interdisciplinary Programmes and Sections.",
        },
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-red-50 p-3 rounded-full mb-6">
          <FileText className="w-8 h-8 text-red-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
          Right To Information Act, 2005
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Information under RTI about National Institute of Technology (NIT) Patna
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
            href="http://www.nitp.ac.in/uploads/rti_faa.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>RTI Details</span>
          </a>
          <a
            href="http://www.nitp.ac.in/downloads/NITP_RTI.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
          >
            <Info className="w-4 h-4" />
            <span>CPIO & FAA Details</span>
          </a>
        </div>
      </div>

      <div className="space-y-12">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-red-700 to-red-800 p-6">
              <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              {section.subtitle && (
                <p className="text-red-100 mt-1">{section.subtitle}</p>
              )}
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">S.No.</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {section.data.map((row) => (
                    <tr key={row.sno} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {row.sno}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                        {row.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 whitespace-pre-line">
                        {row.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RTIPage;