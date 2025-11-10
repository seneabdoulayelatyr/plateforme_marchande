"use client";
import React, { useState, useEffect } from "react";
import { menu_items } from "@/lib/types/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideMenuItemsProps {
  isOpen?: boolean;
}

function SideMenuItems({ isOpen = false }: SideMenuItemsProps) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <nav className="flex flex-col gap-2 mt-4">
      {menu_items.items.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-white/10 ${
              isActive ? "bg-white/20 text-white" : "text-white/80"
            }`}
          >
            {Icon && <Icon className="size-5 shrink-0" />}

            {!isMobile && isOpen && (
              <span className="text-sm font-medium whitespace-nowrap">
                {item.label}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export default SideMenuItems;
