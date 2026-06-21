import {
  House,
  Calendar,
  BookOpen,
  FileText,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-white p-5 shadow-md">
      
      <h1 className="text-3xl font-bold text-[#6366F1] mb-10">
      CollegeBuddy
      </h1>

      <div className="space-y-2">

  <NavLink
  to="/"
  end
  className={({ isActive }) =>
    `flex items-center gap-4 w-full px-4 py-3 rounded-2xl font-medium
    ${
      isActive
        ? "bg-[#E0E7FF] text-[#4338CA]"
        : "hover:bg-gray-100"
    }`
  }
>
    <House size={22} />
    <span>Home</span>
  </NavLink>

  <NavLink
  to="/assignments"
  end
  className={({ isActive }) =>
    `flex items-center gap-4 w-full px-4 py-3 rounded-2xl font-medium
    ${
      isActive
        ? "bg-[#E0E7FF] text-[#4338CA]"
        : "hover:bg-gray-100"
    }`
  }
>
    <FileText size={22} />
    <span>Assignments</span>
  </NavLink>


  <NavLink
    to="/schedule"
    end
    className={({ isActive }) =>
    `flex items-center gap-4 w-full px-4 py-3 rounded-2xl font-medium
    ${
      isActive
        ? "bg-[#E0E7FF] text-[#4338CA]"
        : "hover:bg-gray-100"
    }`
  }
  >
    <Calendar size={22} />
    <span>Schedule</span>
  </NavLink>


  <NavLink
    to="/flashcards"
    end
    className={({ isActive }) =>
    `flex items-center gap-4 w-full px-4 py-3 rounded-2xl font-medium
    ${
      isActive
        ? "bg-[#E0E7FF] text-[#4338CA]"
        : "hover:bg-gray-100"
    }`
  }
>
    <BookOpen size={22} />
    <span>Flashcards</span>
  </NavLink>


  <NavLink
    to="/study-match"
    end
    className={({ isActive }) =>
    `flex items-center gap-4 w-full px-4 py-3 rounded-2xl font-medium
    ${
      isActive
        ? "bg-[#E0E7FF] text-[#4338CA]"
        : "hover:bg-gray-100"
    }`
  }
>
    <Users size={22} />
    <span>Study Match</span>
  </NavLink>

</div>
    </div>
  );
}

export default Sidebar;