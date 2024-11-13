import React from "react";
import { Search, Video } from "lucide-react";
import { Phone } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import SendButton from "./SendButton";
import { Input } from "./ui/input";

type Props = {};

export default function MessageBox() {
  return (
    <>
      {/* message box header */}
      <div className="flex flex-[1] grow-0 items-center justify-between p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-[50px] h-[50px] rounded-full bg-orange-400"></div>

          <div className="grow leading-6">
            <div className="flex items-center justify-between">
              <p className="font-medium text-lg">Some name</p>
            </div>

            <div className="flex items-center gap-3">
              <p className="h-[10px] w-[10px] rounded-full bg-red-500"></p>
              <p className="text-sm text-zinc-400">Busy</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 mr-6">
          <Video className="w-6 h-6" />
          <Phone className="w-6 h-6" />
          <LayoutGrid className="w-6 h-6" />
        </div>
      </div>

      <div className="grow overflow-scroll no-scrollbar bg-[#C9B3F6]/5 rounded-md"></div>

      <div className="flex-[1] grow-0 py-2 shadow-sm">
        <div className="flex items-center gap-5 mr-6 w-full">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Type your message"
              className="pl-4 pr-14 bg-[#F7F7FD] border border-slate-100 focus:border-pink-500 py-6  placeholder:text-zinc-400 placeholder:text-sm"
              style={{ fontSize: "1.1rem" }}
            />
            <SendButton
              onClick={() => {}}
              isEmote={true}
              className="absolute right-5 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
