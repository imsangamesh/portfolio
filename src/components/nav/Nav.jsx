import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import "./nav.css";

const Nav = () => {
  const navLinks = [
    { name: "#", icon: <AiOutlineHome /> },
    { name: "#about", icon: <AiOutlineUser /> },
    { name: "#experience", icon: <BiBook /> },
    { name: "#services", icon: <RiServiceLine /> },
    { name: "#contact", icon: <BiMessageSquareDetail /> },
  ];
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      {navLinks.map(({ name, icon }) => (
        <a
          href={name}
          className={name === activeNav ? "active" : ""}
          onClick={() => setActiveNav(name)}>
          {icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
