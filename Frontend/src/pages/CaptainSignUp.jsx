import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignUp = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };

    console.log(userData);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-6 h-screen w-full flex flex-col justify-between">
      <div>
        <img
          src="images/uber-driver-logo.png"
          className="w-24 mb-2"
          alt="logo"
        />

        <form
          onSubmit={(e) => {
            handleRegister(e);
          }}
        >
          <h3 className="text-lg mb-2 font-normal">What's our Captain name?</h3>
          <div className="flex items-center gap-4 mb-5">
            <input
              type="text"
              className="w-1/2 bg-[#eeeeee] px-4 py-2 rounded-lg border text-lg placeholder:text-base"
              required
              value={firstname}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First Name"
            />

            <input
              type="text"
              className="w-1/2 bg-[#eeeeee] px-4 py-2 rounded-lg border text-lg placeholder:text-base"
              required
              value={lastname}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last Name"
            />
          </div>

          <h3 className="text-lg mb-2 font-normal">What's our Captain email?</h3>
          <input
            type="email"
            className="bg-[#eeeeee] mb-5 px-4 py-2 rounded-lg border w-full text-lg placeholder:text-base"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email@example.com"
          />

          <h3 className="text-lg mb-2 font-normal">Password</h3>
          <input
            type="password"
            className="bg-[#eeeeee] mb-5 px-4 py-2 rounded-lg border w-full text-lg placeholder:text-base"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <button className="mt-2 w-full bg-black text-white p-4 rounded-lg font-medium text-base hover:opacity-90">
            Register
          </button>
        </form>

        <h3 className="text-center my-4">
          Already have a account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </h3>
      </div>

      <div className="pb-6">
        <p className="text-slate-500 font-normal text-sm text-justify !leading-tight">
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="underline underline-offset-2 text-black">Privacy Policy</span> and <span className="underline underline-offset-2 text-black">Terms of Service </span>
          apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignUp;
