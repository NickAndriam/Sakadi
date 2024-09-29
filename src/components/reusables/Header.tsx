import Head from "next/head";
import React, { useEffect, useState } from "react";

interface HeaderInt {
  title: string;
}

const Header: React.FC<HeaderInt> = ({ title }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Adjust the value based on when you want to change the background
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <h1
      className={`sticky z-10 mb-10 top-4 lg:left-10 left-4 lg:text-2xl text-base font-bold ${
        isScrolled
          ? "bg-white py-2 px-4 shadow-md -mt-[80px]"
          : "bg-transparent -mt-[65px]"
      } rounded-full w-max duration-75 text-black transition-all`}
    >
      {title}
    </h1>
  );
};

export default Header;
