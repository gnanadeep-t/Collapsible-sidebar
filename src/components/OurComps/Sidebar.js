"use client";
import { useState } from "react";
import {
  ChevronRightIcon,
  XMarkIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Separator } from "@radix-ui/react-separator";
export default function Sidebar() {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const navigation = [
    { name: "Dashboard", href: "/", icon: HomeIcon },
    {
      name: "Dev",
      icon: UserCircleIcon,
    },
    { name: "Purchase", href: "/purchase", icon: HomeIcon },
    {
      name: "Production",
      icon: HomeIcon,
    },
  ];

  const handleMenuItemClick = (item) => {
    if (item.submenus) {
      setOpenSubMenu(openSubMenu === item.name ? null : item.name);
    } else if (item.href) {
      // Navigate to the specified href
      window.location.href = item.href;
    }
  };

  return (
    <div className="w-64 min-h-screen bg-customGrayBackground p-7 border-r-2 z-30 border-white-100">
      {/* <a href="/dashboard">Dashboard</a> */}
      <div className="text-2xl text-primary m-1 p-1 pb-2">Logo</div>
      <ul className="">
        {navigation.map((item, index) => (
          <div className="flex justify-start items-center">
          <HomeIcon className="w-5 h-5 text-customFont " />
          <li key={index}>
            {/* Menu item */}
            <div
              onClick={() => handleMenuItemClick(item)}
              className={`rounded-md px-3 py-2 text-customFont font-medium hover:text-gray-600w-full text-left cursor-pointer flex justify-between items-center
                ${
                  item.href && openSubMenu !== item.name
                    ? "hover:text-gray-600"
                    : ""
                }
                ${
                  item.href && openSubMenu === item.name
                    ? ""
                    : "hover:text-gray-600"
                }`}
            >
              {item.name}

              {item.submenus && (
                <span>
                  {/* className="absolute right-3" */}
                  {openSubMenu === item.name ? (
                    <XMarkIcon
                      className="h-4 w-4 text-customFont"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronRightIcon
                      className="h-4 w-4 text-customFont"
                      aria-hidden="true"
                    />
                  )}
                </span>
              )}
            </div>

            {item.submenus && openSubMenu === item.name && (
              <ul className="pl-3">
                {item.submenus.map((subitem, subIndex) => (
                  <li key={subIndex} className="px-3 py-2">
                    <a
                      href={subitem.href}
                      className={`rounded-md px-3 py-2  font-medium hover:text-gray-600 text-gray-500 w-full text-left cursor-pointer
                        ${subitem.href === window.location.pathname ? "" : ""}`}
                    >
                      {subitem.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
