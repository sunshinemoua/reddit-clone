import React from "react";
import { useForm } from "react-hook-form";
import { AiFillHome, AiOutlineMessage, AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { BiBell } from "react-icons/bi";

import "./App.scss";

const Navbar = () => {
  type Inputs = {
    searchInput: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="logo">
          <img src="logo.svg" alt="Reddit Logo" className="icon" />
          <img src="reddit-sign.svg" alt="Reddit Sign" className="sign" />
        </div>
        <AiFillHome size="24" />
        Home
      </div>
      <div className="search-bar">
        <input {...register("searchInput")} placeholder="Search Reddit" />{" "}
      </div>
      <div className="nav-right">
        <div className="navbar-icons">
          <BsArrowUpRightCircle size="24" />
          <AiOutlineMessage size="24" />
          <BiBell size="24" />
          <AiOutlinePlus size="24" />
        </div>
        <div className="profile-icon-wrapper">
          <img
            src="profile-icon.svg"
            alt="profile-icon"
            className="profile-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
