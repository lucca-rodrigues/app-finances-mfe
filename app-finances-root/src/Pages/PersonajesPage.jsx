import React, { useEffect, useRef } from "react";

import placeCards from "mf_cards/placeCards";

const PersonajesPage = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    placeCards(cardsRef.current);
  }, []);

  return (
    <>
      <Error>
        <div ref={cardsRef}></div>
      </Error>
    </>
  );
};

export default PersonajesPage;
