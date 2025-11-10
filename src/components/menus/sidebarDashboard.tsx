"use client";
import { LogIn, Menu } from "lucide-react";
import React, { useState, useEffect } from "react";
import SideMenuItems from "@/components/menus/sideMenuItems";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SidebarDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on mount
    checkIsMobile();

    // Add event listener
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getSidebarWidth = () => {
    if (isMobile) {
      return "w-20 p-3";
    }
    return isSidebarOpen ? "w-1/4 p-6" : "w-16 p-3";
  };

  const handleLogout = () => {
    router.push("/");
    toast.success("Déconnexion réussie");
  };
  return (
    <div
      className={`${getSidebarWidth()} h-screen flex flex-col justify-between bg-green-700 relative transition-all duration-700`}
    >
      <div>
        {isSidebarOpen ? (
          <div className="bg-white w-full h-10 rounded-lg" />
        ) : (
          <div className="bg-yellow-500 w-10 h-10 rounded-lg" />
        )}
        <SideMenuItems isOpen={isSidebarOpen} />
      </div>

      {!isMobile && isSidebarOpen ? (
        <Button className="bg-white text-center w-full  h-12 relative text-black text-xl font-semibold group" onClick={handleLogout}>
          <div className="bg-green-500 rounded-md h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[96%] z-10 duration-500">
            <LogIn className="size-6 text-white" />
          </div>
          <p className="translate-x-5">Déconnexion</p>
        </Button>
      ) : (
        <Button className="bg-white w-full h-12" onClick={handleLogout}>
          <LogIn className="size-6 text-green-600" />
        </Button>
      )}
      <Menu
        className="size-9 hover:scale-110 duration-300 ease-in-out text-black bg-white rounded-full p-2 cursor-pointer absolute top-7 -right-5"
        onClick={toggleSidebar}
      />
    </div>
  );
}
