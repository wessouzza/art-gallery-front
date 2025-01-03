import { useState, useEffect, useReducer } from "react";
import { useSearch } from "../context/SearchContext";

const pageReducer = (state, action) => {
  switch (action.type) {
    case "prevPage": {
      if (state.page <= 1) {
        return state;
      }
      return { ...state, page: state.page - 1 };
    }
    case "nextPage": {
      return { ...state, page: state.page + 1 };
    }
    default: {
      return state;
    }
  }
};

export function useFetchArt() {
  const [art, setArt] = useState([]);
  const { searchTerm, setSearchTerm } = useSearch();
  const [isImgLoading, setIsImgLoading] = useState('');
  const [state, dispatch] = useReducer(pageReducer, { page: 1 });

  
  const fetchData = async (url) => {
    setIsImgLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setArt(result.data);
    } catch (error) {
      console.log("Something went wrong!! " + error);
    }finally{
        setIsImgLoading(false);
    }
  };

  useEffect(() => {
    fetchData(
      "https://api.artic.edu/api/v1/artworks?fields=id,thumbnail,short_description,date_display,title,artist_display,date_display,alt_text,image_id,width,height");
      setSearchTerm("");
    },[]);

  useEffect(() => {
    if(searchTerm){
        fetchData(`https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&fields=id,thumbnail,alt_text,image_id,title,date_display,artist_display,alt_text,short_description,width,height`);
    }
  },[searchTerm]);

  useEffect(() => {
    fetchData(`https://api.artic.edu/api/v1/artworks?page=${state.page}&limit=7&fields=id,thumbnail,short_description,date_display,title,artist_display,width,height,alt_text,image_id`);
    setSearchTerm("");
},[state.page]);

  return { art, state, searchTerm, isImgLoading, dispatch };
}
