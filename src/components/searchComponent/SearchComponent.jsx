import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

import "./style.css";
import { useSearch } from "../../context/SearchContext";

const SearchComponent = () => {
  const {searchTerm, setSearchTerm} = useSearch();
  const [query, setQuery] = useState('');
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    setSearchTerm(query);
    setQuery('');
  }
  
  return (
    <>
      <form action="/home/gallery" onSubmit={handleSubmit} className="search-input">
        <input value={query} onChange={(e)=> setQuery(e.target.value)} placeholder="Buscar..." type="text"/>
        <button type="submit" className="search-btn">
          <IoSearch />
        </button>
      </form>
    </>
  );
};

export default SearchComponent;
