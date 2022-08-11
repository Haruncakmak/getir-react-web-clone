import React from "react";
import cardsData from "./../api/cards";
import { useState, useEffect } from "react";
const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <div className="grid md:grid-cols-3 p-4 md:px-0 gap-4">
      {cards.length &&
        cards.map((card) => (
          <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center text-center">
            <img
              className="w-[150px] h-[150px] mb-6"
              src={card.image}
              alt="getir"
            ></img>
            <h6 className="font-semibold text-lg text-primary-brand-color">
              {card.title}
            </h6>
            <p className="mt-2 text-sm text-gray-700">{card.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Cards;
