import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { StatCard, PendingCanceledCard } from "./components/StatCard";
import { WeeklyReport, MonthlySales } from "./components/Charts";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="flex-1 lg:ml-64 pt-16 min-w-0 transition-all duration-300">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />
        <div className="p-2 sm:p-8 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <StatCard
              title="Total Sales"
              timeRange="Last 7 days"
              value="₹350K"
              subtitle="Sales"
              change={{ value: "10.4%", type: "increase" }}
            />
            <StatCard
              title="Total Orders"
              timeRange="Last 7 days"
              value="10.7K"
              subtitle="order"
              change={{ value: "14.4%", type: "increase" }}
            />
            <PendingCanceledCard />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <WeeklyReport />
            <MonthlySales />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
