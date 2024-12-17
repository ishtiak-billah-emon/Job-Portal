import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/UseAuth';

const MyApplication = () => {
  const {user} = useAuth();
  const email = user.email;
  const [jobs, setJobs] = useState([]);
  useEffect(()=> {
    fetch(`http://localhost:5000/job-applications?email=${email}`)
    .then(res => res.json())
    .then(data=> setJobs(data))
  },[email])
  return (
    <div>
      <h2 className='text-3xl'>My application: {jobs.length}</h2>

    </div>
  );
};

export default MyApplication;