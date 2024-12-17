import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const job = useLoaderData();
   const {
     _id,
     title,
     location,
     jobType,
     category,
     applicationDeadline,
     salaryRange,
     description,
     company,
     requirements,
     responsibilities,
     status,
     hr_email,
     hr_name,
     company_logo,
   } = job;
  return (
    <div>
      <h2>Job details: {title}</h2>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;