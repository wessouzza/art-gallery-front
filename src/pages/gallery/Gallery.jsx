import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "../../components/card/Card";
import PictureModal from "../../components/pictureModal/PictureModal";
import { SearchProvider, useSearch } from "../../context/SearchContext";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState([]);
  const [contentLimit, setContentLimit] = useState(7);
  const [page, setPage] = useState(1);
  const { searchTerm, setSearchTerm } = useSearch();

  const prevPage = () => {
    if (page <= 1) return;
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const fetchPagination = async () => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks?page=${page}&limit=7&fields=id,thumbnail,short_description,date_display,title,artist_display,width,height,alt_text,image_id`
    );
    const result = await response.json();
    setData(result.data);
  };

  useEffect(() => {
    fetchPagination();
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.artic.edu/api/v1/artworks?fields=id,thumbnail,short_description,date_display,title,artist_display,date_display,alt_text,image_id,width,height"
      );
      const result = await response.json();
      setData(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const searchData = async () => {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&fields=id,thumbnail,alt_text,image_id,title,date_display,artist_display,alt_text,short_description,width,height`
      );
      const result = await response.json();
      setData(result.data);
    };
    searchData();
  }, [searchTerm]);

  const openModal = (card) => {
    setSelected(card);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelected(null);
  };

  return (
    <>
      <SearchProvider>
        <h1 className="title">
          {searchTerm ? `Resultados para: "${searchTerm}"` : "Galeria"}
        </h1>
        <section className="card-container">
          <div className="card-grid">
            {data.length > 0 ? (
              data
                .slice(1, contentLimit)
                .map((item) => (
                  <Card
                    key={item.id}
                    thumb={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                    title={item.title}
                    author={item.artist_display}
                    alt_text={item.alt_text}
                    onClick={() => openModal(item)}
                  />
                ))
            ) : (
              <h1 className="title">Nenhum resultado</h1>
            )}
          </div>
          {selected && (
            <PictureModal
              key={selected.id}
              isOpen={modal}
              title={selected.title}
              author={selected.artist_display}
              year={selected.date_display}
              resolution={`${selected.thumbnail.width}x${selected.thumbnail.height}`}
              description={selected.short_description}
              pic={`https://www.artic.edu/iiif/2/${selected.image_id}/full/843,/0/default.jpg`}
              onClose={closeModal}
            />
          )}
        </section>
        <div className="pagination-control">
          <button onClick={() => prevPage()}>
            <FaAnglesLeft />
          </button>
          <p>{page}</p>
          <button onClick={() => nextPage()}>
            <FaAnglesRight />
          </button>
        </div>
      </SearchProvider>
    </>
  );
};

export default Gallery;
