import React from "react";
import { Loader2, Search, Video } from "lucide-react";
import { Phone } from "lucide-react";
import { Copy } from "lucide-react";
import { Trash2 } from "lucide-react";

import { LayoutGrid } from "lucide-react";
import SendButton from "./SendButton";
import { Input } from "./ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";

type Props = {};

const data: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 1, 1, 1, 1, 1];

// let data: any[] | null = null;
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

      <div className="grow overflow-y-scroll  bg-[#C9B3F6]/5 rounded-md flex flex-col-reverse">
        {!data ? (
          <Loader2 className="animate-spin grow m-auto" size={50} />
        ) : data.length === 0 ? (
          <div className="flex flex-col grow items-center justify-center p-6 text-white mt-5">
            <p className="text-lg text-black font-semibold">No messages yet</p>
            <p className="text-black">
              Say something to connect with this person
            </p>
            <Image
              src="/connect.png"
              alt="connect img"
              height={200}
              width={200}
            />
          </div>
        ) : (
          data.map((chat: any, index: number) => (
            <div
              key={index}
              className={cn(
                "flex items-center gap-3 p-6 text-white mt-5",
                index % 2 === 0 ? "justify-start" : "justify-end"
              )}
            >
              <Popover>
                <PopoverTrigger className=" max-w-[70%]">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={cn(
                          " bg-[#2E3B5B] hover:bg-[#2E3B5B]/95 transition-colors duration-200 inline-block py-3 px-5 rounded-lg"
                        )}
                      >
                        Something in this messageasldkfjs askldfjalskdjf
                        asdlkfjasdlkfjasd aslkdjfalskdjfas asldkfjaslkdjf
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="text-black">
                      <div>12:00</div>
                    </TooltipContent>
                  </Tooltip>
                </PopoverTrigger>
                <PopoverContent
                  side="bottom"
                  className="bg-white flex items-center py-2 px-5 gap-5"
                  align={"end"}
                >
                  <Copy
                    size={20}
                    className="hover:scale-110 cursor-pointer"
                    onClick={() => {
                      console.log("hello");
                      navigator.clipboard.writeText(
                        "Something in this messageasldkfjs askldfjalskdjf asdlkfjasdlkfjasd aslkd"
                      );
                      toast({
                        title: "Action: Copy",
                        description: "Copied to clipboard",
                      });
                    }}
                  />
                  <Dialog>
                    <DialogTrigger asChild>
                      <Trash2
                        size={20}
                        className="text-rose-500 hover:scale-110 cursor-pointer"
                      />
                    </DialogTrigger>
                    <DialogContent className="bg-white">
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. Are you sure you want to
                          permanently delete this message from your chat?
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button
                          type="submit"
                          className="hover:bg-rose-500 hover:text-white transition-colors duration-200 font-semibold border border-rose-500 text-rose-500"
                        >
                          Confirm
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </PopoverContent>
              </Popover>
            </div>
          ))
        )}
      </div>

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
