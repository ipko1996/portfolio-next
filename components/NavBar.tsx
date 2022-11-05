"use client";

import { useRef } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToggle, useOnClickOutside } from "usehooks-ts";

import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import NavLink from "./NavLink";

export default function NavBar() {
  const [value, toggle] = useToggle();
  const ref = useRef(null);
  const handleClickOutside = () => {
    if (value) toggle();
  };
  useOnClickOutside(ref, handleClickOutside);
  return (
    <nav
      ref={ref}
      className="flex relative items-center justify-between py-4 px-12"
    >
      <Logo />
      <div className="md:hidden cursor-pointer z-10">
        <FontAwesomeIcon
          size={"2xl"}
          onClick={toggle}
          icon={value ? faXmark : faBars}
        />
      </div>
      <div
        className={`
        md:flex md:static md:flex-row md:w-1/2 md:h-full md:bg-transparent
        w-2/3 top-0 justify-evenly h-screen right-0 absolute items-center
       ${value ? "flex flex-col dark:bg-slate-700 bg-slate-200" : "hidden"}`}
      >
        <NavLink fn={value ? toggle : undefined} href="/">
          Home
        </NavLink>
        <NavLink fn={value ? toggle : undefined} href="/about">
          About
        </NavLink>
        <NavLink fn={value ? toggle : undefined} href="/work">
          Work
        </NavLink>
        <DarkModeToggle />
      </div>
    </nav>
  );
}
