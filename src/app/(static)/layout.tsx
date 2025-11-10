import React from "react";
import HeaderHome from "@/components/menus/headerHome";
import FooterHome from "@/components/menus/footerHome";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-black h-[100px] w-full flex items-center justify-start">
        <HeaderHome />
      </header>
      <main className=" w-full">{children}</main>
      <FooterHome />
    </div>
  );
}

export default Layout;
