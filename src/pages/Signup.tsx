import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupType } from "@avanindratiwari/blogging-common";
import axios from "axios";

export const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState<SignupType>({
    name: "",
    email: "",
    password: "",
  });
  async function sendRequest() {
    const response = await axios.post(
      `https://backend.heyavanindra.workers.dev/api/v1/user/signup`,
      input
    );
    const jwt = response.data.jwt;
    

    
    localStorage.setItem("token", "Bearer " + jwt);
    axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;

    navigate("/blog");
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5dc]">
        <div className="max-w-md w-full bg-gray-200 shadow-2xl rounded-xl p-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="Name"
                      name="Name"
                      type="text"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) => {
                        setInput({
                          ...input,
                          name: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) => {
                        setInput({
                          ...input,
                          email: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) => {
                        setInput({
                          ...input,
                          password: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between"></div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={sendRequest}
                >
                  Sign in
                </button>
              </div>
              <div className="text-center pt-3 text-sm font-medium text-gray-700">
                already have account?{" "}
                <Link className="text-purple-800 font-bold" to={"/blog"}>
                  login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
