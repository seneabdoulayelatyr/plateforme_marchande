import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-black h-[100px] w-full flex items-center justify-start">
        <div className="container">
          <h1 className="text-white text-2xl font-bold">
            Plateforme Marchande
          </h1>
        </div>
      </header>
      <main className=" w-full">{children}</main>
      <footer className="bg-black h-[80px] w-full flex items-center justify-center">
        <p className="text-white text-center">
          &copy; {new Date().getFullYear()} Plateforme Marchande. Tous droits
          réservés.
        </p>
      </footer>
    </div>
  );
}

export default Layout;
