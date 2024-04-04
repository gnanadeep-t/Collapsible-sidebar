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
import Sidebar from "./Sidebar";
import ScheduleCard from "./ScheduleCard";
import DrawerComponent from "./DrawerComponent";

export default function DashboardLayout() {
  return (
    <div className="grid h-screen w-full pl-[56px]">
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <Sidebar />
      </aside>
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[57px] items-center justify-between gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">Username</h1>
          {/* Right section: Icons */}
          <DrawerComponent/>
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
        <main className="flex flex-col gap-6 ml-8 mt-6 mr-6">
          <div className="flex gap-6">
            <TasksSection />
            <ScheduleCard />
          </div>
          <ProjectSection />
        </main>
      </div>
    </div>
  );
}
