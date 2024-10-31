import {
  FiCheckSquare,
  FiFolder,
  FiTarget,
  FiEdit,
  FiCalendar,
  FiTrendingUp,
} from "react-icons/fi";
import TestimonialSlider from "./TestimonialSlider";
import React from "react";
import Divider from "@mui/material"

export const Home = React.memo(() => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center lg:text-left mt-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
          Welcome to ZenFlow
        </h1>
        <p className="mt-4 text-base md:text-lg font-light text-gray-400">
          The most powerful tool for managing your projects and tasks.
        </p>
      </section>

      {/* Quick Links Section */}
      <section className="mt-12 px-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-200">
          Quick Links
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Quick Links Cards */}
          <div className="bg-gray-800 hover:bg-gray-700 p-6 rounded-lg shadow-md text-gray-200 flex flex-col items-center md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 transition-colors duration-200">
            <FiCheckSquare className="text-3xl text-blue-400" />
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Tasks</h3>
              <p className="text-sm text-gray-400">
                Manage your tasks efficiently.
              </p>
            </div>
          </div>
          <div className="bg-gray-800 hover:bg-gray-700 p-6 rounded-lg shadow-md text-gray-200 flex flex-col items-center md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 transition-colors duration-200">
            <FiFolder className="text-3xl text-green-400" />
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Projects</h3>
              <p className="text-sm text-gray-400">
                Oversee all your project details.
              </p>
            </div>
          </div>
          <div className="bg-gray-800 hover:bg-gray-700 p-6 rounded-lg shadow-md text-gray-200 flex flex-col items-center md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 transition-colors duration-200">
            <FiTarget className="text-3xl text-yellow-400" />
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Goals</h3>
              <p className="text-sm text-gray-400">Set and track your goals.</p>
            </div>
          </div>
          <div className="bg-gray-800 hover:bg-gray-700 p-6 rounded-lg shadow-md text-gray-200 flex flex-col items-center md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 transition-colors duration-200">
            <FiEdit className="text-3xl text-red-400" />
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Notes</h3>
              <p className="text-sm text-gray-400">
                Quickly jot down your ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="flex flex-col items-center px-4">
        <section className="mt-16 w-full">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-200">
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {/* Feature Cards */}
            <div className="flex items-center transition-all ease-in-out duration-200 hover:scale-105 bg-gray-800 hover:bg-gray-700 p-4 rounded-lg shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 text-blue-400 rounded-full flex items-center justify-center text-2xl">
                <FiCalendar />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-100">
                  Task Management
                </h3>
                <p className="text-sm text-gray-400">
                  Organize tasks with deadlines, priorities, and statuses.
                </p>
              </div>
            </div>
            <div className="flex items-center transition-all ease-in-out duration-200 hover:scale-105 bg-gray-800 hover:bg-gray-700 p-4 rounded-lg shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 text-green-400 rounded-full flex items-center justify-center text-2xl">
                <FiTrendingUp />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-100">
                  Project Tracking
                </h3>
                <p className="text-sm text-gray-400">
                  Track your progress and keep up with project milestones.
                </p>
              </div>
            </div>
            <div className="flex items-center transition-all ease-in-out duration-200 hover:scale-105 bg-gray-800 hover:bg-gray-700 p-4 rounded-lg shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 text-yellow-400 rounded-full flex items-center justify-center text-2xl">
                <FiTarget />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-100">
                  Goal Setting
                </h3>
                <p className="text-sm text-gray-400">
                  Define and reach your personal and professional goals.
                </p>
              </div>
            </div>
            {/* Notes Feature Card */}
            <div className="flex items-center transition-all ease-in-out duration-200 hover:scale-105 bg-gray-800 hover:bg-gray-700 p-4 rounded-lg shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 text-red-400 rounded-full flex items-center justify-center text-2xl">
                <FiEdit />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-100">
                  Notes
                </h3>
                <p className="text-sm text-gray-400">
                  Jot down ideas and information with ease.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Divider sx={{bgcolor: "rgb(156, 163, 175)", my: "5vh"}} aria-hidden="true" variant="middle" flexItem />
        {/* Testimonials Section */}
        <section className="mt-8 w-full flex-col flex justify-center">
          <h2 className="text-xl text-center md:text-2xl font-semibold mb-4 text-gray-200">
            Testimonials
          </h2>
          <div className="w-full md:w-[50vw] mx-auto">
            <TestimonialSlider />
          </div>
        </section>
      </div>
    </div>
  );
});
