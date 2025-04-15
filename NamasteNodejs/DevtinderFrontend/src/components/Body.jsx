import {Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const fetchUser = async () => {
    if(userData) return;
    try {
      const result = await axios.get(BASE_URL + "/api/v1/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(result.data));

    } catch (error) {
      if(error.status === 401){
        navigate("/login");
      }
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
      fetchUser();
  }, []);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Body;
