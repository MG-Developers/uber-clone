import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { user } = useContext(UserContext);
  // console.log(user);

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    console.log(userData);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-6 h-screen w-full flex flex-col justify-between">
      <div>
        <img
          src="images/uber-logo-black.png"
          className="w-20 mb-8"
          alt="logo"
        />

        <form
          onSubmit={(e) => {
            handleLogin(e);
          }}
        >
          <h3 className="text-xl mb-2 font-normal">What's your email?</h3>
          <input
            type="email"
            className="bg-[#eeeeee] mb-6 px-4 py-2 rounded-lg border w-full text-lg placeholder:text-base"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email@example.com"
          />
          <h3 className="text-xl mb-2 font-normal">Password</h3>
          <input
            type="password"
            className="bg-[#eeeeee] mb-6 px-4 py-2 rounded-lg border w-full text-lg placeholder:text-base"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <button className="mt-2 w-full bg-black text-white p-4 rounded-lg font-medium text-lg hover:opacity-90">
            Login
          </button>
        </form>

        <h3 className="text-center my-4">
          New here?{" "}
          <Link to="/signup" className="text-blue-600">
            Create new Account
          </Link>
        </h3>
      </div>

      <div className="pb-6">
        <Link
          to="/captain-login"
          className="flex items-center justify-center mt-4 w-full bg-yellow-500 text-white p-4 rounded-lg font-medium text-lg hover:opacity-90"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
