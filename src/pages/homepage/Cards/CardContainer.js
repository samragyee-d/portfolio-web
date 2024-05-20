import React from "react";
import Card from "./Card";


function CardContainer() {
    const cardNumber = 10;
    const cardArray = Array.from ({ length: cardNumber });
    return (
    <main>
        <div className="cardContainer">
            {cardArray.map ((___, index) =>
            ( <Card key={index} />))} 
        </div>

    </main>

  );
}

export default CardContainer;