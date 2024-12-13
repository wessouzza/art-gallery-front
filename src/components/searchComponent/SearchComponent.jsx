import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

import "./style.css";
import { useSearch } from "../../context/SearchContext";

const SearchComponent = () => {
  const {searchTerm, setSearchTerm} = useSearch();
  
  const handleSubmit =(e)=>{
    e.preventDefault();
  }
  
  return (
    <>
      <form action="/home/gallery" onSubmit={handleSubmit} className="search-input">
        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Buscar..." type="text"/>
        <button type="submit" className="search-btn">
          <IoSearch />
        </button>
      </form>
    </>
  );
};

export default SearchComponent;
