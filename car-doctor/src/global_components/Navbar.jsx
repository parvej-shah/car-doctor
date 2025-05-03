"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { CloudCog, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import {signIn } from "next-auth/react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !(menuRef.current, HTMLElement).contains(event.target , Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative">
      <div
        className="navbar py-2 shadow-sm px-4 md:px-10"
        style={{
          backgroundImage: "linear-gradient(174.2deg, rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4%)",
        }}
      >
        <div className="navbar-start">
          <a className="flex items-center gap-2">
            <Image src={"/assets/logo.svg"} alt="Logo" width={70} height={50} />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-primary-text font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className={`relative group ${
                    pathname === item.path ? "text-primary-bg" : "text-primary-text"
                  }`}
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-bg transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-4">
          <div className="hidden md:flex gap-4 items-center">
            <button className="btn bg-transparent border-none shadow-none text-primary-text hover:scale-105 transition-all duration-300 hover:text-primary-bg btn-circle">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button className="btn bg-transparent border-none shadow-none text-primary-text hover:scale-105 transition-all duration-300 hover:text-primary-bg btn-circle">
              <Search className="w-5 h-5" />
            </button>
            <button className="btn btn-outline border-primary-bg text-primary-bg hover:text-white hover:bg-primary-bg">
              Appointment
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="relative w-8 h-8 flex flex-col justify-between items-center p-1"
            >
              <span className="block h-0.5 w-full bg-primary transition-all duration-300"></span>
              <span className="block h-0.5 w-full bg-primary transition-all duration-300"></span>
              <span className="block h-0.5 w-full bg-primary transition-all duration-300"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Side Drawer */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-bold text-primary-text">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="btn btn-ghost btn-circle"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col mt-4 px-4 text-primary-text font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 relative group ${
                  pathname === item.path ? "text-primary" : "text-primary-text"
                }`}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4 mt-6 px-4">
          <button className="btn bg-transparent border-none shadow-none text-primary-text hover:scale-105 transition-all duration-300 hover:text-primary-bg btn-block">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button className="btn bg-transparent border-none shadow-none text-primary-text hover:scale-105 transition-all duration-300 hover:text-primary-bg btn-block">
            <Search className="w-5 h-5" />
          </button>
          <button onClick={() => {signIn("google",{ callbackUrl: "/" });console.log("Button clicked")}} className="btn btn-outline btn-primary btn-block">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
