import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "@fortawesome/fontawesome-free/css/all.min.css"; // FontAwesome for icons
import ThemeChanger from "./ThemeChanger";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 shadow-md bg-white/35 dark:bg-zinc-900/30 backdrop-blur-md select-none">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-orange-500">
        <a href="/">Ecommerce.</a>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-12 font-lg items-center ml-[-24px]">
        <li className="hover:text-orange-500 cursor-pointer transition-all duration-100 hover:underline">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition-all duration-100 hover:underline">
          <a href="/store">Store</a>
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition-all duration-100 hover:underline">
          <a href="/about">About</a>
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition-all duration-100 hover:underline">
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <div className="md:flex items-center gap-4 ml-2 hidden">
        <button aria-label="Cart" className="relative">
          <i className="fa-solid fa-cart-shopping text-xl text-gray-600 dark:text-gray-300 cursor-pointer hover:text-orange-500 transition duration-200"></i>
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            0
          </span>
        </button>
        <ThemeChanger />
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="md:hidden flex items-center">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button aria-label="Menu" className="p-2 focus:outline-none">
              <i className="fa-solid fa-bars text-xl text-gray-600 dark:text-gray-300 cursor-pointer hover:text-orange-500 transition duration-200"></i>
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="bg-white dark:bg-zinc-800 shadow-lg rounded-xl text-gray-800 dark:text-gray-200 p-2 mt-2 text-center transition-colors duration-200 ease-in-out w-48"
              side="bottom"
              align="center"
              sideOffset={8}
              style={{ minWidth: "120px" }}
            >
              {["Home", "Store", "About", "Contact"].map((item, index) => (
                <div key={item}>
                  {index > 0 && (
                    <DropdownMenu.Separator className="my-1 border-t border-gray-200 dark:border-gray-700" />
                  )}
                  <DropdownMenu.Item className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer hover:text-orange-500 transition duration-150">
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="w-full h-full block"
                    >
                      {item}
                    </a>
                  </DropdownMenu.Item>
                </div>
              ))}
              {/* Mobile Cart and Theme Changer */}
              <div className="mt-2">
                <DropdownMenu.Separator className="my-1 border-t border-gray-200 dark:border-gray-700" />
                <div className="flex justify-between items-center gap-4 p-2">
                  <button aria-label="Cart" className="relative">
                    <i className="fa-solid fa-cart-shopping text-xl text-gray-600 dark:text-gray-300 cursor-pointer hover:text-orange-500 transition duration-200"></i>
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                      0
                    </span>
                  </button>
                  <ThemeChanger />
                </div>
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
}

export default Navbar;
