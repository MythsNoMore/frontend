"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../../../../public/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-[#1f2937] border-b-2 border-gray-700 text-white fixed top-0 w-full h-16 flex items-center justify-between  shadow">
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center">
            <div
              onClick={toggleMenu}
              className="pl-10 cursor-pointer lg:hidden"
            >
              {isMenuOpen ? (
                <HiX className="text-xl" />
              ) : (
                <HiMenu className="text-xl" />
              )}
            </div>
            <Link href="/">
              <div className="items-center lg:flex">
                {isMenuOpen ? (
                  <Image
                    src={Logo} // Replace with your logo image URL
                    alt="Logo"
                    className="hidden h-10 ml-3 lg:block w-50 lg:w-20 lg:ml-10"
                    width={400}
                    height={400}
                  />
                ) : (
                  <Image
                    src={Logo} // Replace with your logo image URL
                    alt="Logo"
                    className="h-10 ml-3 w-50 lg:w-20 lg:ml-10"
                    width={400}
                    height={400}
                  />
                )}
              </div>
            </Link>
          </div>
          <div
            className={`flex items-center space-x-3 lg:space-x-5 ${
              isMenuOpen ? "block" : "hidden lg:flex"
            }`}
          >
            <ul className="flex items-center space-x-3 lg:space-x-5">
              <li>
                <Link
                  href="/topic/health"
                  className="text-gray-300 hover:text-white"
                >
                  Health
                </Link>
              </li>

              <li>
                <Link
                  href="/topic/beauty"
                  className="text-gray-300 hover:text-white"
                >
                  Beauty
                </Link>
              </li>
              <li>
                <Link
                  href="/topic/tech"
                  className="text-gray-300 hover:text-white"
                >
                  Tech
                </Link>
              </li>
              <li>
                <Link
                  href="/topic/paranormal"
                  className="text-gray-300 hover:text-white"
                >
                  Paranormal
                </Link>
              </li>
              <li>
                <Link
                  href="/topic/culture"
                  className="text-gray-300 hover:text-white"
                >
                  Culture
                </Link>
              </li>

              <li>
                <Link
                  href="/topic/history"
                  className="text-gray-300 hover:text-white"
                >
                  History
                </Link>
              </li>
              {/* Add more navigation links as needed */}
            </ul>
          </div>
        </div>
      </header>
      <div className="fixed bottom-0 w-full py-2 text-center text-white font-bold bg-[#131a27]">
        MythsNoMore is under development. #BuildInPublic
      </div>
    </>
  );
};

export default Navbar;