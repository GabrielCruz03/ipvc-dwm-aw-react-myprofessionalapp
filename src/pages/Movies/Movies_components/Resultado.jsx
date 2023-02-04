import React from 'react'

function Result({ result, openPopup }) {
	return (
		<div className="resultado" onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} alt="[Imagem indisponível]" />
			<h3>Titulo: {result.Title}</h3>
			<h4>Tipo: {result.Type}</h4>
			<h5>Ano: {result.Year}</h5>
		</div>
	)
}

export default Result