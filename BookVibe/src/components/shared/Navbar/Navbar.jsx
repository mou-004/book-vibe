import { Menu, User, UserPlus } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? "text-green-500 border border-green-500" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Books"}
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? "text-green-500 border border-green-500" : ""}`
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"page-to-read"}
          className={({ isActive }) =>
            `font-semibold mr-1 ${isActive ? "text-green-500 border border-green-500" : ""}`
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="text-2xl font-bold">
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-3">
        <input
          type="checkbox"
          className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)]"
          value="dark"
        />

        <Link
          to={"/sign-in"}
          className="btn bg-green-500 hover:bg-green-600 text-white"
        >
          <span className="lg:hidden">
            <User size={16} />
          </span>
          <span className="hidden lg:inline">Sign In</span>
        </Link>
        <Link
          to={"/sign-up"}
          className="btn bg-[#59C6D2] hover:bg-[#35a1ad] text-white"
        >
          <span className="lg:hidden">
            <UserPlus size={16} />
          </span>
          <span className="hidden lg:inline">Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
