/*import React, { useState } from 'react';

const AddOrganization = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    organizationId: '',
    state: '',
    address: '',
    pincode: '',
    turnitinUrl: '',
    turnitinApiKey: '',
    githubCreated: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="tw-w-full tw-bg-[#E8EAEE] tw-min-h-screen tw-pt-[-1] tw-pb-10 tw-mt-[-25px] tw-ml-[-30px]">
      
     
      <div className="tw-w-full tw-bg-white tw-px-6 tw-py-3 tw-flex tw-items-center tw-gap-6 tw-border-b tw-border-gray-300">
        <h1 className="tw-text-base tw-font-semibold tw-text-gray-800">Organization</h1>
        <p className="tw-text-sm tw-text-gray-500">Home &gt; Organization &gt; Add Organization</p>
      </div>

    
      <div className="tw-px-8 tw-pt-4 tw-text-sm tw-text-gray-700">
        Organization details store information about the organization. You can update the organization details later by clicking on the name of the organization.
      </div>

      <div className="tw-px-8 tw-py-1">
        <button className="tw-text-sm tw-font-medium tw-text-[#0b1151] tw-underline hover:tw-opacity-80">
          Data Import/Export
        </button>
      </div>

      <form
  onSubmit={handleSubmit}
  className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-6 tw-mt-4 tw-ml-7 tw-w-[700px] tw-grid tw-grid-cols-2 tw-gap-x-6 tw-gap-y-5"
>
  <div className="tw-flex tw-flex-col">
    <label className="tw-text-base tw-mb-1">Organization Name</label>
    <input
      type="text"
      name="name"
      placeholder="First name"
      className="tw-border tw-rounded tw-h-[30px] tw-w-[286px] tw-px-2 tw-text-sm"
      value={formData.name}
      onChange={handleChange}
    />
  </div>

  <div className="tw-flex tw-flex-col">
    <label className="tw-text-sm tw-mb-1">Contact</label>
    <input
      type="tel"
      name="contact"
      placeholder="+91 7352178373"
      className="tw-border tw-rounded tw-h-[30px] tw-w-[286px] tw-px-2 tw-text-sm"
      value={formData.contact}
      onChange={handleChange}
    />
  </div>

  <div className="tw-flex tw-flex-col">
    <label className="tw-text-sm tw-mb-1">Organization Email ID</label>
    <input
      type="email"
      name="email"
      placeholder="Yourname@gmail.com"
      className="tw-border tw-rounded tw-h-[30px] tw-w-[286px] tw-px-2 tw-text-sm"
      value={formData.email}
      onChange={handleChange}
    />
  </div>

  <div className="tw-flex tw-flex-col">
    <label className="tw-text-sm tw-mb-1">Organization ID</label>
    <input
      type="text"
      name="organizationId"
      placeholder="AB12456"
      className="tw-border tw-rounded tw-h-[30px] tw-w-[286px] tw-px-2 tw-text-sm"
      value={formData.organizationId}
      onChange={handleChange}
    />
  </div>

  <div className="tw-flex tw-flex-col">
    <label className="tw-text-sm tw-mb-1">State</label>
    <input
      type="text"
      name="state"
      placeholder="Andhra Pradesh"
      className="tw-border tw-rounded tw-h-[30px] tw-w-[286px] tw-px-2 tw-text-sm"
      value={formData.state}
      onChange={handleChange}
    />
  </div>

  <div className="tw-flex tw-flex-col">
    <label className="tw-text-sm tw-mb-1">Address</label>
    <input
      type="text"
      name="address"
      placeholder="XYZ Collage"
      className="tw-border tw-rounded tw-h-[30px] tw-w-[286px] tw-px-2 tw-text-sm"
      value={formData.address}
      onChange={handleChange}
    />
  </div>

  <div className="tw-flex tw-flex-col">
    <label className="tw-text-sm tw-mb-1">Pincode</label>
    <input
      type="text"
      name="pincode"
      placeholder="776253"
      className="tw-border tw-rounded tw-h-[30px] tw-w-[286px] tw-px-2 tw-text-sm"
      value={formData.pincode}
      onChange={handleChange}
    />
  </div>

  <div className="tw-flex tw-flex-col">
    <label className="tw-text-sm tw-mb-1">Turnitin URL</label>
    <input
      type="url"
      name="turnitinUrl"
      placeholder="example.com/index.htm"
      className="tw-border tw-rounded tw-h-[30px] tw-w-[286px] tw-px-2 tw-text-sm"
      value={formData.turnitinUrl}
      onChange={handleChange}
    />
  </div>

  <div className="tw-flex tw-flex-col">
    <label className="tw-text-sm tw-mb-1">Turnitin API Key</label>
    <input
      type="text"
      name="turnitinApiKey"
      placeholder="example.com/index.htm"
      className="tw-border tw-rounded tw-h-[30px] tw-w-[286px] tw-px-2 tw-text-sm"
      value={formData.turnitinApiKey}
      onChange={handleChange}
    />
  </div>

  <div className="tw-col-span-2 tw-flex tw-items-center tw-gap-2">
    <input
      type="checkbox"
      name="githubCreated"
      checked={formData.githubCreated}
      onChange={handleChange}
    />
    <label htmlFor="githubCreated" className="tw-text-sm">
      Organization created in GitHub
    </label>
  </div>

  <div className="tw-col-span-2">
    <p className="tw-text-xs tw-text-indigo-700">All fields are mandatory*</p>
  </div>

  <div className="tw-col-span-2 tw-mt-2">
    <button
      type="submit"
      className="tw-bg-[#1A237E] tw-text-white tw-px-4 tw-py-1.5 tw-rounded-md tw-text-sm hover:tw-opacity-90"
    >
      Submit
    </button>
  </div>
</form>
    </div>
  );
};

export default AddOrganization;*/

