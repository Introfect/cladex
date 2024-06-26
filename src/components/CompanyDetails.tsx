import React from 'react';

const CompanyDetails = () => {
  return (
    <div className=" mx-auto bg-white border-t border-gray-200 md:pl-16 py-6">
      <div className="flex items-center mb-4 ">
        <img src="/image4.png" alt="Atlassian Logo" className="w-8 h-8 mr-2" />
        <h2 className="text-xl font-semibold">Atlassian</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-gray-600">Company size</h3>
          <p>1k - 2k Employees</p>
        </div>
        <div>
          <h3 className="text-gray-600">Type</h3>
          <p>Private</p>
        </div>
        <div>
          <h3 className="text-gray-600">Sector</h3>
          <p>Information Technology, Infrastructure</p>
        </div>
        <div>
          <h3 className="text-gray-600">Funding</h3>
          <p>Bootstrapped</p>
        </div>
        <div>
          <h3 className="text-gray-600">Founded In</h3>
          <p>2019</p>
        </div>
        <div>
          <h3 className="text-gray-600">Founded By</h3>
          <p>Scott Farquhar, Mike Cannon-Brookes</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
