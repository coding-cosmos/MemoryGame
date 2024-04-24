import "../styles/CardsHolder.css";
import { Card } from "./Card";
import { randomInRange } from "../scripts/Utils";

export function CardsHolder() {
  return (
    <div className="cardsholder">
      {randomInRange(15).map((index) => {
        return <Card index={index} key={index} />;
      })}
    </div>
  );
}
