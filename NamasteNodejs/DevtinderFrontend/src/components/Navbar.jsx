import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();  

  const handleLogout = async () => {
    try {
      await axios.post(
        BASE_URL + "/api/v1/logout",
        {},
        { withCredentials: true }
      );
      dispatch(removeUser());
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1 mx-10">
        <Link to={"/"} className="font-semibold cursor-pointer text-xl">
          DevTinder
        </Link>
      </div>

      <div className="mx-10 ">
        {user ? (
          <div className="dropdown dropdown-end flex">
            <p className="mr-5 flex items-center">Welcome, {user?.firstName}</p>

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="user photo" src={user?.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/profile"} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to={"/feed"}>Feed</Link>
              </li>
              <li>
                <Link to={"/logout"} onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-5 list-none mx-10 font-semibold text-lg">
            <li>
              <Link to={"/signup"}>Signup</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
