import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-full flex flex-col justify-between">
        <div className="bg-cover bg-center h-full w-full bg-[url('https://images.unsplash.com/photo-1670361747602-0272a863e3c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <img src="images/uber-logo.png" className="w-32 p-5" alt="logo" />
        </div>

        <div className="px-6 py-6">
          <h2 className="text-3xl font-bold mb-5">Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex justify-center bg-black p-4 text-white text-xl font-medium rounded-md hover:opacity-90"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
