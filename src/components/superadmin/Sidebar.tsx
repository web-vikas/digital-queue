import React from "react";
import Link from "next/link";

const Sidebar = () => {
  // Array of options with labels and paths
  const options = [
    { label: "Admin", path: "/superadmin/admin" },
    { label: "Reports", path: "/superadmin/reports" },
    { label: "Settings", path: "/superadmin/settings" },
  ];

  return (
    <div className="border-r border-gray-200">
      <div className="h-screen bg-white dark:bg-slate-900">
        <aside
          id="sidebar"
          className="w-64"
          aria-label="Sidebar"
        >
          <div className="flex h-full flex-col overflow-y-auto border-r border-slate-200 bg-white px-3 py-4 dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-10 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white">
              <span className="ml-3 text-base font-semibold">Digital Queue</span>
            </div>
            <ul className="space-y-2 text-sm font-medium">
              {options.map((option, index) => (
                <li key={index}>
                  <Link
                    href={option.path}
                    className="block rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
                  >
                    {option.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
