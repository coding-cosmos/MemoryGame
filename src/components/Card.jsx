import "../styles/Card.css";
import { useEffect, useState } from "react";
import { getPokemonData } from "../scripts/Pokemon";


export function Card({ index }) {
  const [data, setData] = useState({});
  useEffect(() => {
    getPokemonData(index).then((res) => {
      setData(res);
    });
  }, [index]);

  return (
    <div className="card">
      <div className="pic">
        <img src={data.url} alt="" />
      </div>
      <div className="name">{data.name}</div>
    </div>
  );
}
