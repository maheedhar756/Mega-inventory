import {
  House,
  ShoppingCart,
  BadgeCheck,
  Wallet,
  Users,
  ReceiptText,
  TicketPercent,
  CookingPot,
  Bike,
  Package,
  Layers,
  Smartphone,
  Star,
  LogOut,
  User,
  X,
} from "lucide-react";
import { cn } from "../lib/utils";

const menuItems = [
  {
    section: "Main menu",
    items: [
      { icon: House, label: "Dashboard", active: true },
      { icon: ShoppingCart, label: "Order Management" },
      { icon: BadgeCheck, label: "Subscription" },
      { icon: Wallet, label: "Payout" },
      { icon: Users, label: "Customers" },
      { icon: ReceiptText, label: "Transaction" },
      { icon: TicketPercent, label: "Coupon Code" },
    ],
  },
  {
    section: "Partners",
    items: [
      { icon: CookingPot, label: "Kitchen Partners" },
      { icon: Bike, label: "Rider Partners" },
      { icon: Package, label: "Kitchen Inventory" },
      { icon: Layers, label: "Categories" },
      { icon: Smartphone, label: "Rider Application" },
      { icon: Star, label: "Kitchen Reviews" },
    ],
  },
  { section: "Admin", items: [{ icon: User, label: "Users" }] },
];

export function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      <div
        className={cn(
          "w-64 h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0 z-50 transition-transform duration-300 lg:translate-x-0 outline-none",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-7 flex items-center justify-center">
              <img src="./icon.png" alt="icon" />
            </div>
            <span className="font-normal text-lg text-neutral-500">
              Mega Inventory
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-2 custom-scrollbar">
          {menuItems.map((group, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="px-6 text-xs font-semibold text-gray-400 tracking-wider mb-2">
                {group.section}
              </h3>
              <nav className="space-y-1">
                {group.items.map((item, itemIdx) => (
                  <a
                    key={itemIdx}
                    href="#"
                    className={cn(
                      "flex items-center gap-3 px-8 py-2.5 text-sm font-medium transition-colors relative group",
                      item.active
                        ? "text-gray-900 bg-gray-50/50"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    )}
                  >
                    {item.active && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-black rounded-r-full" />
                    )}
                    <item.icon
                      className={cn(
                        "w-5 h-5",
                        item.active
                          ? "text-gray-900"
                          : "text-gray-400 group-hover:text-gray-900"
                      )}
                    />
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-medium text-gray-600">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900 leading-tight">
                Arjun Rathore
              </span>
              <span className="text-xs text-gray-500">Arjun@pakaoo.com</span>
            </div>
          </div>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
}
