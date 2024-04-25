import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imges/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  let data = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/Shop" },
    { name: "Blog", path: "/Blog" },
    { name: "About", path: "/About" },
    { name: "Contect", path: "/Contect" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center  justify-between bg-[#64AACF] py-4 md:px-10 px-7">
          <div>
            <img src={logo} alt="" />
          </div>
          <div
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
            onClick={() => setOpen(!open)}
          >
            {open ? <RxCross2 /> : <GiHamburgerMenu />}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            {data.map((link, index) => (
              <li
                key={index}
                className="md:ml-8 md:my-0 my-7 font-bold text-xl hover:text-[#8f7e4f]"
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
