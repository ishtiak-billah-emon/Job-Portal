import React from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
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
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="flex gap-2 m-2">
        <figure>
          <img className="w-16" src={company_logo} alt="company logo" />
        </figure>
        <div>
          <h4 className="sm:text-xl md:text-2xl">{company}</h4>
          <h5 className="text-base flex items-center gap-2">
            {" "}
            <MdLocationOn />
            {location}
          </h5>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap text-center px-2 ">
          {requirements.map((skill, i) => (
            <p
              key={i}
              className="border rounded-md hover:text-blue-700 hover:bg-slate-100"
            >
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center">
          <p>
            Salary: {job.salaryRange.min} - {job.salaryRange.max}
            {job.salaryRange.currency}
          </p>
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
