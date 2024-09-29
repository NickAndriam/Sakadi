"use client";
import Header from "@/components/reusables/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Header title="Choix d'actions" />
      <main className="flex w-full flex-wrap justify-center lg:gap-10 gap-4 lg:my-20 transition-all duration-75">
        <Card icon="cashier" title="Caisse" href="sell" />
        <Card icon="colis" title="Colis" href="arrival" />
        <Card icon="form" title="Commander" href="order" />
      </main>
    </>
  );
}

const Card: React.FC<{ icon: string; title: string; href: string }> = ({
  icon,
  title,
  href,
}) => {
  return (
    <Link
      href={`/admin/cashier/${href}`}
      className="bg-white flex flex-shrink-0 flex-col items-center justify-center p-10 gap-5
    rounded-2xl shadow-md hover:border-black hover:border transition duration-75"
    >
      <Image
        src={`/svg/${icon}.svg`}
        alt={icon}
        width={40}
        height={40}
        className="h-52 w-52"
      />
      <h2 className="text-lg font-bold">{title}</h2>
    </Link>
  );
};
