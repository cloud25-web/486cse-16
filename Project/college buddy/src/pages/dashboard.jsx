import Sidebar from "../components/sidebar";
import HeroSection from "../components/HeroSection";
import DashboardCards from "../components/DashboardCards";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#EEF2FF]">
      
      <Sidebar />

      <div className="flex-1 p-6">
        <HeroSection />

        <div className="mt-6">

        <p className="text-right text-[#6366F1] font-semibold mb-2">
          60%
        </p>

        <div className="w-full bg-gray-200 rounded-full h-10">
          <div
            className="bg-[#6366F1] h-10 rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>

      </div>

        <DashboardCards />
      </div>
    
    </div>
  );
}

export default Dashboard;