/*import React, { useState } from 'react';

const flagOptions = [
  { code: '+91', name: 'India', flag: 'https://flagcdn.com/w40/in.png' },
  { code: '+1', name: 'USA', flag: 'https://flagcdn.com/w40/us.png' },
  { code: '+44', name: 'UK', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: '+61', name: 'Australia', flag: 'https://flagcdn.com/w40/au.png' },
  { code: '+971', name: 'UAE', flag: 'https://flagcdn.com/w40/ae.png' },
];

const AddOrganization = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    countryCode: '+91',
    organizationId: '',
    state: '',
    address: '',
    pincode: '',
    turnitinUrl: '',
    turnitinApiKey: '',
    githubCreated: false,
  });

  const [formInvalid, setFormInvalid] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setFormInvalid(false);
  };

  const validate = () => {
    for (const key in formData) {
      if (
        typeof formData[key] === 'string' &&
        !formData[key].trim() &&
        key !== 'countryCode'
      ) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    setFormInvalid(!isValid);

    if (isValid) {
      const fullPhone = `${formData.countryCode} ${formData.contact}`;
      const dataToSubmit = { ...formData, fullPhone };
      localStorage.setItem('orgData', JSON.stringify(dataToSubmit));
      setShowModal(true); // Show success modal
    }
  };

  return (
    <div className="tw-w-full tw-bg-[#E8EAEE] tw-min-h-screen tw-pt-25 tw-pb-50 tw-mt-[-25px] tw-ml-[-30px]">
      <div className="tw-bg-white tw-flex tw-items-center tw-gap-6 tw-border-b tw-border-gray-300" style={{ width: '1271px', height: '52px', padding: '0 24px' }}>
        <h1 className="tw-text-base tw-font-semibold tw-text-gray-800">Organization</h1>
        <p className="tw-text-sm tw-text-gray-500">
          Home &gt; Organization &gt; Add Organization
        </p>
      </div>

      <div className="tw-px-8 tw-pt-4 tw-text-sm tw-text-gray-700">
        Organization details store information about the organization. You can update the organization details later by clicking on the name of the organization.
      </div>
      <div className="tw-px-8 tw-py-1">
        <button className="tw-text-sm tw-font-medium tw-text-[#0b1151] tw-underline hover:tw-opacity-80">
          Data Import/Export
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-5 tw-mt-5 tw-ml-8 tw-w-[693px] tw-h-[490px] tw-grid tw-grid-cols-2 tw-gap-y-3 tw-gap-x-4"
      >
        {[
          { label: 'Organization Name', name: 'name', placeholder: 'First name' },
          { label: 'Contact', name: 'contact', placeholder: 'Phone number', type: 'phone' },
          { label: 'Organization Email ID', name: 'email', placeholder: 'Yourname@gmail.com' },
          { label: 'Organization ID', name: 'organizationId', placeholder: 'AB12456' },
          { label: 'State', name: 'state', placeholder: 'Andhra Pradesh' },
          { label: 'Address', name: 'address', placeholder: 'XYZ College' },
          { label: 'Pincode', name: 'pincode', placeholder: '776253' },
          { label: 'Turnitin URL', name: 'turnitinUrl', placeholder: 'example.com/index.htm' },
          { label: 'Turnitin API Key', name: 'turnitinApiKey', placeholder: 'API_KEY' },
        ].map(({ label, name, placeholder }) => (
          <div key={name} className="tw-flex tw-flex-col">
            <label className="tw-text-[12px] tw-font-medium tw-font-montserrat tw-mb-1">{label}</label>
            {label === 'Contact' ? (
              <div className="tw-flex tw-items-center tw-border tw-rounded tw-bg-white" style={{ width: '286px', height: '30px' }}>
                <div className="tw-relative tw-w-[40px] tw-h-full tw-flex tw-items-center tw-justify-center">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={(e) => setFormData((prev) => ({ ...prev, countryCode: e.target.value }))}
                    className="tw-opacity-0 tw-absolute tw-w-full tw-h-full tw-z-10 cursor-pointer"
                  >
                    {flagOptions.map((opt) => (
                      <option key={opt.code} value={opt.code}>{opt.name}</option>
                    ))}
                  </select>
                  <img
                    src={flagOptions.find((f) => f.code === formData.countryCode)?.flag}
                    alt="flag"
                    className="tw-w-5 tw-h-5 tw-object-cover tw-rounded-sm"
                  />
                </div>
                <input
                  type="tel"
                  name="contact"
                  placeholder="Phone number"
                  className="tw-text-sm tw-w-full tw-px-1 tw-border-l"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <input
                type="text"
                name={name}
                placeholder={placeholder}
                className="tw-border tw-rounded tw-px-2"
                style={{ width: '286px', height: '30px' }}
                value={formData[name]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}

        <div className="tw-col-span-2 tw-flex tw-items-center tw-gap-2 tw-mt-1">
          <input
            type="checkbox"
            name="githubCreated"
            className="tw-border"
            checked={formData.githubCreated}
            onChange={handleChange}
          />
          <label htmlFor="githubCreated" className="tw-text-sm">
            Organization created in GitHub
          </label>
        </div>

        <div className="tw-col-span-2">
          <div className="tw-text-[#1A237E] tw-italic tw-mb-1" style={{ fontSize: '14px', lineHeight: '20px' }}>
            All fields are mandatory*
          </div>
          <hr className="tw-border tw-border-gray-200 tw-w-full" />
        </div>

        {formInvalid && (
          <div className="tw-col-span-2 tw-flex tw-items-center" style={{ width: '500px', height: '20px' }}>
            <div className="tw-bg-[#F44336] tw-rounded-full tw-w-[20px] tw-h-[20px] tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold tw-mr-2" style={{ fontSize: '14px', lineHeight: '20px' }}>
              !
            </div>
            <span className="tw-text-[#F44336] tw-italic" style={{ fontSize: '14px', lineHeight: '20px' }}>
              Please enter all fields to proceed ahead.
            </span>
          </div>
        )}

        <div className="tw-col-span-2 tw-mt-1">
          <button
            type="submit"
            className="tw-bg-[#1A237E] tw-text-white tw-rounded-md tw-text-sm tw-font-semibold hover:tw-opacity-90"
            style={{ width: '93px', height: '38px' }}
          >
            Submit
          </button>
        </div>
      </form>

      {showModal && (
        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-30 tw-flex tw-items-center tw-justify-center z-50">
          <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-lg tw-w-[320px] tw-text-center">
            <div className="tw-text-green-600 tw-text-3xl tw-mb-2">✔</div>
            <h2 className="tw-text-xl tw-font-semibold">Completed</h2>
            <p className="tw-text-sm tw-mt-2">We have successfully registered the organization details.</p>
            <button
              className="tw-mt-4 tw-bg-[#1A237E] tw-text-white tw-px-4 tw-py-2 tw-rounded hover:tw-opacity-90"
              onClick={() => setShowModal(false)}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddOrganization;*/


