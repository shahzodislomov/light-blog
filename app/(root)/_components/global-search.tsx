import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { popularCategories, popularTags } from "@/constants";
import { Search } from "lucide-react";
import React from "react";

const GloablSearch = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="hover:bg-blue-400/20 cursor-pointer rounded-sm transition-colors flex items-center gap-1 px-3 py-2">
          <span className="hidden md:flex">search</span>
          <Search className="w-4 h-4" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="sr-only">Global Search</DrawerTitle>
        </DrawerHeader>
        <div className="container max-w-6xl mx-auto py-12">
          <Input
            className="bg-secondary"
            placeholder="type to search blog..."
          />
        <div className="flex flex-col space-y-2 mt-4">
          <p className="font-mono text-2xl">See post by categories</p>
          <div className="flex flex-wrap gap-2">
            {popularCategories.map((item) => (
              <Badge key={item.slug} variant={"secondary"}>
                {item.name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-2 mt-4">
          <p className="font-mono text-2xl">See post by tags</p>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((item) => (
              <Badge key={item.slug} variant={"secondary"}>
                {item.name}
              </Badge>
            ))}
          </div>
        </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default GloablSearch;
