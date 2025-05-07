'use client'

import { useState } from "react";
import clsx from "clsx";
import { Integrante } from "./about-components/integrante";
import { MdKeyboardArrowDown } from "react-icons/md";

export function Team() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-fit text-white pt-6">
      <div className="w-full flex justify-center">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={clsx(
            "flex items-center text-xs select-none border-b border-white focus:outline-none hover:cursor-pointer hover:opacity-100",
            open ? "opacity-100" : "opacity-60"
          )}
        >
          <span className="mr-1 pb-1 font-medium">Nosso Time</span>
          <MdKeyboardArrowDown
            className={clsx(
              "text-lg transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </button>
      </div>

      {open && (
        <section className="pb-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-5 gap-y-8 h-fit mt-5">
          <Integrante />
          <Integrante />
          <Integrante />
          <Integrante />
          <Integrante />
          <Integrante />
          <Integrante />
          <Integrante />
          <Integrante />
          <Integrante />
        </section>
      )}
    </div>
  );
}
