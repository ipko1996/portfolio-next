"use client";

import { useRef } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToggle, useOnClickOutside } from "usehooks-ts";
import { motion, Variants } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import NavLink from "./NavLink";

export default function NavBar() {
  const [value, toggle] = useToggle();
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 768px)" });
  const ref = useRef(null);
  const handleClickOutside = () => {
    if (value) toggle();
  };

  const variants: Variants = {
    closed: { x: isTabletOrMobile ? "0%" : "100%" },
    open: { x: "0%" },
  };

  useOnClickOutside(ref, handleClickOutside);
  return (
    <nav
      ref={ref}
      className={`
      flex relative justify-between p-4
      `}
    >
      <Logo />
      <div className="md:hidden cursor-pointer z-10">
        <FontAwesomeIcon
          size={"2xl"}
          onClick={toggle}
          icon={value ? faXmark : faBars}
        />
      </div>
      <motion.div
        animate={value ? "open" : "closed"}
        variants={variants}
        transition={{ ease: "linear", duration: 0.2 }}
        className={`
        xl:w-2/5
        md:static md:bg-transparent md:dark:bg-transparent md:w-2/3
        w-2/3 absolute top-0 translate-x-full right-0
        dark:bg-slate-700 bg-slate-200
       ${value ? "" : ""}`}
      >
        <div
          className={`
        md:flex-row md:h-full
        flex flex-col items-center h-screen justify-evenly`}
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
          <NavLink fn={value ? toggle : undefined} href="/contact">
            Contact
          </NavLink>
          <DarkModeToggle />
        </div>
      </motion.div>
    </nav>
  );
}
