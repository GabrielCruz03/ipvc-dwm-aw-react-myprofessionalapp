import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Quotes.css";

const apiurl = "https://type.fit/api/quotes";
let data;
const numAleatorio = () => Math.floor(Math.random() * data.length) + 1;


function Quotes() {
  const [citacoes, setCitacoes] = useState({});

  useEffect(() => {
    getCitacoes();
  }, []);

  async function getCitacoes() {
    try {
      const res = await fetch(apiurl);
      data = await res.json();
      setCitacoes(data[numAleatorio()]);
    } catch (err) {
      alert ("Falha na conexão com o servidor")
    }
  }


  return (
    
    <div className="quote-container">
        <h1 className="titulo">Gerador de Citações</h1>
        <p className="citacoes">{citacoes.text}</p>
        <p className="autor">De: {citacoes.author ? citacoes.author : "[Autor desconhecido]"}</p>
        <button className="botao-nova" onClick={getCitacoes}>Nova Citação</button>
        <Link to="/"><button className="botao-gohome">Voltar à página inicial</button></Link>
      </div>
  );
}
export default Quotes;