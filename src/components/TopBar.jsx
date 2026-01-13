import { Search, Bell, Menu } from "lucide-react";

export function TopBar({ onMenuClick }) {
  return (
    <header className="h-16 bg-white border-b border-gray-100 lg:border-none flex items-center justify-between px-2 sm:px-4 lg:px-8 fixed top-0 right-0 left-0 lg:left-64 z-40">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 -ml-2 text-gray-400 hover:text-gray-600 lg:hidden"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl lg:text-2xl font-bold text-gray-800 hidden sm:block">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-2 lg:gap-6">
        <div className="relative flex-1 sm:flex-none w-auto sm:w-64 lg:w-80">
          <input
            type="text"
            placeholder="Search data, users, or reports"
            className="w-full bg-gray-50 border-none rounded-full py-1.5 lg:py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-black/5 outline-none truncate"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>

        <div className="flex items-center gap-1 sm:gap-4 shrink-0">
          <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-full transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>

          <div className="hidden sm:flex w-8 h-8 rounded-full bg-gray-200 items-center justify-center text-sm font-medium text-gray-600">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
