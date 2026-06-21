import { useState } from "react";
import Sidebar from "../components/sidebar";

function StudyMatch() {

  const students = [
    {
      name: "Unnati",
      subject: "DSA",
      timing: "6 PM - 8 PM",
    },
    {
      name: "Sakshi",
      subject: "DSA",
      timing: "7 PM - 9 PM",
    },
    {
      name: "Vaibhavi",
      subject: "Maths",
      timing: "5 PM - 7 PM",
    },
    {
      name: "Mishti",
      subject: "Maths",
      timing: "8 PM - 10 PM",
    },
  ];

  const [subject, setSubject] = useState("DSA");

  const filteredStudents = students.filter(
    (student) => student.subject === subject
  );

  return (
    <div className="flex min-h-screen bg-[#EEF2FF]">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold text-[#1E1B4B]">
          Study Match
        </h1>

        <p className="text-gray-500 mt-2">
          Find study partners for your subjects.
        </p>

        {/* Subject Selector */}
        <div className="mt-6">
          <label className="block mb-2 font-medium">
            Select Subject
          </label>

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="
              bg-white
              px-4
              py-3
              rounded-xl
              border
              border-gray-200
            "
          >
            <option>DSA</option>
            <option>Maths</option>
          </select>
        </div>

        {/* Student Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {filteredStudents.map((student, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-6
                shadow-sm
              "
            >
              <div className="
                w-12 h-12
                rounded-full
                bg-indigo-100
                flex items-center
                justify-center
                text-indigo-600
                font-bold
              ">
                {student.name[0]}
              </div>

              <h2 className="text-xl font-semibold text-[#1E1B4B]">
                {student.name}
              </h2>

              <p className="text-gray-500 mt-2">
                {student.subject}
              </p>

              <p className="mt-1">
                {student.timing}
              </p>

              <button
                onClick={() => alert("Study request sent!")}
                className="
                  mt-4
                  bg-[#6366F1]
                  text-white
                  px-5
                  py-2
                  rounded-xl
                "
              >
                Connect
              </button>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default StudyMatch;