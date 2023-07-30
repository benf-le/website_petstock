import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

function Page(props) {

    const [user, setUser] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const [confirmPassword, setConfirmPassword] = React.useState({confirmPassword: ''})


    const onSignUp = async () => {

    }

    return (
        <div>
            <Navbar/>
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
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    className="input input-bordered "
                                    onChange={(e) => setUser({...user, firstName: e.target.value})}

                                />
                            </div>
                            <div className="form-control py-1 ">
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    className="input input-bordered"
                                    onChange={(e) => setUser({...user, lastName: e.target.value})}

                                />
                            </div>
                            <div className="form-control py-1">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="input input-bordered"
                                    onChange={(e) => setUser({...user, email: e.target.value})}

                                />
                            </div>
                            <div className="form-control py-1">
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    className="input input-bordered"
                                    onChange={(e) => setUser({...user, password: e.target.value})}

                                />
                            </div>
                            <div className="form-control py-1">
                                <input
                                    id="confirmPassword"
                                    type="text"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    className="input input-bordered"
                                    onChange={(e) => setConfirmPassword({
                                        ...confirmPassword,
                                        confirmPassword: e.target.value
                                    })}

                                />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-success" onClick={onSignUp}>Sign Up
                                </button>

                                <p className="mt-10 text-center">Already have an account?</p>
                                <Link href="/account/login">
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
