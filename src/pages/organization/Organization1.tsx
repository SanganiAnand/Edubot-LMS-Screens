/*import React from 'react';
import { Pencil } from 'lucide-react';

const data = [
  { org: 'KLC Tech Collage', students: 500, batches: '01', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Active' },
  { org: 'KLC Tech Collage', students: 200, batches: '02', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Inactive' },
  { org: 'KLC Tech Collage', students: 300, batches: '03', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Active' },
  { org: 'KLC Tech Collage', students: 700, batches: '04', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Active' },
  { org: 'KLC Tech Collage', students: 850, batches: '05', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Inactive' },
];

const Organization1 = () => {
  return (
    <div className="tw-w-full tw-bg-[#E8EAEE] tw-min-h-screen tw-pb-10 tw-mt-[-25px] tw-ml-[-23px]">
      <div className="tw-w-[1263px] tw-bg-white tw-px-6 tw-py-4 tw-flex tw-items-center tw-justify-start tw-gap-6 tw-border-b tw-border-gray-300">
        <h1 className="tw-text-base tw-font-semibold tw-text-gray-800">
          Organization
        </h1>
        <p className="tw-text-sm tw-text-gray-500">
          Home &gt; Organization
        </p>
      </div>
      <div className="tw-bg-white tw-px-6 tw-py-4 tw-mx-6 tw-mt-4 tw-rounded-md tw-shadow-sm tw-flex tw-items-center tw-justify-between tw-border tw-border-gray-200">
        <div className="tw-flex tw-items-center tw-gap-4">
          <select className="tw-border tw-border-gray-300 tw-rounded-md tw-px-3 tw-py-2 tw-text-sm">
            <option>Filter</option>
          </select>
          <select className="tw-border tw-border-gray-300 tw-rounded-md tw-px-3 tw-py-2 tw-text-sm">
            <option>Contains</option>
          </select>
          <input
            type="text"
            placeholder="Write"
            className="tw-border tw-border-gray-300 tw-rounded-md tw-px-3 tw-py-2 tw-text-sm tw-w-48"
          />
        </div>

        <div className="tw-flex tw-items-center tw-gap-4">
          <button className="tw-text-sm tw-font-medium tw-text-indigo-700 hover:tw-underline">
            Data Import/Export
          </button>
          <button className="tw-bg-indigo-900 tw-text-white tw-text-sm tw-font-medium tw-px-4 tw-py-2 tw-rounded-md">
            + Add Organization
          </button>
        </div>
      </div>

      <div className="tw-bg-white tw-mx-6 tw-mt-4 tw-rounded-md tw-shadow-sm tw-border tw-border-gray-200">
        <table className="tw-w-full tw-text-sm tw-text-left tw-text-gray-700">
          <thead className="tw-bg-orange-100 tw-text-gray-900">
            <tr>
              <th className="tw-px-6 tw-py-3">Organization</th>
              <th className="tw-px-6 tw-py-3">No. of Students</th>
              <th className="tw-px-6 tw-py-3">No. of Batches</th>
              <th className="tw-px-6 tw-py-3">Email Address</th>
              <th className="tw-px-6 tw-py-3">Contact</th>
              <th className="tw-px-6 tw-py-3">State</th>
              <th className="tw-px-6 tw-py-3">Status</th>
              <th className="tw-px-6 tw-py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="tw-border-t tw-border-gray-200 hover:tw-bg-gray-50">
                <td className="tw-px-6 tw-py-3">{item.org}</td>
                <td className="tw-px-6 tw-py-3">{item.students}</td>
                <td className="tw-px-6 tw-py-3">{item.batches}</td>
                <td className="tw-px-6 tw-py-3 tw-text-blue-600 tw-underline cursor-pointer">{item.email}</td>
                <td className="tw-px-6 tw-py-3">{item.contact}</td>
                <td className="tw-px-6 tw-py-3">{item.state}</td>
                <td className="tw-px-6 tw-py-3">
                  <span className={item.status === 'Active' ? 'tw-text-green-600' : 'tw-text-red-600'}>
                    {item.status}
                  </span>
                </td>
                <td className="tw-px-6 tw-py-3">
                  <Pencil size={16} className="tw-text-gray-600 hover:tw-text-blue-600 tw-cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        
        <div className="tw-flex tw-items-center tw-justify-between tw-px-10 tw-mt-10">
  <p className="tw-text-sm tw-text-gray-600">
    Page&nbsp;&nbsp;<span className="tw-font-semibold tw-text-indigo-900">1</span>
  </p>

  <div className="tw-flex tw-items-center tw-gap-4 tw-text-sm tw-text-indigo-900">
    <button className="tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center hover:tw-text-black">&lt;</button>
    <button className="tw-font-semibold tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center tw-text-indigo-900">1</button>
    <button className="tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center hover:tw-text-black">2</button>
    <span className="tw-px-1">...</span>
    <button className="tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center hover:tw-text-black">10</button>
    <button className="tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center hover:tw-text-black">&gt;</button>
  </div>
 </div>
</div>
);
};

export default Organization1;*/

