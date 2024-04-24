import "./App.css";
import { CardsHolder } from "./components/CardsHolder";

function App() {
  return (
    <div className="container">
      <div className="nav">
        <nav>
          <div className="logo">
            <img src="/memory.png" alt="" />
            <span className="logo-text">MemGame</span>
          </div>
          <div className="counter-container">counters</div>
        </nav>
      </div>
      <div className="main">
        <section className="game">
          <CardsHolder />
        </section>
      </div>
    </div>
  );
}

export default App;
