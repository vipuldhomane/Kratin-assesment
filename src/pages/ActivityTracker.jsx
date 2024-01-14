// ActivityTracker.js

import React, { useState } from "react";
import walkingImage from "../assets/walking.jpg";
import exercisingImage from "../assets/exercising.jpg";
import yogaImage from "../assets/yoga.jpg";

const ActivityTracker = () => {
  const [activityType, setActivityType] = useState("walking");
  const [activityValue, setActivityValue] = useState(15); //yoga duration in minutes
  const [dailyStepsGoal, setDailyStepsGoal] = useState(5000);
  const [exerciseMinutesGoal, setExerciseMinutesGoal] = useState(30);
  const [activity, setActivity] = useState({
    walking: dailyStepsGoal,
    yoga: activityValue,
    exercising: exerciseMinutesGoal,
  });

  const handleActivityTypeChange = (type) => {
    setActivityType(type);
  };

  const handleActivityValueChange = (e) => {
    setActivityValue(e.target.value);
  };

  const handleDailyStepsGoalChange = (e) => {
    setDailyStepsGoal(e.target.value);
  };

  const handleExerciseMinutesGoalChange = (e) => {
    setExerciseMinutesGoal(e.target.value);
  };

  const handleSave = () => {
    // Add functionality to save activity data
    console.log(
      `Saved ${activityValue} ${activityType} and goals: ${dailyStepsGoal} steps, ${exerciseMinutesGoal} minutes.`
    );
    switch (activityType) {
      case "walking":
        setActivity({ ...activity, walking: dailyStepsGoal });
        break;
      case "exercising":
        setActivity({ ...activity, exercising: exerciseMinutesGoal });
        break;
      case "yoga":
        setActivity({ ...activity, yoga: activityValue });
        break;
      default:
        console.log("Invalid activity type");
    }
  };

  return (
    <>
      <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-md ">
        <h1 className="text-3xl font-bold mb-6 text-indigo-600">
          Activity Tracker
        </h1>
        <div className="mb-4 grid grid-cols-3 gap-4">
          <button
            onClick={() => handleActivityTypeChange("walking")}
            className={`${
              activityType === "walking"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            } px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300`}
          >
            Walking
          </button>
          <button
            onClick={() => handleActivityTypeChange("exercising")}
            className={`${
              activityType === "exercising"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            } px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300`}
          >
            Exercising
          </button>
          <button
            onClick={() => handleActivityTypeChange("yoga")}
            className={`${
              activityType === "yoga"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            } px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300`}
          >
            Yoga
          </button>
        </div>
        <div className="mb-4">
          {/* <img
            src={
              activityType === "walking"
                ? walkingImage
                : activityType === "exercising"
                ? exercisingImage
                : yogaImage
            }
            alt={activityType}
            className="w-full h-[350px] object-cover rounded-md"
          /> */}
        </div>
        {activityType === "yoga" && (
          <div className="my-4 mt-7 flex flex-col items-center gap-3">
            <label
              htmlFor="activityValue"
              className="text-sm text-gray-600 block"
            >
              {`Enter ${
                activityType === "yoga" ? "duration (minutes)" : "steps"
              }`}
            </label>
            <input
              type="number"
              id="activityValue"
              value={activityValue}
              onChange={handleActivityValueChange}
              className=" px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
              onClick={handleSave}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300 position-relative  left-[50%] mx-auto"
            >
              Save
            </button>
          </div>
        )}
        {activityType === "walking" && (
          <div className="my-4 mt-7 flex flex-col items-center gap-3">
            <label
              htmlFor="dailyStepsGoal"
              className="text-sm text-gray-600 block"
            >
              Set Daily Steps Goal:
            </label>
            <input
              type="number"
              id="dailyStepsGoal"
              value={dailyStepsGoal}
              onChange={handleDailyStepsGoalChange}
              className=" px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
              onClick={handleSave}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300 position-relative  left-[50%] mx-auto"
            >
              Save
            </button>
          </div>
        )}
        {activityType === "exercising" && (
          <div className="my-4 mt-7 flex flex-col items-center gap-3">
            <label
              htmlFor="exerciseMinutesGoal"
              className="text-sm text-gray-600 block"
            >
              Set Exercise Minutes Goal:
            </label>
            <input
              type="number"
              id="exerciseMinutesGoal"
              value={exerciseMinutesGoal}
              onChange={handleExerciseMinutesGoalChange}
              className=" px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
              onClick={handleSave}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300 position-relative  left-[50%] mx-auto"
            >
              Save
            </button>
          </div>
        )}
      </div>
      <div className="w-[90%] mx-auto px-10 pb-10  rounded-lg shadow-md my-10 shadow-gray-300">
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
    </>
  );
};

export default ActivityTracker;