/*import React from 'react';
import { Pencil } from 'lucide-react';

const data = [
  { org: 'KLC Tech Collage', students: 500, batches: '01', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Active' },
  { org: 'KLC Tech Collage', students: 200, batches: '02', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Inactive' },
  { org: 'KLC Tech Collage', students: 300, batches: '03', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Active' },
  { org: 'KLC Tech Collage', students: 700, batches: '04', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Active' },
  { org: 'KLC Tech Collage', students: 850, batches: '05', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Inactive' },
];

const Organization1 = () => {
  return (
    <div className="tw-w-full tw-bg-[#E8EAEE] tw-min-h-screen tw-pb-10 tw-mt-[-25px] tw-ml-[-23px]">
      <div className="tw-w-[1263px] tw-bg-white tw-px-6 tw-py-4 tw-flex tw-items-center tw-justify-start tw-gap-6 tw-border-b tw-border-gray-300">
        <h1 className="tw-text-base tw-font-semibold tw-text-gray-800">Organization</h1>
        <p className="tw-text-sm tw-text-gray-500">Home &gt; Organization</p>
      </div>

      
        <div className="tw-bg-[#E8EAEE] tw-px-[-1] tw-py-4 tw-mx-6 tw-mt-4 tw-rounded-t-md tw-shadow-sm tw-flex tw-items-center tw-justify-between tw-border tw-border-gray-100">
        <div className="tw-flex tw-items-center tw-gap-4">
          <select className="tw-border tw-border-[#1A237E] tw-text-[#1A237E] tw-rounded-md tw-px-3 tw-py-2 tw-text-sm">
            <option>Filter</option>
          </select>
          <select className="tw-border tw-border-[#1A237E] tw-text-[#1A237E] tw-rounded-md tw-px-3 tw-py-2 tw-text-sm">
            <option>Contains</option>
          </select>

          <input
            type="text"
            placeholder="Write"
            className="tw-border tw-border-[#1A237E] tw-rounded-md tw-px-3 tw-py-2 tw-text-sm tw-w-48"
          />
        </div>

        <div className="tw-flex tw-items-center tw-gap-4">
          <button className="tw-text-sm tw-font-medium tw-text-indigo-700 hover:tw-underline">
            Data Import/Export
          </button>
          <button className="tw-bg-indigo-900 tw-text-white tw-text-sm tw-font-medium tw-px-4 tw-py-2 tw-rounded-md">
            + Add Organization
          </button>
        </div>
      </div>

     
        <div className="tw-bg-white tw-mx-5 tw-mt-[-1] tw-rounded-md tw-shadow-md tw-border tw-border-gray-200">
        <table className="tw-w-full tw-text-sm tw-text-left tw-text-gray-700">
          <thead className="tw-bg-orange-100 tw-text-gray-900">
  <tr>
    <th className="tw-px-6 tw-py-3 tw-whitespace-nowrap">Organization</th>
    <th className="tw-px-6 tw-py-3 tw-whitespace-nowrap">No. of Students</th>
    <th className="tw-px-6 tw-py-3 tw-whitespace-nowrap">No. of Batches</th>
    <th className="tw-px-6 tw-py-3 tw-whitespace-nowrap">Email Address</th>
    <th className="tw-px-6 tw-py-3 tw-whitespace-nowrap">Contact</th>
    <th className="tw-px-6 tw-py-3 tw-whitespace-nowrap">State</th>
    <th className="tw-px-6 tw-py-3 tw-whitespace-nowrap">Status</th>
    <th className="tw-px-6 tw-py-3 tw-whitespace-nowrap">Action</th>
  </tr>
</thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="tw-border-t tw-border-gray-200 hover:tw-bg-gray-50">
                <td className="tw-px-6 tw-py-3">{item.org}</td>
                <td className="tw-px-6 tw-py-3">{item.students}</td>
                <td className="tw-px-6 tw-py-3">{item.batches}</td>
                <td className="tw-px-6 tw-py-3 tw-text-blue-600 tw-underline tw-cursor-pointer">{item.email}</td>
                <td className="tw-px-6 tw-py-3">{item.contact}</td>
                <td className="tw-px-6 tw-py-3">{item.state}</td>
                <td className="tw-px-6 tw-py-3">
                  <span className={item.status === 'Active' ? 'tw-text-green-600' : 'tw-text-red-600'}>
                    {item.status}
                  </span>
                </td>
                <td className="tw-px-6 tw-py-3">
                  <Pencil size={16} className="tw-text-gray-600 hover:tw-text-blue-600 tw-cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="tw-flex tw-items-center tw-justify-between tw-px-6 tw-mt-10">
        <p className="tw-text-sm tw-text-gray-600">
          Page&nbsp;&nbsp;<span className="tw-font-semibold tw-text-indigo-900">1</span>
        </p>

        <div className="tw-flex tw-items-center tw-gap-4 tw-text-sm tw-text-indigo-900">
          <button className="tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center hover:tw-text-black">&lt;</button>
          <button className="tw-font-semibold tw-w-1 tw-h-1 tw-flex tw-items-center tw-justify-center tw-text-indigo-900">1</button>
          <button className="tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center hover:tw-text-black">2</button>
          <span className="tw-px-1">...</span>
          <button className="tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center hover:tw-text-black">10</button>
          <button className="tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center hover:tw-text-black">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Organization1;*/

