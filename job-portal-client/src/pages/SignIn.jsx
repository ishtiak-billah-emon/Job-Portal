import React, { useContext } from "react";
import registerLottieData from "../assets/Lotttie/Animation - Register Login.json";
import Lottie from "lottie-react";
import AuthContext from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
 // console.log('location in login : ', location);
const from = location.state || '/';
const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //sign In

    signInUser(email, password)
      .then((result) => {
        // Signed in
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, ': ', errorMessage);
      });

  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSignIn}>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white ">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
