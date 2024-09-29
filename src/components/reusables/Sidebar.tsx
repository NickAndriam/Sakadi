"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdLogOut } from "react-icons/io";
import DynamicIcon from "./DynamicIcon";

export default function SideBar() {
  const pathname = usePathname();
  if (pathname === "/login") return;
  return (
    <aside className="sticky sidebar-full left-0 top-0 lg:w-[300px] md:w-[80px] h-screen bg-gradient-to-b from-gray-800 to-black text-white shadow-sm shadow-black lg:flex flex-col justify-between md:flex hidden ">
      <nav>
        <div className="p-6">
          <h2 className="text-2xl font-bold flex items-center mt-2 mb-4 lg:opacity-100 md:opacity-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mr-3 glow-effect"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
            Sakadi
          </h2>
        </div>
        <LinkCard
          title="Dashboard"
          href="/dashboard"
          iconName="LuLayoutDashboard"
        />
        <LinkCard title="Produits" href="/products" iconName="LuPackageOpen" />
        <LinkCard
          title="Caisse"
          href="/cashier"
          iconName="PiCashRegisterLight"
        />
        <LinkCard
          title="Vente et Commande"
          href="/sold"
          iconName="GiTakeMyMoney"
        />
        <LinkCard
          title="Paramètres"
          href="/settings"
          iconName="MdOutlineSettings"
        />
      </nav>
      <div>
        <Link href="/login">
          <div className="text-white border border-white hover:bg-red-500 hover:border-none px-10 py-2 rounded-full flex items-center justify-center gap-2 hover:opacity-90 m-5 lg:flex md:hidden ">
            <IoMdLogOut size={20} />
            Déconnecter
          </div>
          <IoMdLogOut size={30} className="lg:hidden md:block mx-auto my-5" />
        </Link>
      </div>
    </aside>
  );
}

interface LinkInterface {
  title: string;
  href: string;
  iconName: string;
}

const LinkCard: React.FC<LinkInterface> = ({ title, href, iconName }) => {
  const pathname = usePathname();
  const currentLocation = pathname.includes(href);
  return (
    <Link
      href={`/admin${href}`}
      className={`${
        currentLocation ? "bg-gradient-to-r from-blue-500 to-blue-400" : ""
      }
        flex items-center lg:justify-start md:justify-center py-3 px-6 text-sm gap-2 hover:bg-blue-500 transition duration-100`}
    >
      <DynamicIcon name={iconName} size="25" />
      <h2 className="text-md lg:block md:hidden">{title}</h2>
    </Link>
  );
};
