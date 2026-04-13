import React from "react";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFCF8] px-4">
      <div className="max-w-4xl w-full bg-white p-8 md:p-12 rounded-3xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="bg-red-100 p-4 rounded-2xl">
            <AlertTriangle size={48} className="text-red-500" />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#131313]">
              404 Page Not Found
            </h2>
            <p className="text-[#131313CC] mt-1">
              Oops! The page you're looking for doesn't exist.
            </p>
          </div>
        </div>

        <div>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-[#23BE0A] hover:bg-[#1E9F08] text-white px-8 py-3 rounded-lg font-bold transition duration-300 shadow-md"
          >
            <ArrowLeft size={18} />
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
