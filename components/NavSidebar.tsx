"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Home, Info, Gamepad2, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="h-screen">
      <SidebarHeader className="pb-0">
        <div className="p-4 flex items-center gap-2">
          <Gamepad2 className="h-6 w-6 " />
          <span className="font-bold text-lg ">Melee RAG</span>
        </div>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"}>
                  <Link href="/">
                    <Home className="text-red-400" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/about"}>
                  <Link href="/about">
                    <Info className="text-blue-400" />
                    <span>About</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupLabel>About Me</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="https://github.com/jayadehart"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="text-gray-300" />
                    <span>GitHub</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href="https://linkedin.com/in/jaya-dehart"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
