import React from "react";
import Link from "next/link";

export default function Navbar(props) {
    return (
        <div>
            <header className="h-20">
                <div
                    className=" pet-stock-color navbar  flex h-20 flex-grow bg-base-100 fixed left-0 right-0 top-0 z-10 ">

                    <div className="basis-1/4 justify-center">
                        <Link href="/" className="btn btn-ghost text-xl text-white">PET STOCK</Link>
                    </div>


                    <div className="basis-1/2">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="basis-1/4 justify-center">
                        <Link href="/account/login">
                            <button className="btn btn-ghost text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                    />
                                </svg>
                                Login
                            </button>
                        </Link>
                        <button className="btn btn-ghost text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>


            <menu>
                <div className=" pet-stock-color navbar bg-base-100  ">
                    <div className="">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn  lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
                            >
                                <li>
                                    <a>Item 1</a>
                                </li>
                                <li>
                                    <a>Parent</a>
                                    <ul className="p-2">
                                        <li>
                                            <a>Submenu 1</a>
                                        </li>
                                        <li>
                                            <a>Submenu 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Item 3</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    /*---------------------------------*/


                  <div className="navbar flex hidden h-8 flex-grow justify-center lg:flex m-0">
                        <ul className="pet-stock-color menu menu-horizontal space-x-5 px-1">
                            <div className="dropdown dropdown-hover ">
                                <label tabIndex={0}
                                       className="btn m-1 text-white pet-stock-color border-none hover:text-sky-900 ">Dog</label>

                            </div>
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0}
                                       className="btn m-1 text-white pet-stock-color border-none hover:text-sky-900">Cat</label>
                                <ul tabIndex={0}
                                    className="mt-3 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0}
                                       className="btn m-1 text-white pet-stock-color border-none hover:text-sky-900">Fish</label>
                                <ul tabIndex={0}
                                    className="mt-3 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0}
                                       className="btn m-1 text-white pet-stock-color border-none hover:text-sky-900">Horse</label>
                                <ul tabIndex={0}
                                    className="mt-3 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0}
                                       className="btn m-1 text-white pet-stock-color border-none hover:text-sky-900">Bird</label>
                                <ul tabIndex={0}
                                    className="mt-3 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0}
                                       className="btn m-1 text-white pet-stock-color border-none hover:text-sky-900">Small
                                    Animal</label>
                                <ul tabIndex={0}
                                    className="mt-3 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0}
                                       className="btn m-1 text-white pet-stock-color border-none hover:text-sky-900">Reptile</label>
                                <ul tabIndex={0}
                                    className="mt-3 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0}
                                       className="btn m-1 text-white pet-stock-color border-none hover:text-sky-900">Pet
                                    Service</label>
                                <ul tabIndex={0}
                                    className="mt-3 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0}
                                       className="btn m-1 text-white pet-stock-color border-none hover:text-sky-900">More</label>
                                <ul tabIndex={0}
                                    className="mt-3 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>


                            <button className="btn btn-ghost bg-red-600 text-white">
                                Sale
                            </button>
                        </ul>
                    </div>
                </div>
            </menu>
        </div>
    );
}
