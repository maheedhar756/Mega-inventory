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
import { MoreVertical, ChevronUp, ChevronDown } from "lucide-react";
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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="relative mb-6">
        <div className="bg-[#c2e5cc] text-[#1e4a2c] px-4 py-2 rounded-xl text-sm font-bold shadow-sm relative z-10 text-center min-w-[100px]">
          <p className="text-[10px] opacity-70 mb-0.5">{label}</p>
          <p>{payload[0].value}k</p>
        </div>
        <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-3 h-3 bg-[#c2e5cc] rotate-45 z-0" />
      </div>
    );
  }
  return null;
};

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
          <div className="flex bg-[#EAF8E7] rounded-lg p-1">
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

      <div className="grid grid-cols-5 gap-0 mb-8 w-full border-b border-gray-50">
        {[
          { label: "Customers", value: "52k", active: true },
          { label: "Total Orders", value: "3.5k" },
          { label: "Success Orders", value: "2.5k" },
          { label: "Cancelled Order", value: "0.5k" },
          { label: "Revenue", value: "250k" },
        ].map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "text-center pb-4 transition-all relative border-b-2",
              item.active ? "border-green-500 bg-linear-to-t from-green-50/50 to-transparent" : "border-gray-100/30"
            )}
          >
            <p className="text-lg sm:text-2xl font-black text-gray-800">
              {item.value}
            </p>
            <span className="text-[10px] sm:text-xs text-gray-400 font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="h-64 mt-4 min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={areaData}
            margin={{ top: 40, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              stroke="#f1f5f9"
              strokeDasharray="0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={(props) => {
                const { x, y, payload } = props;
                const isActive = payload.value === "Wed";
                return (
                  <text
                    x={x}
                    y={y + 15}
                    textAnchor="middle"
                    fill={isActive ? "#1f2937" : "#9ca3af"}
                    style={{
                      fontSize: "11px",
                      fontWeight: isActive ? "800" : "500",
                    }}
                  >
                    {payload.value}
                  </text>
                );
              }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#9ca3af", fontWeight: "500" }}
              tickFormatter={(value) => `${value}k`}
            />
            <Tooltip
              content={<CustomTooltip />}
              offset={-50}
              cursor={{
                stroke: "#22c55e",
                strokeWidth: 2,
                strokeDasharray: "4 4",
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
              activeDot={{
                r: 6,
                fill: "#fff",
                stroke: "#22c55e",
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
          <h3 className="text-xs font-bold text-[#6467F2] tracking-wider mb-1">
            Users in last 30 minutes
          </h3>
          <p className="text-xl font-black text-gray-900">21.5k</p>
        </div>
        <button className="p-1 text-gray-400 hover:text-gray-600">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <p className="text-xs font-semibold text-gray-400 mb-2">Monthly Sales</p>

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
        <div className="flex justify-between items-center text-xs font-bold text-[#23272E] tracking-wider">
          <span>Sales by Kitchen</span>
          <span>Sales</span>
        </div>
        {[
          {
            name: "Banarasi kitchen",
            value: "30k",
            color: "#ef4444",
            avatar: "B",
            change: "25.8%",
            type: "up",
          },
          {
            name: "Rootiya vala kitchen",
            value: "30k",
            color: "#3b82f6",
            avatar: "R",
            change: "15.8%",
            type: "down",
          },
          {
            name: "One humble kitchen",
            value: "25k",
            color: "#10b981",
            avatar: "O",
            change: "35.8%",
            type: "up",
          },
        ].map((kitchen, idx) => (
          <div key={idx} className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div
                className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: kitchen.color }}
              >
                {kitchen.avatar}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-700 leading-tight">
                  {kitchen.value}
                </span>
                <span className="text-[11px] text-gray-400 truncate max-w-[80px]">
                  {kitchen.name}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-1 justify-end">
              <div className="hidden sm:block flex-1 h-1.5 bg-gray-50 rounded-full overflow-hidden max-w-[120px]">
                <div
                  className="h-full rounded-full bg-[#6467F2]/80"
                  style={{
                    width: idx === 0 ? "70%" : idx === 1 ? "50%" : "60%",
                  }}
                />
              </div>
              <div className="text-right min-w-[60px]">
                <p
                  className={cn(
                    "text-[11px] font-bold flex items-center justify-end gap-0.5",
                    kitchen.type === "up" ? "text-green-500" : "text-red-500"
                  )}
                >
                  {kitchen.type === "up" ? (
                    <ChevronUp className="w-2.5 h-2.5" />
                  ) : (
                    <ChevronDown className="w-2.5 h-2.5" />
                  )}
                  {kitchen.change}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-auto w-80% py-3 text-[#6467F2] bg-white rounded-full text-xs font-bold hover:bg-blue-50 transition-colors border border-[#6467F2]">
        View Insight
      </button>
    </div>
  );
}
