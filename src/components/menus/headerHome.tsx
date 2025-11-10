"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, RocketIcon, UserIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

export default function HeaderHome() {
  const pathname = usePathname();
  const isLogin = pathname === "/login";
  return (
    <div className="container flex items-center justify-between">
      <h4 className="text-white">Plateforme Marchande</h4>

      {!isLogin && (
        <div className="space-x-6">
          <Sheet>
            <SheetTrigger>
              <Button variant="ghost" className="text-white rounded-full" size="sm">
                <UserIcon className="size-4" />
                Se connecter
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              size="48"
              className="h-[80vh] flex items-center justify-center gap-14"
            >
              <div className="flex items-center justify-center gap-14">
                <Link
                  href="/login"
                  className="flex flex-col items-center gap-8 hover:text-zinc-500 group"
                >
                  <span className="flex items-center gap-14">
                    <h2>Se connecter</h2>
                    <ArrowRight className="size-8" />
                  </span>
                  <div className="w-full h-[2px] bg-zinc-500" />
                </Link>
                <Link
                  href="/signup"
                  className="flex flex-col items-center gap-8 hover:text-zinc-500 group"
                >
                  <span className="flex items-center gap-14">
                    <h2>Créer un compte</h2>
                    <ArrowRight className="size-8" />
                  </span>
                  <div className="w-full h-[2px] bg-zinc-500" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <Button variant="secondary" className="rounded-full" size="sm">
            <RocketIcon className="size-4" />
            Get started
          </Button>
        </div>
      )}
    </div>
  );
}
