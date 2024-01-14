// Home.js

import React from "react";
import { Link } from "react-router-dom";
import {
  friendsList,
  activity,
  journal,
  medication,
  healthTips,
} from "../utils/dummyData";

const Home = () => {
  return (
    <>
      {/* header */}
      <div className="w-full h-full px-4  pt-4 md:px-40 flex flex-col justify-center mt-5">
        <h1 className="text-3xl font-bold mb-6 text-indigo-600">
          Elderly Wellness Tracker
        </h1>
        <p className="text-sm text-gray-700 mb-4">
          An Application created for the Elderly Care which includes sub apps
          like Journal, medication reminder and activity
        </p>
        <h2 className="text-1xl font-bold mb-6 text-indigo-600">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  overflow-y-auto">
          <Link
            to="/activity-tracker"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300 block"
          >
            Activity Tracker
          </Link>
          <Link
            to="/journal"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300 block"
          >
            Well-being Journal
          </Link>
          <Link
            to="/medication"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300 block"
          >
            Medication Reminder
          </Link>
        </div>
      </div>
      {/* activity tracker */}
      <div className="w-[90%] mx-auto px-10 pb-10   my-10">
        <h2 className="text-center text-2xl font-bold mb-6 text-indigo-600 my-5 mb-10 pt-5">
          Activities
        </h2>
        <div className="flex flex-wrap gap-10 justify-center">
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Walking
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-white  mb-5">
              <span class="text-3xl font-semibold">🏃</span>
              <span class="text-5xl font-extrabold tracking-tight">
                {activity.walking}
              </span>
              <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                Steps
              </span>
            </div>
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              You can Do it.
            </button>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Exercising
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-white mb-5">
              <span class="text-3xl font-semibold">🏃</span>
              <span class="text-5xl font-extrabold tracking-tight">
                {activity.exercising}
              </span>
              <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                minutes
              </span>
            </div>
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center "
            >
              You can Do it.
            </button>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Yoga
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-white  mb-5">
              <span class="text-3xl font-semibold">🏃</span>
              <span class="text-5xl font-extrabold tracking-tight">
                {activity.yoga}
              </span>
              <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                minutes
              </span>
            </div>
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              You can Do it.
            </button>
          </div>
        </div>
      </div>
      {/* journals */}
      <div className="px-2 sm:w-[90%] mx-auto md:px-10 pb-10  my-10">
        <h2 className="text-center text-2xl font-bold mb-6 text-indigo-600 my-5 mb-10 pt-5">
          Journals
        </h2>
        <div className="w-full flex flex-col gap-10 ">
          {journal.map((entry, index) => (
            <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
              <h5 class="mb-4 text-2xl font-medium text-gray-600 dark:text-gray-400">
                journal {index + 1}
              </h5>
              <p class="mb-4 text-[16px] font-medium text-gray-500 dark:text-gray-400">
                {entry}
              </p>
              <div class="mt-3 flex items-center flex-wrap gap-3">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #personal
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #life
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #journey
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*medication reminder  */}
      <div className="px-2 sm:w-[90%] mx-auto md:px-10 pb-10  my-10">
        <h2 className="text-center text-2xl font-bold mb-6 text-indigo-600 my-5 mb-10 pt-5">
          Reminder
        </h2>
        <div className="w-full flex flex-wrap gap-10 justify-center">
          {medication?.map((medication, index) => (
            <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-md mx-4 sm:mx-auto">
              <div className="p-4 pl-5 flex flex-col  gap-2">
                <p className="text-gray-600">
                  Medication Name: {""}
                  <span className="font-semibold text-gray-800">
                    {medication.name}
                  </span>
                </p>
                <p className="text-gray-600">
                  Reminder Time:{" "}
                  <span className="font-semibold text-gray-800">
                    {medication.time}
                  </span>
                </p>
              </div>
              <div className="p-4 bg-gray-100 flex justify-center">
                <button
                  disabled
                  className=" disabled:opacity-50 bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none"
                  onClick={() => {}}
                >
                  Mark as Done
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
