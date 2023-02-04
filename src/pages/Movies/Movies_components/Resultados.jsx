import React from 'react'
import Result from './Resultado'

function Results ({ results, openPopup }) {
	return (
		<section className="resultados">
			{results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</section>
		
	)
}

export default Results