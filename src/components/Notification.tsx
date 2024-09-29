"use client";
import React, { useEffect } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { IoCheckmarkDone } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { notification } from "@/recoil/atom";

export default function Notification() {
  const [notif, setNotif] = useRecoilState(notification);

  const initial = { opacity: 0, x: 100 };
  const animate = { opacity: 1, x: 0 };
  const exit = { opacity: 0, x: 100 };

  useEffect(() => {
    if (notif.show) {
      const timer = setTimeout(() => {
        setNotif((prevNotif) => ({ ...prevNotif, show: false }));
      }, 2000);

      // Cleanup function to clear the timeout
      return () => clearTimeout(timer);
    }
  }, [notif.show, setNotif]);
  return (
    <>
      <AnimatePresence>
        {notif.show && (
          <m.div
            className="fixed top-20 right-4 z-50 bg-green-600 text-white
      flex items-center justify-between gap-4 py-1 px-4 rounded-full shadow-lg"
            animate={animate}
            initial={initial}
            exit={exit}
          >
            <IoCheckmarkDone size={25} />
            <p>Enregistré! </p>
          </m.div>
        )}
      </AnimatePresence>

      {/* <div
        className="sticky left-4 bottom-4 h-14 w-14 z-50 bg-white text-black"
        onClick={() => setNotif({ ...notif, show: true })}
      >
        Show notif
      </div> */}
    </>
  );
}
