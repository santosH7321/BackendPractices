import { Link, useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constant";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const result = await axios.post(
        BASE_URL + "/api/v1/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(result.data.user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <section className="bg-black w-full min-h-screen">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 max-md:pt-[60px]">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md pt-[80px]">
            <h2 className="text-center text-2xl font-bold leading-tight text-white">
              Login your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                to={"/signup"}
                className="font-semibold text-sky-400 transition-all duration-200 hover:underline"
              >
                Create a new account
              </Link>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-50"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-50"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <Link
                      href={"/login/forgetpassword"}
                      className="text-sm font-semibold text-green-300 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-white px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-gray-200 cursor-pointer"
                    onClick={handleLogin}
                  >
                    Login <HiArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
