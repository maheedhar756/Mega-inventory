import { MoreVertical, MoveUp, MoveDown } from "lucide-react";
import { cn } from "../lib/utils";

export function StatCard({
  title,
  value,
  change,
  subtitle,
  timeRange,
  className,
}) {
  return (
    <div
      className={cn(
        "bg-white p-6 rounded-2xl border border-gray-100 relative group transition-all hover:shadow-sm",
        className
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
          <p className="text-xs text-gray-400">{timeRange}</p>
        </div>
        <button className="p-1 text-gray-400 hover:text-gray-600">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-baseline gap-2 mb-4">
        <span className="font-bold text-[#023337]">{value}</span>
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium text-neutral-500">{subtitle}</span>
          {change && (
            <span
              className={cn(
                "text-xs font-bold flex items-center",
                change.type === "increase" ? "text-green-500" : "text-red-500"
              )}
            >
              {change.type === "increase" ? <MoveUp className="w-3 h-3" /> : <MoveDown className="w-3 h-3" />} {change.value}
            </span>
          )}
        </div>
      </div>

      <p className="text-xs text-neutral-500 mb-6">
        Previous 7days <span className="text-xs font-semibold text-[#6467F2]">({subtitle === "Sales" ? "₹235" : "7.6k"})</span>
      </p>

      <div className="flex justify-end">
        <button className="text-sm font-medium text-[#6467F2] border border-[#6467F2] px-4 py-1.5 rounded-full hover:bg-blue-50 transition-colors">
          Details
        </button>
      </div>
    </div>
  );
}

export function PendingCanceledCard() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 relative group transition-all hover:shadow-sm">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold text-gray-800">Pending & Canceled</h3>
        <button className="p-1 text-gray-400 hover:text-gray-600">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
      <p className="text-xs text-gray-400 mb-6 text-left">Last 7 days</p>

      <div className="flex items-center gap-6">
        <div>
          <p className="text-xs font-bold text-gray-400 mb-1">Pending</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-gray-900">509</span>
            <span className="text-xs font-bold text-green-500">user 204</span>
          </div>
        </div>
        <div className="w-px h-10 bg-[#E5E7EB] items-center justify-center" />
        <div>
          <p className="text-xs font-bold text-gray-400 mb-1">Canceled</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-red-500">94</span>
            <span className="text-xs font-bold text-red-500 flex items-center gap-1">
              <MoveDown className="w-4 h-4" /> 14.4%
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button className="text-sm font-medium text-[#6467F2] border border-[#6467F2] px-4 py-1.5 rounded-full hover:bg-blue-50 transition-colors">
          Details
        </button>
      </div>
    </div>
  );
}
