import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  data: any;
};

export default function MessageCard({ className, data }: Props) {
  return (
    <div
      className={cn(
        "flex items-center py-5 gap-3 select-none px-3 rounded-lg",
        className
      )}
    >
      <div className="w-[50px] h-[50px] rounded-full bg-orange-400"></div>

      <div className="grow leading-6">
        <div className="flex items-center justify-between">
          <p className="font-medium text-lg">Some name</p>
          <p className="text-zinc-400 text-sm">4m ago</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-zinc-400">You: Sure is this the one...</p>
          <p className="h-[10px] w-[10px] rounded-full bg-red-500 mr-3"></p>
        </div>
      </div>
    </div>
  );
}
