import React from "react";
import SidebarDashboard from "@/components/menus/sidebarDashboard";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <header className="bg-black  w-full flex items-center justify-start p-4">
        <h1 className="text-white">Dashboard</h1>
      </header> */}
      <div className="flex">
        <SidebarDashboard />
        <div className="grow h-[calc(100vh-100px)] p-6 md:p-8 container">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
