import React from "react";
import { Link } from "react-router";

const Regester = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#000814] via-[#000814] to-[#001D6E] hover:scale-95">
        <div className="bg-[#1E293B]/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-[90%] sm:w-[400px] text-center border-2 border-amber-300 shadow-amber-50">
          <h1 className="text-2xl font-bold mb-6 text-[#6C63FF]">
            Register for AI Model Inventory Manager
          </h1>

          <form className="space-y-4 text-left">
            {/* Name */}
            <div>
              <label className="block mb-1 text-sm text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-[#6C63FF]/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm text-gray-300">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-[#6C63FF]/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-300">
                Photo URL
              </label>
              <input
                type="url"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-[#6C63FF]/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-sm text-gray-300">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#0F172A] border border-[#6C63FF]/40 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#00C9A7] text-[#0F172A] py-2 rounded-lg font-semibold hover:shadow-[0_0_15px_rgba(0,201,167,0.5)] transition-all"
            >
              Register
            </button>
          </form>

          <div className="my-5 text-gray-400 text-sm">or</div>

          <button className="w-full flex items-center justify-center gap-2 bg-white text-[#0F172A] py-2 rounded-lg font-medium hover:bg-gray-200 transition-all">
            <i className="fa-brands fa-google text-lg text-[#EA4335]"></i>
            Sign up with Google
          </button>

          <p className="mt-5 text-gray-400 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#00C9A7] hover:text-[#6C63FF] transition-all"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regester;
