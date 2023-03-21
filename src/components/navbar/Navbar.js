import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../utils/Utility";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className=" bg-white flex w-screen justify-between p-2 items-center">
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="h-10" />
      </Link>
      <SearchBar />
    </div>
  );
}
