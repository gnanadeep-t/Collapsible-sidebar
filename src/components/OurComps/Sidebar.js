"use client";
import React, { useState } from "react";
import {
  ChevronRightIcon,
  XMarkIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Separator } from "../ui/separator";
import Link from "next/link";

export default function Sidebar() {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/", icon: HomeIcon },
    { name: "Dev", icon: UserCircleIcon },
    { name: "Purchase", href: "/purchase", icon: HomeIcon },
    { name: "Production", icon: HomeIcon },
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
    <div
      className={`fixed h-screen bg-customGrayBackground p-7 border-r-2 z-30 border-white-100 transition-all duration-300 ${
        isHovered ? "w-48" : "w-16"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo */}
      {/* <div className="text-2xl text-primary m-1 p-1 pb-2">Logo</div> */}
      {/* Menu Items */}
      <ul className="">
        {navigation.map((item, index) => (
          <li key={index}>
            <div className="inline-flex">
              <item.icon className="w-5 h-5 text-customFont m-3.5 ml-0 " />
              <div
                className={`h-5 m-3.5 ml-0 transition-all duration-200  ${
                  isHovered ? "" : "opacity-0 "
                }`}
              >
                {item.name}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
