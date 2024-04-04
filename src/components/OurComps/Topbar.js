import React from "react";
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

const Topbar = ({ userName }) => {
  return (
    <div className="bg-customGrayBackground min-h-16 flex justify-between items-center px-4 text-gray-500 z-10 w-full border-b-2 border-white-100">
      {/* Left section: User name */}
      <div className="flex items-center ml-3">
        <span className="mr-4">{userName}username</span>
      </div>

      {/* Right section: Icons */}
      <div className="flex items-center mr-3">
      <DrawerComponent/>
        {/* Chat icon */}
        <Popover className="mr-4 cursor-pointer">
          <PopoverTrigger>
            <div className="mr-4 cursor-pointer ">
              <ChatBubbleBottomCenterTextIcon className="h-6 w-6 hover:text-gray-600" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-fit mr-4 mt-2 bg-background">
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
          <PopoverContent className="w-fit mr-4 mt-2 bg-background">
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
          <PopoverContent className="w-fit mr-4 mt-2 bg-background">
            <button>Logout</button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Topbar;
