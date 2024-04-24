import "../styles/CardsHolder.css";
import { Card } from "./Card";
import { randomInRange,numberOfElement } from "../scripts/Utils";
import { useState } from "react";

export function CardsHolder({ setCurrentScore,setHighScore}) {
  const [ clicked, setClicked ] = useState(false);
  const [ cardsState, setCardsState ] = useState([]);

  function handleClick(index) {
    // Randomize the cards due to state change
    clicked ? setClicked(false) : setClicked(true);

    // change state of card
    if (cardsState[ index ] == true) {
      setCardsState([]);
      // update current score counter
      setCurrentScore(0);
      // set high score counter
      setHighScore(numberOfElement(cardsState,true));
    } else {
       let temp = cardsState;
       temp[index] = true;
       setCardsState(temp);

      
      // update current score counter
      setCurrentScore(numberOfElement(cardsState, true));
      setHighScore(numberOfElement(cardsState, true));
    }
     
  }

  return (
    <div className="cardsholder">
      {randomInRange(15).map((index) => {
        return (
          <Card
            index={index}
            key={index}
            onClick={() => {
              handleClick(index);
            }}
          />
        );
      })}
    </div>
  );
}
