'use client'

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Mobile = () => {
   const [open,setOpen] = useState(false)
   const pathName = usePathname()

   const handleClickClose = () => {
      setOpen(false)
   }
  return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="flex md:hidden">
         <Button size={'icon'} variant={'ghost'}>
         <Menu />
         </Button>
        </SheetTrigger>
        <SheetContent side="left">
         <SheetHeader>
            <SheetTitle className="sr-only">
              navigation
            </SheetTitle>
         </SheetHeader>
            <Link href={'/'}>
               <h1 className="text-4xl font-mono">wenaco</h1>
            </Link> 
            <Separator className="my-3"/>
            <div className="flex flex-col space-y-3">
               {navLinks.map(nav => (
                  <Link key={nav.route} href={nav.route} className={cn("hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors",
                     pathName === nav.route && 'text-blue-400 bg-blue-400/20'
                  )} onClick={handleClickClose}>
                     {nav.name}
                  </Link>
               ))}
            </div>
         </SheetContent>
      </Sheet>
  );
};

export default Mobile;
