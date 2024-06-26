import React from 'react';

const JobDescription = () => {
  return (
    <div className='pl-10 md:pl-20'>
      <div className="mb-6">
        <h3 className="font-semibold">About the job</h3>
        <ol className="list-decimal pl-5">
          <li>Handle the UI/UX research design</li>
          <li>Work on researching on latest web applications designs & trends</li>
          <li>Work on conceptualizing and visualizing</li>
          <li>Work on creating graphics content and other graphic related works</li>
        </ol>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold">Benefits</h3>
        <ul className="list-disc pl-5">
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold">Schedule</h3>
        <p>Day shift</p>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold">Supplemental pay types</h3>
        <ul className="list-disc pl-5">
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold">Work Location</h3>
        <p>In person</p>
      </div>
    </div>
  );
};

export default JobDescription;
