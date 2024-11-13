"use client";
import { ListFilter, Search } from "lucide-react";
import React, { useRef, useState } from "react";
import { Input } from "./ui/input";
import MessageCard from "./MessageCard";
import { Separator } from "@radix-ui/react-separator";
import MessageBox from "./MessageBox";

type Props = {
  data: any[];
};

export default function Messaging({ data }: Props) {
  const [chosen, setChosen] = useState<number | null>(null);
  return (
    <div className="flex-[1] flex overflow-hidden">
      <div className="hidden lg:flex lg:flex-col lg:min-w-96 shrink-0">
        <div className="flex justify-between p-6">
          <p className="font-medium relative text-2xl">
            Messaging
            <span className="inline-block absolute bg-rose-600 text-white bottom-full rounded-md left-full text-xs font-medium px-2 py-1 translate-y-2">
              130
            </span>
          </p>
          <div className="flex items-center gap-2">
            <span>Agents</span>
            <ListFilter className="w-6 h-6" />
          </div>
        </div>

        {/* Search */}
        <div className="px-6 relative">
          <Input
            type="text"
            placeholder="Search for messages..."
            className="pl-10 pr-4 bg-[#F7F7FD] border border-slate-100 focus:border-pink-500 py-5 placeholder:text-zinc-400"
          />
          <Search className="absolute top-1/2 left-8 transform -translate-y-1/2 w-6 h-6 text-zinc-500" />
        </div>

        {/* Chats */}
        <div className="px-6 mt-3 overflow-auto no-scrollbar">
          {data.map((chat: any, index: number) => (
            <>
              <div onClick={() => setChosen(index)} key={index}>
                <MessageCard
                  data={{}}
                  className={index == chosen ? "bg-slate-200" : ""}
                />
              </div>
              {index !== data.length - 1 && (
                <Separator className="my-4 bg-zinc-300 w-3/4 mx-auto h-[1px]" />
              )}
            </>
          ))}
        </div>
      </div>

      <div className="flex-[2] flex flex-col">
        <MessageBox />
      </div>
    </div>
  );
}
