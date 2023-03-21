import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputSearch);
    navigate(`/search/${inputSearch}`);
    setInputSearch("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
        value={inputSearch}
        type="text"
        className="outline-none p-2 rounded-full text-sm w-60 sm:w-80"
        style={{ borderWidth: "1px" }}
        placeholder="Search"
      />
      <button type="submit">
        <MagnifyingGlassIcon className="text-gray-500  bg-white absolute h-6 top-4 right-4" />
      </button>
    </form>
  );
};

export default SearchBar;
