import React from 'react';

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>

        <h2 className="mt-4 text-3xl font-semibold text-gray-800 dark:text-white">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-md mx-auto">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="px-6 py-3 bg-[#2596be] text-white rounded-lg  transition cursor-pointer"
          >
            Go to Home
          </a>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;