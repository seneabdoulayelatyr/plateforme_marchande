"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function FooterHome() {
  const pathname = usePathname();
  const isLogin = pathname === "/login";
  return (
    <>
      {!isLogin && (
        <footer className="bg-black h-[80px] w-full flex items-center justify-center">
          <p className="text-white text-center">
            &copy; {new Date().getFullYear()} Plateforme Marchande. Tous droits
            réservés.
          </p>
        </footer>
      )}
    </>
  );
}
