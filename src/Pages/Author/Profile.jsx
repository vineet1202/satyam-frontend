import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../Components/SideBar";
import { FaXmark } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoIosJournal } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";
import logo from "/logo.png";

const Profile = () => {
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    setDisplay(!display);
    if (!display) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div>
      <div className="fixed top-0 flex justify-between p-4 shadow w-screen bg-white">
        <button className="text-3xl text-indigo-600" onClick={handleClick}>
          <IoMenu />
        </button>
        <img src={logo} alt="logo" className=" aspect-auto w-36" />
        <div>John Doe</div>
      </div>
      <div
        className={`p-1 shadow-xl absolute top-0 bottom-0 z-50 bg-white w-1/5 ${display ? "-translate-x-0 " : "-translate-x-full"} ease-in-out duration-150`}
      >
        <button
          onClick={handleClick}
          className="text-3xl float-right mt-4 mr-4 text-indigo-600"
        >
          <FaXmark />
        </button>
        {/* 4/5 */}
        <div className="mt-28 w-3/4 mx-auto text-xl ">
          <Link to="/author/upload">
            <p className="mt-4 mb-4 border flex items-center px-2 py-1 rounded bg-blue text-white hover:opacity-60">
              <IoCreate className="mr-2" />
              Upload Journal
            </p>
          </Link>
          <Link to="/">
            <p className="border flex items-center px-2 py-1 rounded bg-blue text-white hover:opacity-60">
              <IoIosJournal className="mr-2" />
              Published Jorunals
            </p>
          </Link>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-40 bg-gray-900 opacity-50 pointer-events-none ${
          display ? "" : "hidden"
        }`}
      ></div>
    </div>
  );
};

export default Profile;