/*import React from 'react';
import { Pencil } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

const data = [
  { org: 'KLC Tech Collage', students: 500, batches: '01', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Active' },
  { org: 'KLC Tech Collage', students: 200, batches: '02', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Inactive' },
  { org: 'KLC Tech Collage', students: 300, batches: '03', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Active' },
  { org: 'KLC Tech Collage', students: 700, batches: '04', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Active' },
  { org: 'KLC Tech Collage', students: 850, batches: '05', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Inactive' },
];

const Organization1 = () => {
  const navigate = useNavigate();

  return (
    <div className="tw-w-full tw-bg-[#E8EAEE] tw-min-h-screen tw-pb-10 tw-mt-[-25px] tw-ml-[-23px]">

      <div className="tw-w-[1263px] tw-bg-white tw-px-6 tw-py-4 tw-flex tw-items-center tw-gap-6 tw-border-b tw-border-gray-300">
        <h1 className="tw-text-base tw-font-semibold tw-text-gray-800">Organization</h1>
        <p className="tw-text-sm tw-text-gray-500">Home &gt; Organization</p>
      </div>

      
      <div className="tw-px-4 tw-mt-4 tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-4">
        
        <div className="tw-flex tw-items-center tw-gap-2">
          <select className="tw-border tw-border-[#1A237E] tw-text-[#1A237E] tw-rounded-md tw-px-5 tw-py-1.5 tw-text-sm tw-bg-white tw-text-left">
            <option>Filter</option>
          </select>
          <select className="tw-border tw-border-[#1A237E] tw-text-[#1A237E] tw-rounded-md tw-px-3 tw-py-2 tw-text-sm tw-w-30 tw-text-left" defaultValue="Contains">
            <option value="Equals to">Equals to</option>
            <option value="Starts with">Starts with</option>
            <option value="Contains">Contains</option>
          </select>
          <input
            type="text"
            placeholder="Write"
            className="tw-border tw-border-[#1A237E] tw-rounded-md tw-px-3 tw-py-1.5 tw-text-sm tw-w-48 tw-bg-white"
          />
        </div>

       
        <div className="tw-flex tw-justify-end tw-items-center tw-gap-4">
          <button className="tw-text-sm tw-font-medium tw-text-[#1A237E] tw-underline hover:tw-opacity-80">
            Data Import/Export
          </button>
          <button
            type="button"
            onClick={() => navigate({ to: '/organization/add-organization' })}
            className="tw-bg-[#1A237E] tw-text-white tw-text-sm tw-font-medium tw-px-4 tw-py-2 tw-rounded-md hover:tw-opacity-90"
          >
            <span className="tw-text-1g tw-mr-1">+</span> Add Organization
          </button>
        </div>
      </div>

      
      <div className="tw-overflow-x-auto tw-mt-4 tw-px-4">
        <div className="tw-bg-white tw-shadow-lg tw-rounded-lg tw-overflow-hidden">
          <table className="tw-min-w-[1000px] tw-w-full tw-text-sm tw-text-left tw-text-gray-800">
            <thead>
              <tr className="tw-bg-[#FFE1A8]">
                <th className="tw-px-6 tw-py-3 tw-whitespace-nowrap">Organization</th>
                <th className="tw-px-6 tw-py-3 tw-whitespace-nowrap">No. of Students</th>
                <th className="tw-px-6 tw-py-3 tw-whitespace-nowrap">No. of Batches</th>
                <th className="tw-px-6 tw-py-3">Email Address</th>
                <th className="tw-px-6 tw-py-3">Contact</th>
                <th className="tw-px-6 tw-py-3">State</th>
                <th className="tw-px-6 tw-py-3">Status</th>
                <th className="tw-px-6 tw-py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i} className="tw-border-t tw-border-gray-200 hover:tw-bg-gray-50">
                  <td className="tw-px-6 tw-py-4 tw-bg-white">{item.org}</td>
                  <td className="tw-px-6 tw-py-4 tw-bg-white">{item.students}</td>
                  <td className="tw-px-6 tw-py-4 tw-bg-white">{item.batches}</td>
                  <td className="tw-px-6 tw-py-4 tw-bg-white tw-text-[#1A237E] tw-underline tw-cursor-pointer">{item.email}</td>
                  <td className="tw-px-6 tw-py-4 tw-bg-white">{item.contact}</td>
                  <td className="tw-px-6 tw-py-4 tw-bg-white">{item.state}</td>
                  <td className="tw-px-6 tw-py-4 tw-bg-white">
                    <span className={`tw-bg-white ${item.status === 'Active' ? 'tw-text-green-600' : 'tw-text-red-600'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="tw-px-6 tw-py-3 tw-bg-white">
                    <Pencil size={16} className="tw-text-gray-600 hover:tw-text-[#1A237E] tw-cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="tw-flex tw-items-center tw-justify-between tw-px-6 tw-mt-10">
        <p className="tw-text-sm tw-text-gray-600">
          Page <span className="tw-font-semibold tw-text-indigo-900">1</span>
        </p>
        <div className="tw-flex tw-items-center tw-gap-4 tw-text-sm tw-text-indigo-900">
          <button className="tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center hover:tw-text-black">&lt;</button>
          <button className="tw-font-semibold tw-text-indigo-900">1</button>
          <button className="tw-w-6 tw-h-6 hover:tw-text-black">2</button>
          <span className="tw-px-1">...</span>
          <button className="tw-w-6 tw-h-6 hover:tw-text-black">10</button>
          <button className="tw-w-6 tw-h-6 hover:tw-text-black">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Organization1;*/


