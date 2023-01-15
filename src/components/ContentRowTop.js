import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
function ContentRowTop(){
    return(
        <React.Fragment>
				
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					
					<ContentRowMovies />
								
	
					
					<div className="row">
					    <MovieInDb />
						
						<GenresInDb />

								
					</div>
				</div>
				

        </React.Fragment>
    )

}
export default ContentRowTop;