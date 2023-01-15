import React from 'react';
import SmallCard from './SmallCard';

let movies = {
    color:   "primary",
    titulo: "Movies in Data Base",
    valor: 21,
    icono: "fas fa-film",
}

let awards ={
    color:   "success",
    titulo: "Total awards",
    valor: 79,
    icono: "fas fa-award",
}

let actors = {
    color:   "warning",
    titulo: "Actors quantity",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [movies,awards,actors];

function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;