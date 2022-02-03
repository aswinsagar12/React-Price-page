import  Button  from "./Button";
import React from "react";

const Nav = () => {
  let Links = [
    { name: "Tools", link: "/" },

    { name: "Pricing", link: "/" },
    { name: "Resources", link: "/" },
    { name: "About", link: "/" },
    { name: "Customers", link: "/" },
  ];
  return (
    <div className=" w-full fixed top-0 left-0 " >
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-4xl cursor-pointer flex items-center font-[Poppins]">
          <span className="text-3xl m1-1 pt-2">
            <ion-icon name="flash-outline"></ion-icon>
          </span>
          Buffer
        </div>
        <ul className="md:flex md:items-center md:pb-0 pb-12 ">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a href={link.link} className="text-black-200 hover:text-blue-700">
                {link.name}
              </a>
            </li>
          ))}
          <Button>
              Lets Get start
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
