import React, { useState } from "react";
import "./style.css";
import Card from "../../components/card/Card";
import PictureModal from "../../components/pictureModal/PictureModal";
import { SearchProvider, useSearch } from "../../context/SearchContext";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { useFetchArt } from "../../hooks/useFetchArt";


const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [contentLimit, setContentLimit] = useState(7);

  const {art, state, searchTerm, isImgLoading, dispatch} = useFetchArt();

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
            {art.length > 0 ? (
                art.slice(1, contentLimit)
                .map((item) => (
                  <Card
                    key={item.id}
                    thumb={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                    title={item.title}
                    author={item.artist_display}
                    alt_text={item.alt_text}
                    isImgLoading={isImgLoading}
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
          <button onClick={() => dispatch({type: 'prevPage'})}>
            <FaAnglesLeft />
          </button>
          <p>{state.page}</p>
          <button onClick={() => dispatch({type: 'nextPage'})}>
            <FaAnglesRight />
          </button>
        </div>
      </SearchProvider>
    </>
  );
};

export default Gallery;
