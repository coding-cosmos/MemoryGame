import { useState } from "react";
import "./App.css";
import { CardsHolder } from "./components/CardsHolder";
import { Score } from "./components/Score";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function handleHighScore(score) {
    score > highScore ? setHighScore(score) : "";
  }

  return (
    <div className="container">
      <div className="header">
          <div className="logo">
            <img src="/memory.png" alt="" />
            <span className="logo-text">MemGame</span>
          </div>
          <div className="counter-container">
            <Score name="Current Score" score={currentScore} />
            <Score name="High Score" score={highScore} />
          </div>
      </div>
      <div className="main">
        <section className="game">
          <p className="message"><span className="bold">Test your memory!!!!</span> <br /><span>Click everytime on a new Pokemon to score high...</span></p>
          <CardsHolder
            setCurrentScore={setCurrentScore}
            setHighScore={handleHighScore}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
