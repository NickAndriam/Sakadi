"use client";
import React, { useState } from "react";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { LuPackageOpen } from "react-icons/lu";
import { PiCashRegisterLight } from "react-icons/pi";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineSettings } from "react-icons/md";
import links from "@/data/links.json";
import Link from "next/link";
import { IconType } from "react-icons";
import { AnimatePresence, motion as m } from "framer-motion";

const iconComponents: { [key: string]: IconType } = {
  RiDashboardHorizontalLine,
  LuPackageOpen,
  PiCashRegisterLight,
  GiTakeMyMoney,
  MdOutlineSettings,
};

export default function BubbleMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const animate = isOpen ? { opacity: 1 } : { opacity: 1 };

  const transition = {
    duration: 0.3, // duration of the animation
    ease: [0.43, 0.13, 0.23, 0.96], // smooth transition curve
  };
  return (
    <>
      {/* Link list */}
      <m.div
        className="fixed bottom-28 right-4 z-50 flex flex-col items-end justify-center gap-2 transition-all duration-300 ease-in-out"
        onClick={() => setIsOpen(false)}
        animate={animate}
        transition={{ ...transition, delayChildren: 0.5 }}

        // exit={exit}
      >
        <AnimatePresence>
          {isOpen &&
            links.map((link, index) => (
              <List
                key={index}
                index={index}
                name={link.title}
                icon={link.icon}
                href={link.href}
                className="transition transform translate-y-2"
              />
            ))}
        </AnimatePresence>
      </m.div>

      {/* Burger menu */}
      <div
        className="bg-white border border-gray-200 rounded-full shadow-lg h-14 w-14 lg:hidden md:hidden flex items-center justify-center
    fixed bottom-8 right-4 z-50 cursor-pointer hover:bg-black hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <RxCross2 size={22} /> : <RxHamburgerMenu size={22} />}
      </div>
      {/* Blurred background */}
      {isOpen && (
        <div
          className="w-full h-full fixed bottom-0 left-0 z-40 bg-black/5 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

interface LinkInt {
  name: string;
  icon: string;
  href: string;
  className: string;
  index: number;
}

const List: React.FC<LinkInt> = ({ name, icon, href, className, index }) => {
  const Icon = iconComponents[icon];
  return (
    <m.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ delay: 0.07 * index }}
    >
      <Link
        className={`
        ${className}
        flex items-center justify-center gap-2 scale-100 hover:scale-105 transition-all duration-75 ease-in-out`}
        href={`/admin${href}`}
      >
        <p className="bg-white rounded-full shadow-lg px-3 py-1 ">{name}</p>
        <div className="rounded-full shadow-lg h-14 w-14 bg-blue-500 grid place-items-center">
          <Icon size={25} className="text-white" />
        </div>
      </Link>
    </m.div>
  );
};
