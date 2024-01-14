// MedicationReminder.js

import React, { useState } from "react";
import medicationImage from "../assets/joy-2483926_640.jpg";

const MedicationReminder = () => {
  const [medicationName, setMedicationName] = useState("");
  const [schedule, setSchedule] = useState("");
  const [medication, setMedication] = useState([
    { name: "medicationName", time: " Sat Dec 16 2023 13:07:26" },
  ]);

  const handleMedicationNameChange = (e) => {
    setMedicationName(e.target.value);
  };

  const handleScheduleChange = (e) => {
    setSchedule(e.target.value);
  };

  const handleSave = () => {
    if (!medicationName || !schedule) {
      return;
    }
    // Add functionality to save medication reminder data
    console.log(`Saved medication: ${medicationName}, schedule: ${schedule}`);
    const newMedication = { name: medicationName, time: schedule };

    setMedication([...medication, newMedication]);
    setMedicationName("");
    setSchedule("");
  };
  // Delete medication
  const handleMedicationDelete = (index) => {
    const newMedication = [...medication];
    newMedication.splice(index, 1);
    setMedication(newMedication);
  };

  // time in am/pm format
  const getCurrentTime = (date) => {
    const currentDate = new Date(date);
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    const currentTime = currentDate.toLocaleTimeString("en-US", options);
    return currentTime;
  };

  return (
    <>
      <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-indigo-600">
          Medication Reminder
        </h1>
        <div className="mb-4">
          <label htmlFor="medication" className="text-sm text-gray-600 block">
            Medication:
          </label>
          <input
            type="text"
            id="medication"
            value={medicationName}
            onChange={handleMedicationNameChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="schedule" className="text-sm text-gray-600 block">
            Schedule:
          </label>
          <input
            type="datetime-local"
            id="schedule"
            value={schedule}
            onChange={handleScheduleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          Save
        </button>
        <p className="text-sm text-gray-700 mt-4">
          Remember to take medicine: {medicationName} at {schedule}
        </p>
      </div>

      {/* medicine reminder */}
      <div className="px-2 sm:w-[90%] mx-auto md:px-10 pb-10  rounded-lg shadow-md my-10 shadow-gray-300">
        <h2 className="text-center text-2xl font-bold mb-6 text-indigo-600 my-5 mb-10 pt-5">
          Reminder
        </h2>
        <div className="w-full flex flex-wrap gap-10 justify-center">
          {medication?.map((medication, index) => (
            <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-md mx-4 sm:mx-auto">
              <div className="p-4  flex flex-col items-center gap-2">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-500">
                    {medication.name}
                  </span>
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-500">
                    {Date(medication.time).slice(0, 15)}{" "}
                    {getCurrentTime(medication.time)}
                  </span>
                </p>
              </div>
              <div className="p-4 bg-gray-100 flex justify-center">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none"
                  onClick={() => {
                    handleMedicationDelete(index);
                  }}
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

export default MedicationReminder;
// Import necessary modules
// import React from "react";

// Medication Reminder component
// const MedicationReminder = () => {
//   const setReminder = () => {
//     // Get medication name and reminder time
//     const medicationName = "Aspirin"; // Replace with actual medication name
//     const reminderTime = "11:46 AM"; // Replace with actual reminder time

//     // Check if the browser supports notifications
//     if ("Notification" in window) {
//       // Request permission to show notifications
//       Notification.requestPermission().then((permission) => {
//         if (permission === "granted") {
//           // Show a notification
//           new Notification(`Medication Reminder: ${medicationName}`, {
//             body: `Time to take your medication at ${reminderTime}`,
//             icon: "path-to-your-icon.png", // Replace with the actual path to your icon
//           });
//         }
//       });
//     }
//   };

//   return (
//     );
// };

// export default MedicationReminder;
