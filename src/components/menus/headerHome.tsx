"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, RocketIcon, UserIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { menu_home_items } from "@/lib/types/menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function HeaderHome() {
  const pathname = usePathname();
  const isLogin = pathname === "/login";
  const isSignup = pathname === "/signup";

  return (
    <div className="container flex items-center justify-between px-2">
      <div className="flex items-center justify-between w-full md:w-fit lg:gap-4 gap-2 text-white">
        <Link
          href="/"
          className="hover:border-b-2 hover:border-white transition-all duration-300"
        >
          <h4>P. Marchande</h4>
        </Link>
        <div className="md:flex hidden items-center lg:gap-5 gap-1">
          {menu_home_items.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="hover:border-b-2 hover:border-white transition-all duration-300"
            >
              <p>{item.label}</p>
            </Link>
          ))}
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden flex">
            <Button variant="secondary" className="rounded-full" size="sm">
              <MenuIcon className="size-4" />
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                <ul className="flex flex-col gap-4 my-5 list-disc pl-4">
                  {menu_home_items.items.map((item) => (
                    <Link
                      href={item.href}
                      key={item.label}
                      className="hover:border-b-2 text-base border-b-2 border-zinc-200 text-black hover:border-black transition-all duration-300"
                    >
                      <li>{item.label}</li>
                    </Link>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 mt-4">
                  <Link href="/login">
                    <Button
                      variant="secondary"
                      className="rounded-full"
                      size="sm"
                    >
                      <UserIcon className="size-4" />
                      Se connecter
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button
                      variant="secondary"
                      className="rounded-full"
                      size="sm"
                    >
                      <RocketIcon className="size-4" />
                      Get started
                    </Button>
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="space-x-2 lg:space-x-6 md:flex hidden">
        {!isLogin && (
          <Link href="/login">
            <Button variant="secondary" className="rounded-full" size="sm">
              <UserIcon className="size-4" />
              Se connecter
            </Button>
          </Link>
        )}
        {!isSignup && (
          <Link href="/signup">
            <Button variant="secondary" className="rounded-full" size="sm">
              <RocketIcon className="size-4" />
              Get started
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
