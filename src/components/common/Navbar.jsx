import React, { useContext } from "react";
import { IoCarSport } from "react-icons/io5";
import { NavLink } from "react-router";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logoutUser()
      .then(() => alert("Logged Out Successfully"))
      .catch((error) => alert(error.code));
  };
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 rounded-none border-black text-black" : ""
          }
          to={`/`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 rounded-none border-black text-black" : ""
          }
          to={`/about`}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 rounded-none border-black text-black" : ""
          }
          to={`/cars`}
        >
          Cars
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 rounded-none border-black text-black" : ""
          }
          to={`/contact`}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 rounded-none border-black text-black" : ""
          }
          to={`/profile`}
        >
          Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="shadow-sm">
      <div className="navbar bg-base-100 max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {user ? (
                <h3
                  className="lg:hidden text-black font-semibold flex items-center gap-2 text-sm ml-2 mb-3
                "
                >
                  <FaUserCircle size={16} /> {user.displayName}
                </h3>
              ) : (
                ""
              )}
              {links}
            </ul>
          </div>
          <NavLink to={`/`} className="btn btn-ghost text-xl lobster">
            <IoCarSport size={32} /> Drive{" "}
            <span className="text-black">Hub</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
            <>
              <h3 className="text-black font-semibold hidden lg:flex items-center gap-2 text-lg lobster">
                <FaUserCircle size={24} /> {user.displayName}
              </h3>
              <button
                onClick={handleLogOut}
                className="btn bg-black text-white rounded-none"
              >
                Log Out
              </button>
            </>
          ) : (
            <NavLink
              to={`/auth/login`}
              className="btn bg-black text-white rounded-none"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
