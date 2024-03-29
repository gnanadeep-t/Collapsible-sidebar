'use client'
import React, { useState } from "react";
import {
  ChevronRightIcon,
  XMarkIcon,
  HomeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Sidebar() {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/", icon: HomeIcon },
    { name: "Dev", href: "/dev", icon: UserCircleIcon },
    { name: "Purchase", href: "/purchase", icon: HomeIcon },
    { name: "Production", href: "/production", icon: HomeIcon },
  ];


  return (
    <div
      className={` min-h-screen bg-customGrayBackground p-7 border-r-2 z-30 border-white-100 transition-all duration-300 ${
        isHovered ? "w-48" : "w-16"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo */}
      <div className="text-2xl text-primary m-1 p-1 pb-2">Logo</div>
      {/* Menu Items */}
      <ul>
        {navigation.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              <div
                className={`flex items-center px-3 py-2 rounded-md text-customFont font-medium hover:text-gray-600 w-full text-left cursor-pointer
                ${isHovered} ? "opacity-100" : "opacity-0"
                `}
              >
                <item.icon className="w-5 h-5 mr-2 text-customFont opacity-100" />
                <span>{item.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
