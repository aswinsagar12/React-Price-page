import Button from "./Button";
import React from "react";
import { useState } from "react";

const Nav = () => {
  let Links = [
    { name: "Tools", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Resources", link: "/" },
    { name: "About", link: "/" },
    { name: "Customers", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className=" w-full fixed top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-4xl cursor-pointer flex items-center font-[Poppins]">
          <span className="text-3xl m1-1 pt-2">
            <ion-icon name="flash-outline"></ion-icon>
          </span>
          Buffer
        </div>
        <div
          onClick={() => setOpen}
          className="tet-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100": "top-[-490px]"} md:opacity-100 opacity-0"
          `}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-black-200 hover:text-blue-700"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Lets Get start</Button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
