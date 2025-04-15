import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    if (feed.length > 0) return;

    try {
      const result = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(result.data));
      console.log("Feed API data:", result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);
  return feed.length > 0 ? (
    <div className="w-full h-screen flex justify-center items-center">
      <UserCard user={feed[0]} />
    </div>
  ) : (
    <div className="w-full h-screen flex justify-center items-center">
      <p className="text-5xl font-semibold select-none text-gray-600">No users in feed</p>
    </div>
  );
};

export default Feed;
