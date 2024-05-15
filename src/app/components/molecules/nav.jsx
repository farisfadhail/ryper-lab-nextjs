"use client";

import { Icon } from "@iconify/react";
import NavLink from "../atoms/nav-link";
import NavLogo from "../atoms/nav-logo";
import { useState, useEffect } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsScrolled(true);
    } else if (window.scrollY === 0) {
      setIsScrolled(false);
    }
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
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
    <nav className={`fixed top-0 w-full z-[9999] transition-colors duration-300 ${isScrolled ? "bg-primary" : "bg-transparent"}  md:px-14 px-6 text-white`}>
      <div className="flex justify-between items-center h-full py-10">
        <NavLogo />
        <ul className="md:flex hidden items-center gap-16">
          <NavLink href={"/"} name={"Home"} />
          <NavLink href={"/blog"} name={"Blog"} />
          <NavLink href={"/about"} name={"About Us"} />
        </ul>
        <button onClick={handleOpenMenu} className="md:hidden block">
          {isOpen ? <Icon icon="mingcute:close-fill" width={"1.7rem"} className="text-white" /> : <Icon icon="charm:menu-hamburger" width={"1.7rem"} className="text-white" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden block py-10 border-t-2">
          <ul className="flex flex-col justify-center items-center gap-6">
            <NavLink href={"/"} name={"Home"} />
            <NavLink href={"/blog"} name={"Blog"} />
            <NavLink href={"/about"} name={"About Us"} />
          </ul>
        </div>
      )}
    </nav>
  );
}
