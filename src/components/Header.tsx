import React from "react";
import { Bell } from "lucide-react";
import Image from "next/image";
import { CircleCheck } from "lucide-react";

export default function Header() {
  return (
    <nav className=" relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild  lg:flex-wrap lg:justify-start lg:py-4 px-5">
      <div className="mr-auto">something</div>

      <div className="flex items-center gap-5">
        <Bell size={"1.75rem"} />
        <div className="flex flex-col items-end">
          <p className="font-semibold text-lg">Some name</p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-zinc-500">Some role</p>
            {/* <CircleCheck className="text-green-400" /> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
