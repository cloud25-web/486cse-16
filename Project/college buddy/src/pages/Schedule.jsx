import { useState } from "react";
import Sidebar from "../components/sidebar";

function Schedule() {
  const schedules = {
    "CSE-1": [
      { time: "9:00 - 10:30 AM", subject: "DA", room: "AB-301" },
      { time: "11:00 - 1:00 PM", subject: "DSA Lab", room: "Lab-5 AB" },
      { time: "2:00 - 4:00 PM", subject: "Maths", room: "RJ-203" },
    ],

    "CSE-2": [
      { time: "9:00 - 10:30 AM", subject: "Operating Systems", room: "AB-302" },
      { time: "11:00 - 1:00 PM", subject: "Web Development", room: "BH-205" },
      { time: "2:00 - 4:00 PM", subject: "DSA", room: "RJ-101" },
    ],

    "CSE-3": [
      { time: "9:00 - 10:30 AM", subject: "Computer Networks", room: "KC-201" },
      { time: "11:00 - 1:00 PM", subject: "Java", room: "BH-105" },
      { time: "2:00 - 4:00 PM", subject: "DBMS", room: "KC-203" },
    ],
  };

  const [section, setSection] = useState("CSE-1");

  const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
});

  return (
    <div className="flex min-h-screen bg-[#EEF2FF]">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold text-[#1E1B4B]">
          Schedule
        </h1>

       <div className="mt-3 inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-xl font-medium">
        📅  {today}
      </div>

        {/* Section Selector */}
        <div className="mt-6">
          <label className="block mb-2 font-medium">
            Select Section
          </label>

          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="
              bg-white
              px-4
              py-3
              rounded-xl
              border
              border-gray-200
              outline-none
            "
          >
            <option>CSE-1</option>
            <option>CSE-2</option>
            <option>CSE-3</option>
          </select>
        </div>

        {/* Timetable */}
        <div className="mt-8 bg-white rounded-3xl shadow-sm overflow-hidden">

          <div className="grid grid-cols-3 bg-indigo-100 p-5 font-semibold text-[#1E1B4B]">
            <p>Time</p>
            <p>Subject</p>
            <p>Room</p>
          </div>

          {schedules[section].map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 p-5 border-t border-gray-100"
            >
              <p>{item.time}</p>
              <p>{item.subject}</p>
              <p>{item.room}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Schedule;