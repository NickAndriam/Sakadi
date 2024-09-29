"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { MdOutlineSettings } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname === "/login") return;
  return (
    <div className="flex justify-end z-10 items-end mb-8 sticky top-5 right-0">
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition duration-200">
          <MdOutlineSettings size={25} />
        </button>
        <button className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition duration-200">
          <IoNotificationsOutline size={25} />
        </button>
        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold">
          SA
        </div>
      </div>
    </div>
  );
}
