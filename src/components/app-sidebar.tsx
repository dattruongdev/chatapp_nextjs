import {
  Inbox,
  Search,
  Settings,
  BookUser,
  User,
  Newspaper,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { headers } from "next/headers";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import InvitationDialog from "./InvitationDialog";

// Menu items.
const items = [
  {
    title: "Inbox",
    url: "/",
    icon: Inbox,
  },
  {
    title: "Friends",
    url: "/friends",
    icon: BookUser,
  },
  {
    title: "Feed",
    url: "#",
    icon: Newspaper,
  },
];

export async function AppSidebar() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname");

  return (
    <Sidebar>
      <SidebarHeader className="text-center text-3xl">Chat App</SidebarHeader>
      <Separator className="my-4 bg-zinc-300 w-3/4 mx-auto" />
      <SidebarTrigger className="absolute -right-6" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    variant={pathname === item.url ? "darkguy" : "default"}
                  >
                    <a href={item.url} style={{ fontSize: "1.2rem" }}>
                      <item.icon
                        style={{ width: "1.1rem", height: "1.1rem" }}
                      />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <InvitationDialog />
      </SidebarFooter>
    </Sidebar>
  );
}
