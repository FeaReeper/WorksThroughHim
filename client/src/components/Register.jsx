import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/UserContext";
import Nav from "./Nav";

const Register = () => {
  const { setCurrentUser } = useContext(userContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [User, setUser] = useState({
    name: '',
    email: '',
    church: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setUser({
      ...companyUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/register", User, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        setCurrentUser(res.data);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        // Set errors for Validations here
        setError(err.response.data.error.errors);
      });
  };

  return (
    <div>
      <div className="victory-bg">
        <Nav/>
      </div>
      <div className="container mx-auto h-screen pt-20">
        <div className="w-10/12 sm:w-full mx-auto bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 space-y-4 md:space-y-4 sm:p-8">
            <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Register
            </h2>
            <div>
              <form
                onSubmit={handleSubmit}
                className=" justify-between space-y-4 space-x-4 md:space-y-6"
              >
                <div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={handleChange}
                      className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    {error.name ? (
                      <p className="text-red-600">{error.name.message}</p>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="church"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Church:
                    </label>
                    <input
                      type="text"
                      name="church"
                      id="church"
                      onChange={handleChange}
                      className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    {error.church ? (
                      <p className="text-red-600">{error.church.message}</p>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email:
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    {error.email ? (
                      <p className="text-red-600">{error.email.message}</p>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password:
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={handleChange}
                      className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    {error.password ? (
                      <p className="text-red-600">{error.password.message}</p>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm Password:
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      onChange={handleChange}
                      className="bg-gray-50 mb-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    {error.confirmPassword ? (
                      <p className="text-red-600">
                        {error.confirmPassword.message}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div>
                  <button className="w-full mt-5 bg-sky-300 hover:bg-sky-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register