import React, { useState } from 'react';
import { Pencil } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

const data = [
  { org: 'KLC Tech Collage', students: 500, batches: '01', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Active' },
  { org: 'KLC Tech Collage', students: 200, batches: '02', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Inactive' },
  { org: 'KLC Tech Collage', students: 300, batches: '03', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Active' },
  { org: 'KLC Tech Collage', students: 700, batches: '04', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Active' },
  { org: 'KLC Tech Collage', students: 850, batches: '05', email: 'klctech@gmail.com', contact: '+919562358844', state: 'Andhra Pradesh', status: 'Inactive' },
];

const Organization1 = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item =>
  Object.entries(item).some(([key, value]) => {
    const stringValue = String(value).toLowerCase();
    const searchValue = searchTerm.toLowerCase().trim();

    if (!searchValue) return true;

    if (key === 'status') {
      return stringValue === searchValue; // exact match for status
    }

    return stringValue.includes(searchValue); // partial match for others
  })
);

  return (
    <div className="tw-w-full tw-bg-[#E8EAEE] tw-min-h-screen tw-pb-10 tw-mt-[-25px] tw-ml-[-23px]">
      
      {/* Header */}
      <div className="tw-w-[1263px] tw-bg-white tw-px-6 tw-py-4 tw-flex tw-items-center tw-gap-6 tw-border-b tw-border-gray-300">
        <h1 className="tw-text-base tw-font-semibold tw-text-gray-800">Organization</h1>
        <p className="tw-text-sm tw-text-gray-500">Home &gt; Organization</p>
      </div>

      {/* Filter Section */}
      <div className="tw-px-4 tw-mt-4 tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-4">
        
        {/* Filter Inputs */}
        <div className="tw-flex tw-items-center tw-gap-2">
          <select className="tw-border tw-border-[#1A237E] tw-text-[#1A237E] tw-rounded-md tw-px-5 tw-py-1.5 tw-text-sm tw-bg-white tw-text-left">
            <option>Filter</option>
          </select>
          <select className="tw-border tw-border-[#1A237E] tw-text-[#1A237E] tw-rounded-md tw-px-3 tw-py-2 tw-text-sm tw-w-30 tw-text-left" defaultValue="Contains">
            <option value="Equals to">Equals to</option>
            <option value="Starts with">Starts with</option>
            <option value="Contains">Contains</option>
          </select>
          <input
            type="text"
            placeholder="Write"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="tw-border tw-border-[#1A237E] tw-rounded-md tw-px-3 tw-py-1.5 tw-text-sm tw-w-48 tw-bg-white"
          />
        </div>

        {/* Action Buttons */}
        <div className="tw-flex tw-justify-end tw-items-center tw-gap-4">
          <button className="tw-text-sm tw-font-medium tw-text-[#1A237E] tw-underline hover:tw-opacity-80">
            Data Import/Export
          </button>
          <button
            type="button"
            onClick={() => navigate({ to: '/organization/add-organization' })}
            className="tw-bg-[#1A237E] tw-text-white tw-text-sm tw-font-medium tw-px-4 tw-py-2 tw-rounded-md hover:tw-opacity-90"
          >
            <span className="tw-text-1g tw-mr-1">+</span> Add Organization
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="tw-overflow-x-auto tw-mt-4 tw-px-4">
        <div className="tw-bg-white tw-shadow-lg tw-rounded-lg tw-overflow-hidden">
          <table className="tw-min-w-[1000px] tw-w-full tw-text-sm tw-text-left tw-text-gray-800">
            <thead>
              <tr className="tw-bg-[#FFE1A8]">
                <th className="tw-px-6 tw-py-3 tw-whitespace-nowrap">Organization</th>
                <th className="tw-px-6 tw-py-3 tw-whitespace-nowrap">No. of Students</th>
                <th className="tw-px-6 tw-py-3 tw-whitespace-nowrap">No. of Batches</th>
                <th className="tw-px-6 tw-py-3">Email Address</th>
                <th className="tw-px-6 tw-py-3">Contact</th>
                <th className="tw-px-6 tw-py-3">State</th>
                <th className="tw-px-6 tw-py-3">Status</th>
                <th className="tw-px-6 tw-py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, i) => (
                  <tr key={i} className="tw-border-t tw-border-gray-200 hover:tw-bg-gray-50">
                    <td className="tw-px-6 tw-py-4 tw-bg-white">{item.org}</td>
                    <td className="tw-px-6 tw-py-4 tw-bg-white">{item.students}</td>
                    <td className="tw-px-6 tw-py-4 tw-bg-white">{item.batches}</td>
                    <td className="tw-px-6 tw-py-4 tw-bg-white tw-text-[#1A237E] tw-underline tw-cursor-pointer">{item.email}</td>
                    <td className="tw-px-6 tw-py-4 tw-bg-white">{item.contact}</td>
                    <td className="tw-px-6 tw-py-4 tw-bg-white">{item.state}</td>
                    <td className="tw-px-6 tw-py-4 tw-bg-white">
                      <span className={`tw-bg-white ${item.status === 'Active' ? 'tw-text-green-600' : 'tw-text-red-600'}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="tw-px-6 tw-py-3 tw-bg-white">
                      <Pencil size={16} className="tw-text-gray-600 hover:tw-text-[#1A237E] tw-cursor-pointer" />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="tw-px-6 tw-py-4" colSpan="8">No results found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="tw-flex tw-items-center tw-justify-between tw-px-6 tw-mt-10">
        <p className="tw-text-sm tw-text-gray-600">
          Page <span className="tw-font-semibold tw-text-indigo-900">1</span>
        </p>
        <div className="tw-flex tw-items-center tw-gap-4 tw-text-sm tw-text-indigo-900">
          <button className="tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center hover:tw-text-black">&lt;</button>
          <button className="tw-font-semibold tw-text-indigo-900">1</button>
          <button className="tw-w-6 tw-h-6 hover:tw-text-black">2</button>
          <span className="tw-px-1">...</span>
          <button className="tw-w-6 tw-h-6 hover:tw-text-black">10</button>
          <button className="tw-w-6 tw-h-6 hover:tw-text-black">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Organization1;




/*<div className="tw-bg-white tw-shadow-md tw-rounded-lg tw-overflow-hidden"></div>*/














