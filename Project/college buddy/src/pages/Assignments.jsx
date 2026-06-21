import Sidebar from "../components/sidebar";

const assignments = [
  {
    title: "DBMS Assignment",
    subject: "Database Management",
    due: "Tomorrow",
    status: "Pending",
  },
  {
    title: "React Mini Project",
    subject: "Web Development",
    due: "June 19",
    status: "In Progress",
  },
  {
    title: "Maths Tutorial",
    subject: "Engineering Maths",
    due: "Completed",
    status: "Done",
  },
];

function Assignments() {
  return (
    <div className="flex min-h-screen bg-[#EEF2FF]">
      
      <Sidebar />

      <div className="flex-1 p-8">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#1E1B4B]">
            Assignments
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your academic tasks and deadlines.
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

          {/* Table Header */}
          <div className="
            grid grid-cols-4
            bg-indigo-100
            p-5
            font-semibold
            text-[#1E1B4B]
          ">
            <p>Title</p>
            <p>Subject</p>
            <p>Due Date</p>
            <p>Status</p>
          </div>

          {/* Table Rows */}
          {assignments.map((item, index) => (
            <div
              key={index}
              className="
                grid grid-cols-4
                p-5
                border-t
                border-gray-100
                items-center
              "
            >
              <p className="font-medium text-[#1E1B4B]">
                {item.title}
              </p>

              <p className="text-gray-500">
                {item.subject}
              </p>

              <p>{item.due}</p>

              <span className="
                bg-indigo-100
                text-indigo-700
                px-3
                py-1
                rounded-full
                text-sm
                w-fit
              ">
                {item.status}
              </span>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Assignments;