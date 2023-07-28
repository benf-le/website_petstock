import React from "react";
import Navbar from "@/app/components/Navbar";

function Page(props) {
  return (
    <div>
      <Navbar />
      <div className="  hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" card w-full max-w-xl flex-shrink-0 bg-base-100 shadow-2xl">
            <div>
              <h1 className="pt-10 text-center text-2xl font-bold">
                CREATE YOUR ACCOUNT
              </h1>
            </div>
            <div className=" card-body px-16 ">
              <div className="form-control py-1">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  className="input input-bordered "
                />
              </div>
              <div className="form-control py-1 ">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control py-1">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control py-1">
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control py-1">
                <input
                  type="text"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-success">
                  Create My Account
                </button>

                <p className="mt-10 text-center">Already have an account?</p>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
