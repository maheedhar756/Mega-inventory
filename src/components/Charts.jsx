import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import { MoreVertical } from "lucide-react";
import { cn } from "../lib/utils";

const areaData = [
  { name: "Sun", value: 15 },
  { name: "Mon", value: 25 },
  { name: "Tue", value: 22 },
  { name: "Wed", value: 35 },
  { name: "Thu", value: 30 },
  { name: "Fri", value: 22 },
  { name: "Sat", value: 28 },
];

const barData = [
  { name: "M1", value: 4 },
  { name: "M2", value: 8 },
  { name: "M3", value: 12 },
  { name: "M4", value: 6 },
  { name: "M5", value: 10 },
  { name: "M6", value: 15 },
  { name: "M7", value: 9 },
  { name: "M8", value: 11 },
  { name: "M9", value: 7 },
  { name: "M10", value: 13 },
  { name: "M11", value: 8 },
  { name: "M12", value: 10 },
];

export function WeeklyReport() {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 xl:col-span-2 overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-lg font-bold text-gray-800">
            Report for this week
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-50 rounded-lg p-1">
            <button className="px-3 py-1 text-xs font-medium bg-white rounded-md shadow-sm text-green-600">
              This week
            </button>
            <button className="px-3 py-1 text-xs font-medium text-gray-400">
              Last week
            </button>
          </div>
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 min-[450px]:grid-cols-3 sm:grid-cols-5 gap-4 mb-8">
        {[
          { label: "Customers", value: "52k" },
          { label: "Total Orders", value: "3.5k" },
          { label: "Success Orders", value: "2.5k" },
          { label: "Cancelled Order", value: "0.5k" },
          { label: "Revenue", value: "250k" },
        ].map((item, idx) => (
          <div key={idx} className="text-center min-w-0">
            <p className="text-lg min-[450px]:text-2xl font-black text-gray-800 truncate">{item.value}</p>
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-400">{item.label}</span>
              {idx === 0 && (
                <div className="w-8 h-1 bg-green-500 rounded-full mt-1" />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="h-64 mt-4 min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={areaData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              tickFormatter={(value) => `${value}k`}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-black/80 text-white px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm">
                      <p>{payload[0].payload.name}</p>
                      <p className="text-[10px] text-gray-300">{payload[0].payload.value} k</p>
                    </div>
                  );
                }
                return null;
              }}
              cursor={{ stroke: "#22c55e", strokeWidth: 1 }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorValue)"
              activeDot={{
                r: 4,
                fill: "#22c55e",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function MonthlySales() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
            Users in last 30 minutes
          </h3>
          <p className="text-xl font-black text-gray-900">21.5k</p>
        </div>
        <button className="p-1 text-gray-400 hover:text-gray-600">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <p className="text-xs font-semibold text-gray-400 mb-4">Monthly Sales</p>

      <div className="h-16 mb-8 min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <Bar dataKey="value" radius={[2, 2, 0, 0]}>
              {barData.map((_entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index % 2 === 0 ? "#22c55e" : "#4ade80"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-4 flex-1">
        <div className="flex justify-between items-center text-xs font-bold text-gray-400 uppercase tracking-wider">
          <span>Sales by Kitchen</span>
          <span>Sales</span>
        </div>
        {[
          {
            name: "Banarasi kitchen",
            value: "30k",
            color: "#ef4444",
            avatar: "B",
            change: "+ 25.8%",
            type: "up",
          },
          {
            name: "Rootiya vala kitchen",
            value: "30k",
            color: "#3b82f6",
            avatar: "R",
            change: "↓ 15.4%",
            type: "down",
          },
          {
            name: "One humble kitchen",
            value: "25k",
            color: "#10b981",
            avatar: "O",
            change: "+ 35.8%",
            type: "up",
          },
        ].map((kitchen, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div
                className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-white font-bold text-xs"
                style={{ backgroundColor: kitchen.color }}
              >
                {kitchen.avatar}
              </div>
              <span className="text-sm font-semibold text-gray-600 truncate">
                {kitchen.name}
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 ml-2">
              <div className="hidden min-[400px]:block w-16 sm:w-24 h-2 bg-gray-50 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: kitchen.color,
                    width: idx === 0 ? "70%" : idx === 1 ? "50%" : "60%",
                  }}
                />
              </div>
              <div className="text-right w-12">
                <p className="text-xs font-black text-gray-900 leading-none">
                  {kitchen.value}
                </p>
                <p
                  className={cn(
                    "text-[10px] font-bold mt-1",
                    kitchen.type === "up" ? "text-green-500" : "text-red-500"
                  )}
                >
                  {kitchen.change}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full py-2.5 text-blue-600 bg-blue-50/50 rounded-xl text-xs font-bold hover:bg-blue-50 transition-colors border border-blue-100/50">
        View Insight
      </button>
    </div>
  );
}
