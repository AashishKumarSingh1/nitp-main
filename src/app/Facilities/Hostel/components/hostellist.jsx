"use client"
import React, { useState } from 'react';
import { Phone, Mail, User, Eye } from 'lucide-react';
import HostelDetails from './hosteldetails';

const hostels = [
  {
    id: 1,
    name: 'BRAHAMPUTRA HOSTEL',
    type: 'boys',
    capacity: 250,
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
    warden: {
      name: 'Dr. Rajesh Kumar',
      contact: '+91-9876543210',
      email: 'warden.bramhaputra@college.edu',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    },
    assistantWarden: {
      name: 'Dr. Amit Singh',
      contact: '+91-9876543211',
      email: 'awt.bramhaputra@college.edu',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    caretaker: {
      name: 'Mr. Suresh Kumar',
      contact: '+91-9876543212',
      email: 'care.bramhaputra@college.edu',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: 2,
    name: 'KOSHI HOSTEL',
    type: 'boys',
    capacity: 200,
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
    warden: {
      name: 'Dr. Sanjay Verma',
      contact: '+91-9876543213',
      email: 'warden.koshi@college.edu',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200'
    },
    assistantWarden: {
      name: 'Dr. Rahul Singh',
      contact: '+91-9876543214',
      email: 'awt.koshi@college.edu',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
    },
    caretaker: {
      name: 'Mr. Ramesh Kumar',
      contact: '+91-9876543215',
      email: 'care.koshi@college.edu',
      photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200'
    }
  }, 
  {
    id: 3,
    name: 'KOSHI-EXTENSION HOSTEL',
    type: 'boys',
    capacity: 250,
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
    warden: {
      name: 'Dr. Rajesh Kumar',
      contact: '+91-9876543210',
      email: 'warden.bramhaputra@college.edu',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    },
    assistantWarden: {
      name: 'Dr. Amit Singh',
      contact: '+91-9876543211',
      email: 'awt.bramhaputra@college.edu',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    caretaker: {
      name: 'Mr. Suresh Kumar',
      contact: '+91-9876543212',
      email: 'care.bramhaputra@college.edu',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
     id: 4,
     name: 'BAGMATI HOSTEL',
     type: 'boys',
     capacity: 200,
     image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
     warden: {
     name: 'Dr. Sanjay Verma',
     contact: '+91-9876543213',
     email: 'warden.koshi@college.edu',
     photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200'
  },
    assistantWarden: {
     name: 'Dr. Rahul Singh',
     contact: '+91-9876543214',
     email: 'awt.koshi@college.edu',
     photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
  },
    caretaker: {
     name: 'Mr. Ramesh Kumar',
     contact: '+91-9876543215',
     email: 'care.koshi@college.edu',
     photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200' 
  }
},
  {
     id: 5,
     name: 'SONE-A HOSTEL',
     type: 'boys',
     capacity: 200,
     image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
    warden: {
      name: 'Dr. Sanjay Verma',
      contact: '+91-9876543213',
      email: 'warden.koshi@college.edu',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200'
    },
    assistantWarden: {
      name: 'Dr. Rahul Singh',
      contact: '+91-9876543214',
      email: 'awt.koshi@college.edu',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
    },
    caretaker: {
      name: 'Mr. Ramesh Kumar',
      contact: '+91-9876543215',
      email: 'care.koshi@college.edu',
      photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
     id: 6,
     name: 'SONE-B HOSTEL ',
     type: 'boys',
     capacity: 200,
     image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
     warden: {
     name: 'Dr. Sanjay Verma',
     contact: '+91-9876543213',
     email: 'warden.koshi@college.edu',
     photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200'
},
     assistantWarden: {
     name: 'Dr. Rahul Singh',
     contact: '+91-9876543214',
     email: 'awt.koshi@college.edu',
     photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
},
     caretaker: {
     name: 'Mr. Ramesh Kumar',
     contact: '+91-9876543215',
     email: 'care.koshi@college.edu',
     photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200'
}
 },
 {
     id: 7,
     name: 'ARYABHATTA HOSTEL',
     type: 'boys',
     capacity: 200,
     image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
     warden: {
     name: 'Dr. Sanjay Verma',
     contact: '+91-9876543213',
     email: 'warden.koshi@college.edu',
     photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200'
},
     assistantWarden: {
     name: 'Dr. Rahul Singh',
     contact: '+91-9876543214',
     email: 'awt.koshi@college.edu',
     photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
},
     caretaker: {
     name: 'Mr. Ramesh Kumar',
     contact: '+91-9876543215',
     email: 'care.koshi@college.edu',
     photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200'
}
},
{
     id: 8,
     name: 'KAUTILIYA HOSTEL',
     type: 'boys',
    capacity: 200,
     image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
     warden: {
     name: 'Dr. Sanjay Verma',
     contact: '+91-9876543213',
     email: 'warden.koshi@college.edu',
     photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200'
},
     assistantWarden: {
     name: 'Dr. Rahul Singh',
     contact: '+91-9876543214',
     email: 'awt.koshi@college.edu',
     photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
},
     caretaker: {
     name: 'Mr. Ramesh Kumar',
     contact: '+91-9876543215',
     email: 'care.koshi@college.edu',
     photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200'
}
},
{
     id: 9,
      name: 'EWS HOSTEL',
     type: 'boys',
     capacity: 250,
     image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
     warden: {
      name: 'Dr. Rajesh Kumar',
      contact: '+91-9876543210',
      email: 'warden.bramhaputra@college.edu',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
      assistantWarden: {
     name: 'Dr. Amit Singh',
      contact: '+91-9876543211',
      email: 'awt.bramhaputra@college.edu',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
      caretaker: {
      name: 'Mr. Suresh Kumar',
      contact: '+91-9876543212',
      email: 'care.bramhaputra@college.edu',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
},
  {
      id: 10,
     name: 'UKNOWN1 HOSTEL',
     type: 'boys',
     capacity: 250,
     image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
     warden: {
      name: 'Dr. Rajesh Kumar',
      contact: '+91-9876543210',
      email: 'warden.bramhaputra@college.edu',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    },
    assistantWarden: {
      name: 'Dr. Amit Singh',
      contact: '+91-9876543211',
      email: 'awt.bramhaputra@college.edu',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    caretaker: {
      name: 'Mr. Suresh Kumar',
      contact: '+91-9876543212',
      email: 'care.bramhaputra@college.edu',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    }          
},
{
     id: 11,
     name: 'GANGA HOSTEL',
     type: 'Girls',
     capacity: 250,
     image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
     warden: {
     name: 'Dr. Rajesh Kumar',
     contact: '+91-9876543210',
     email: 'warden.bramhaputra@college.edu',
     photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
     assistantWarden: {
     name: 'Dr. Amit Singh',
     contact: '+91-9876543211',
     email: 'awt.bramhaputra@college.edu',
     photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
     caretaker: {
     name: 'Mr. Suresh Kumar',
     contact: '+91-9876543212',
     email: 'care.bramhaputra@college.edu',
     photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
},
{
     id: 12,
     name: 'GANGA-EXTENSION HOSTEL',
     type: 'Girls',
     capacity: 250,
     image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
     warden: {
     name: 'Dr. Rajesh Kumar',
     contact: '+91-9876543210',
     email: 'warden.bramhaputra@college.edu',
     photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
     assistantWarden: {
     name: 'Dr. Amit Singh',
     contact: '+91-9876543211',
     email: 'awt.bramhaputra@college.edu',
     photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
     caretaker: {
     name: 'Mr. Suresh Kumar',
     contact: '+91-9876543212',
     email: 'care.bramhaputra@college.edu',
     photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
},
{
     id: 13,
     name: 'KANDAMINI HOSTEL',
     type: 'Girls',
     capacity: 250,
     image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
     warden: {
     name: 'Dr. Rajesh Kumar',
     contact: '+91-9876543210',
     email: 'warden.bramhaputra@college.edu',
     photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
     assistantWarden: {
     name: 'Dr. Amit Singh',
     contact: '+91-9876543211',
     email: 'awt.bramhaputra@college.edu',
     photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
      caretaker: {
     name: 'Mr. Suresh Kumar',
     contact: '+91-9876543212',
     email: 'care.bramhaputra@college.edu',
     photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
},
{
     id: 15,
     name: 'UNKNOEN2 HOSTEL',
     type: 'Girls',
     capacity: 250,
     image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
     warden: {
     name: 'Dr. Rajesh Kumar',
     contact: '+91-9876543210',
     email: 'warden.bramhaputra@college.edu',
     photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
      assistantWarden: {
     name: 'Dr. Amit Singh',
     contact: '+91-9876543211',
     email: 'awt.bramhaputra@college.edu',
     photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
     caretaker: {
     name: 'Mr. Suresh Kumar',
     contact: '+91-9876543212',
     email: 'care.bramhaputra@college.edu',
     photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
},
];

const StaffInfo= ({ title, info }) => (
  <div className="border-t pt-4">
    <h4 className="font-medium text-gray-700 mb-3">{title}</h4>
    <div className="flex items-start space-x-3">
      <img 
        src={info.photo} 
        alt={info.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="text-sm space-y-1">
        <p className="flex items-center font-medium text-gray-800">
          <User className="w-4 h-4 mr-2 text-gray-500" />
          {info.name}
        </p>
        <p className="flex items-center">
          <Phone className="w-4 h-4 mr-2 text-gray-500" />
          {info.contact}
        </p>
        <p className="flex items-center">
          <Mail className="w-4 h-4 mr-2 text-gray-500" />
          {info.email}
        </p>
      </div>
    </div>
  </div>
);

const HostelList = () => {
  const [selectedHostel, setSelectedHostel] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hostels.map((hostel) => (
          <div key={hostel.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={hostel.image}
                alt={hostel.name}
                className="w-full h-48 object-cover"
              />
              <button
                onClick={() => setSelectedHostel(hostel)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <Eye className="w-5 h-5 text-gray-700" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{hostel.name}</h3>
              <p className="text-sm text-gray-500 mb-4">
                Capacity: {hostel.capacity} students
              </p>
              
              <div className="space-y-4">
                <StaffInfo title="Warden" info={hostel.warden} />
                <StaffInfo title="Assistant Warden" info={hostel.assistantWarden} />
                <StaffInfo title="Caretaker" info={hostel.caretaker} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedHostel && (
        <HostelDetails
          hostel={selectedHostel}
          onClose={() => setSelectedHostel(null)}
        />
      )}
    </>
  );
};

export default HostelList;