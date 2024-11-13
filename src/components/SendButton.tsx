import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  onClick: () => void;
  isEmote: boolean;
  className?: string;
};

export default function SendButton({ onClick, isEmote, className }: Props) {
  return (
    <Button onClick={onClick} className={cn("send-button relative", className)}>
      {isEmote ? (
        <Image src="/likebtn.png" alt="emote" height={30} width={30} />
      ) : (
        <Image src="/sendbtn.png" alt="sendbtn" height={30} width={30} />
      )}
    </Button>
  );
}
