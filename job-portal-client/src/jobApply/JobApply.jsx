import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const {user} = useAuth();
  const navigate = useNavigate();


  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    // console.log(linkedin, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume
    }

    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId) {
        Swal.fire({
          title: "Successfully Submited",
          icon: "success",
          draggable: true,
        });
        navigate('/myApplications');
      }
    })

  };
  return (
    <div className="card bg-base-100 w-full shadow-2xl">
      <h1 className="text-5xl font-bold text-center">
        Apply for job and Good luck!
      </h1>
      <form className="card-body" onSubmit={submitJobApplication}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn URL</span>
          </label>
          <input
            type="url"
            placeholder="Linkedin URL"
            className="input input-bordered"
            name="linkedin"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input
            type="url"
            name="github"
            placeholder="Github URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="Resume URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