import React, { useState } from 'react';

const flagOptions = [
  { code: '+91', name: 'India', flag: 'https://flagcdn.com/w40/in.png' },
  { code: '+1', name: 'USA', flag: 'https://flagcdn.com/w40/us.png' },
  { code: '+44', name: 'UK', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: '+61', name: 'Australia', flag: 'https://flagcdn.com/w40/au.png' },
  { code: '+971', name: 'UAE', flag: 'https://flagcdn.com/w40/ae.png' },
];

const AddOrganization = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    countryCode: '+91',
    organizationId: '',
    state: '',
    address: '',
    pincode: '',
    turnitinUrl: '',
    turnitinApiKey: '',
    githubCreated: false,
  });

  const [formInvalid, setFormInvalid] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setFormInvalid(false);
  };

  const validate = () => {
    for (const key in formData) {
      if (
        typeof formData[key] === 'string' &&
        !formData[key].trim() &&
        key !== 'countryCode'
      ) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    setFormInvalid(!isValid);

    if (isValid) {
      const fullPhone = `${formData.countryCode} ${formData.contact}`;
      const dataToSubmit = { ...formData, fullPhone };

      localStorage.setItem('orgData', JSON.stringify(dataToSubmit));

      setShowModal(true); // Show success modal
    }
  };

  return (
    <div className="tw-w-full tw-bg-[#E8EAEE] tw-min-h-screen tw-pt-25 tw-pb-50 tw-mt-[-25px] tw-ml-[-30px]">
      <div className="tw-bg-white tw-flex tw-items-center tw-gap-6 tw-border-b tw-border-gray-300" style={{ width: '1271px', height: '52px', padding: '0 24px' }}>
        <h1 className="tw-text-base tw-font-semibold tw-text-gray-800">Organization</h1>
        <p className="tw-text-sm tw-text-gray-500">
          Home &gt; Organization &gt; Add Organization
        </p>
      </div>

      <div className="tw-px-8 tw-pt-4 tw-text-sm tw-text-gray-700">
        Organization details store information about the organization. You can update the organization details later by clicking on the name of the organization.
      </div>
      <div className="tw-px-8 tw-py-1">
        <button className="tw-text-sm tw-font-medium tw-text-[#0b1151] tw-underline hover:tw-opacity-80">
          Data Import/Export
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-5 tw-mt-5 tw-ml-8 tw-w-[693px] tw-h-[490px] tw-grid tw-grid-cols-2 tw-gap-y-3 tw-gap-x-4"
      >
        {[
          { label: 'Organization Name', name: 'name', placeholder: 'First name' },
          { label: 'Contact', name: 'contact', placeholder: 'Phone number' },
          { label: 'Organization Email ID', name: 'email', placeholder: 'Yourname@gmail.com' },
          { label: 'Organization ID', name: 'organizationId', placeholder: 'AB12456' },
          { label: 'State', name: 'state', placeholder: 'Andhra Pradesh' },
          { label: 'Address', name: 'address', placeholder: 'XYZ College' },
          { label: 'Pincode', name: 'pincode', placeholder: '776253' },
          { label: 'Turnitin URL', name: 'turnitinUrl', placeholder: 'example.com/index.htm' },
          { label: 'Turnitin API Key', name: 'turnitinApiKey', placeholder: 'API_KEY' },
        ].map(({ label, name, placeholder }) => (
          <div key={name} className="tw-flex tw-flex-col">
            <label className="tw-text-[12px] tw-font-medium tw-font-montserrat tw-mb-1">{label}</label>

            {label === 'Contact' ? (
              <div className="tw-flex tw-items-center tw-border tw-rounded tw-bg-white" style={{ width: '286px', height: '30px' }}>
                <div className="tw-relative tw-w-[40px] tw-h-full tw-flex tw-items-center tw-justify-center">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={(e) => setFormData((prev) => ({ ...prev, countryCode: e.target.value }))}
                    className="tw-opacity-0 tw-absolute tw-w-full tw-h-full tw-z-10 cursor-pointer"
                  >
                    {flagOptions.map((opt) => (
                      <option key={opt.code} value={opt.code}>{opt.name}</option>
                    ))}
                  </select>
                  <img
                    src={flagOptions.find((f) => f.code === formData.countryCode)?.flag}
                    alt="flag"
                    className="tw-w-5 tw-h-5 tw-object-cover tw-rounded-sm"
                  />
                </div>
                <input
                  type="tel"
                  name="contact"
                  placeholder="Phone number"
                  className="tw-text-sm tw-w-full tw-px-1 tw-border-l"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <input
                type="text"
                name={name}
                placeholder={placeholder}
                className="tw-border tw-rounded tw-px-2"
                style={{ width: '286px', height: '30px' }}
                value={formData[name]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}

        <div className="tw-col-span-2 tw-flex tw-items-center tw-gap-2 tw-mt-1">
          <input
            type="checkbox"
            name="githubCreated"
            className="tw-border"
            checked={formData.githubCreated}
            onChange={handleChange}
          />
          <label htmlFor="githubCreated" className="tw-text-sm">
            Organization created in GitHub
          </label>
        </div>

        <div className="tw-col-span-2">
          <div className="tw-text-[#1A237E] tw-italic tw-mb-1" style={{ fontSize: '14px', lineHeight: '20px' }}>
            All fields are mandatory*
          </div>
          <hr className="tw-border tw-border-gray-200 tw-w-full" />
        </div>

        {formInvalid && (
          <div className="tw-col-span-2 tw-flex tw-items-center" style={{ width: '500px', height: '20px' }}>
            <div className="tw-bg-[#F44336] tw-rounded-full tw-w-[20px] tw-h-[20px] tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold tw-mr-2" style={{ fontSize: '14px', lineHeight: '20px' }}>
              !
            </div>
            <span className="tw-text-[#F44336] tw-italic" style={{ fontSize: '14px', lineHeight: '20px' }}>
              Please enter all fields to proceed ahead.
            </span>
          </div>
        )}

        <div className="tw-col-span-2 tw-mt-1">
          <button
            type="submit"
            className="tw-bg-[#1A237E] tw-text-white tw-rounded-md tw-text-sm tw-font-semibold hover:tw-opacity-90"
            style={{ width: '93px', height: '38px' }}
          >
            Submit
          </button>
        </div>
      </form>

      {/* ✅ Success Popup */}
      {showModal && (
        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-30 tw-flex tw-items-center tw-justify-center tw-z-50">
          <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-lg tw-w-[320px] tw-text-center">
            
            <div className="tw-flex tw-items-center tw-justify-center tw-mb-3">
              <svg
                className="tw-w-11 tw-h-11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4CAF50"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" fill="none" />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </div>
            <h2 className="tw-text-sl tw-font-semibold tw-text-[#1A237E] tw-font-montserrat">Completed</h2>
            <p className="tw-text-sm tw-text-gray-700 tw-mt-2">
              We have successfully registered the organization details.
            </p>
            <button
              className="tw-mt-4 tw-bg-[#1A237E] tw-text-white tw-px-4 tw-py-2 tw-rounded hover:tw-opacity-90"
              onClick={() => setShowModal(false)}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddOrganization;



