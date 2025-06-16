'use client'

import ModeToggle from "@/components/shared/mode-toggle";
import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import GloablSearch from "./global-search";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
   const pathName = usePathname()

   return (
    <div className="h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background">
      <div className="container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-4xl font-mono">Wenaco</h1>
        </Link>
        <div className="gap-2 hidden md:flex">
          {navLinks.map((nav) => (
            <Link
              key={nav.route}
              href={nav.route}
              className={cn('hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors',
               pathName === nav.route && "text-blue-400"
              )}
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <ModeToggle />
          <GloablSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
