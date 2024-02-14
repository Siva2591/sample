import React, { useState } from "react";
import "./Reactsidebar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { TbLayoutDashboard } from "react-icons/tb";
import { BsFillBookFill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";

function Reactsidebar() {
  const [show, setShow] = useState(false);
  return (
    <div className="menu">
      <div className={show ? "sidebar1" : "sidebar"}>
        <ul>
          <div className="main" onClick={() => setShow(!show)}>
            <GiHamburgerMenu className="icon" />
          </div>
          <li>
            <Link to={"/"}>
              <AiOutlineHome className="icon" />
              {show ? "" : <h2>Home</h2>}
            </Link>
          </li>
          <li>
            <Link to={"/dashboard"}>
              <TbLayoutDashboard className="icon" />
              {show ? "" : <h2>Dashboard</h2>}
            </Link>
          </li>
          <li>
            <Link to={"/aboutus"}>
              <BsFillBookFill className="icon" />
              {show ? "" : <h2>About us</h2>}
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              <IoIosContact className="icon" />
              {show ? "" : <h2>Contact</h2>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Reactsidebar;
