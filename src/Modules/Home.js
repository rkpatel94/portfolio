import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToOtherPage = (path) => {
    navigate(path);
  };

  return (
    <div class="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
      <div class="mx-auto max-h-fit max-w-9xl  py-24 sm:px-6 lg:px-8">
        <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div class="mx-auto max-w-full text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-center sm: pb-20">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Hello, It's Rajkumar Patel
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">
              A React JS Developer with 4 + years Experience.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => goToOtherPage("/details")}
                class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                More Details
              </button>
              <button
                onClick={() => goToOtherPage("/my-resume")}
                class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
