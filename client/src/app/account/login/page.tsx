import React from "react";
import Link from "next/link";

function Page(props) {

  const loginSubmit = async (e) =>{

  }

  return (
    <div>
      <div className=" pet-stock-color hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center text-white lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="link-hover link label-text-alt">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className="mt-10 text-center">Don't have an account?</p>
              <Link href="/account/sign-up">
              <div className="form-control ">
                <button className="btn btn-success">Sign Up</button>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
