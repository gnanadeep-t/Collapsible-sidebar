import React from "react";
import {
  Bird,
  Book,
  Bot,
  Code2,
  LifeBuoy,
  Settings2,
  SquareTerminal,
  SquareUser,
  Triangle,
} from "lucide-react";
import {
  ChatBubbleBottomCenterTextIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import TasksSection from "./TasksSection";
import ProjectSection from "./ProjectSection";

export default function DashboardLayout() {
  return (
    <div className="grid h-screen w-full pl-[56px]">
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <div className="border-b p-2">
          <Button variant="outline" size="icon" aria-label="Home">
            <Triangle className="size-5 fill-foreground" />
          </Button>
        </div>
        <nav className="grid gap-1 p-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg bg-muted"
                  aria-label="Playground"
                >
                  <SquareTerminal className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Playground
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Models"
                >
                  <Bot className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Models
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="API"
                >
                  <Code2 className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                API
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Documentation"
                >
                  <Book className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Documentation
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Settings"
                >
                  <Settings2 className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Settings
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto grid gap-1 p-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Help"
                >
                  <LifeBuoy className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Help
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Account"
                >
                  <SquareUser className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Account
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center justify-between gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">Logo</h1>
          {/* Right section: Icons */}
          <div className="flex items-center mr-3">
            {/* Chat icon */}
            <Popover className="mr-4 cursor-pointer">
              <PopoverTrigger>
                <div className="mr-4 cursor-pointer ">
                  <ChatBubbleBottomCenterTextIcon className="h-6 w-6 hover:text-gray-600" />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-fit mr-4 mt-2 bg-background cursor-pointer">
                <div>Chats</div>
              </PopoverContent>
            </Popover>
            {/* Notification icon */}
            <Popover className="mr-4 cursor-pointer">
              <PopoverTrigger>
                <div className="mr-4 cursor-pointer">
                  <BellIcon className="h-6 w-6 hover:text-gray-600" />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-fit mr-4 mt-2 bg-background cursor-pointer">
                <div>Notifications</div>
              </PopoverContent>
            </Popover>

            {/* Profile icon */}
            <Popover className="mr-4 cursor-pointer">
              <PopoverTrigger>
                <div className="mr-4 cursor-pointer">
                  <UserCircleIcon className="h-6 w-6 hover:text-gray-600" />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-fit mr-4 mt-2 bg-background cursor-pointer">
                <button>Logout</button>
              </PopoverContent>
            </Popover>
          </div>
        </header>
        <main className="flex flex-col">
          <div className="flex">
            <TasksSection />
          </div>
          <div className="">
            <ProjectSection />
          </div>
        </main>
      </div>
    </div>
  );
}
