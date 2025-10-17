import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <ul className="flex justify-center items-center gap-5 border-b-2 h-15">
        <li>
          <NavLink
            to={"/product-list"}
            className={({ isActive }) =>
              isActive
                ? "bg-violet-500 rounded-2xl p-2 text-white"
                : "text-black p-2"
            }
          >
            Available product
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/my-order"}
            className={({ isActive }) =>
              isActive
                ? "bg-violet-500 rounded-2xl p-2 text-white"
                : "text-black p-2"
            }
          >
            My order
          </NavLink>
        </li>
         <li>
          <NavLink
            to={"/user-orders"}
            className={({ isActive }) =>
              isActive
                ? "bg-violet-500 rounded-2xl p-2 text-white"
                : "text-black p-2"
            }
          >
            Who ordered?
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/add-product"}
            className={({ isActive }) =>
              isActive
                ? "bg-violet-500 rounded-2xl p-2 text-white"
                : "text-black p-2"
            }
          >
            Add Product?
          </NavLink>
        </li>
        <li>
          <span className="text-red-400">Exit</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
