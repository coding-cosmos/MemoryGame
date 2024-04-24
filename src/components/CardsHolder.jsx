import "../styles/CardsHolder.css";
import { Card } from "./Card";
import { randomInRange } from "../scripts/Utils";
import { useState } from "react";

export function CardsHolder() {
  const [ clicked, setClicked ] = useState(false);
  const [ cardsState, setCardsState ] = useState([]);

  function handleClick(event, index) {
    // Randomize the cards due to state change
    clicked ? setClicked(false) : setClicked(true);

    // change state of card
    if (cardsState[ index ] == true) {
      setCardsState([]);
      // update current score counter
      // set high score counter
    } else {
       let temp = cardsState;
       temp[index] = true;
       setCardsState(temp);
       console.log(temp)
      
      // update current score counter
      // update high score counter
    }
     
  }

  return (
    <div className="cardsholder">
      {randomInRange(15).map((index) => {
        return (
          <Card
            index={index}
            key={index}
            onClick={(e) => {
              handleClick(e, index);
            }}
          />
        );
      })}
    </div>
  );
}
