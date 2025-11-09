import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import logoimg from "../assets/logo.png";
import Authcontext from "../ContextAuth/Authcontext";

const Header = () => {
  const { user, singout } = useContext(Authcontext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addmodel">Add Model</NavLink>
      </li>
      <li>
        <NavLink to="/viewsallmodels">View Model</NavLink>
      </li>
    </>
  );

  const handlelogout = () => {
    singout()
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="z-10 mb-[-20px] fixed top-0 left-0 w-full bg-[#000814] shadow-md border-b border-[#1E293B]">
        <div className="text-white navbar max-w-6xl mx-auto px-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#1E293B] rounded-xl z-50 mt-3 w-52 p-3 shadow-lg"
              >
                <li className="text-base font-medium">{links}</li>
              </ul>
            </div>

            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 rounded-full"
                src={logoimg}
                alt="Logo"
              />
              <Link to="/" className="text-xl font-semibold text-white">
                ModelTrack AI
              </Link>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base font-medium">
              {links}
            </ul>
          </div>

          <div className="navbar-end">
            {user ? (
              <button
                onClick={handlelogout}
                className="px-6 py-2 cursor-pointer rounded-xl bg-[#0528f2] hover:bg-[#274bfa] transition-all"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-6 py-2 cursor-pointer rounded-xl bg-[#0528f2] hover:bg-[#274bfa] transition-all"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="pt-20"></div>
    </>
  );
};

export default Header;
