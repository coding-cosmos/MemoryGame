import { useState } from "react";
import "./App.css";
import { CardsHolder } from "./components/CardsHolder";
import { Score } from "./components/Score";

function App() {
  const [ currentScore, setCurrentScore ] = useState(0);
  const [ hgihScore, setHighScore ] = useState(0);
  return (
    <div className="container">
      <div className="nav">
        <nav>
          <div className="logo">
            <img src="/memory.png" alt="" />
            <span className="logo-text">MemGame</span>
          </div>
          <div className="counter-container">
            <Score name="Current Score" score={currentScore}/>
            <Score name="High Score" score={hgihScore}/>
          </div>
        </nav>
      </div>
      <div className="main">
        <section className="game">
          <CardsHolder setCurrentScore={setCurrentScore} setHighScore={setHighScore}/>
        </section>
      </div>
    </div>
  );
}

export default App;
