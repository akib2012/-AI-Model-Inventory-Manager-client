import React from "react";
import { Link, NavLink } from "react-router";
import logoimg from '../assets/logo.png'
import { useContext } from "react";
import Authcontext from "../ContextAuth/Authcontext";

const Header = () => {
    
  const {user, singout} = useContext(Authcontext);


    const links = <>
       <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='/addmodel'>Add Model</NavLink></li>
       <li><NavLink>View Model</NavLink></li>
       <li><NavLink></NavLink></li>

       
    </>

  const handlelogout = () => {

    singout()
    .then(res => console.log(res.user))
    .catch(eror  => console.log(eror))

  }




  return (
    <div className="bg-[#000814] sticky">
      <div className="text-white navbar  max-w-10/12 m-auto shadow-md">
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
            <li className="text-xl font-bold"> {links}</li>
            </ul>
          </div>
          
          <div className="flex  justify-center items-center gap-2">
            <a className=" text-xl">ModelTrack AI </a>
            <img className="w-10 h-10 rounded-full" src={logoimg} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        {
          user ? 
          <div className="navbar-end">
          <button onClick={handlelogout}  className=" px-8  py-1.5 cursor-pointer rounded-xl bg-[#0528f2]">Logout</button>
        </div>
        : <div className="navbar-end">
          <Link to='/login' className=" px-8  py-1.5 cursor-pointer rounded-xl bg-[#0528f2]">Login</Link>
        </div>
        }
      </div>
    </div>
  );
};

export default Header;
