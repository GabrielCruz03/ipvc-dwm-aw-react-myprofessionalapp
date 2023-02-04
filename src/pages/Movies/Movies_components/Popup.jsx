import React from 'react'

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
                <p className="type">Type: {selected.Type}</p>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} alt="[Imagem indisponível]"/>
                    <p>{selected.Plot}</p>

				</div>
                
				<button className="fechar-popup" onClick={closePopup}>Fechar Popup</button>
				
            </div>
		</section>
	)
}

export default Popup