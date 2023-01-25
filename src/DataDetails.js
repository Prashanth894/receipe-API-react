import React from 'react'
import './App.css'
const DataDetails = ({data}) => {
    return (
        <div>
            <div className="row">
              {data.map(data => 
                <div className="col-md-4 p-2">
                    <div className="card" style={{"width": "20rem"}}>
                    <img className="card-img-top" src={data.recipe.image}  alt="Card image cap" />
                    <div className="card-body bg-black text-white">
                    <center>
                        <h5 className="card-title">{data.recipe.label}</h5>
                        <p className="card-text">Calories : {data.recipe.calories}</p>
                        <a href="#" className="btn btn-danger">order now</a>
                    </center>
                    </div>
                    </div>
                </div>
              )}
            </div>
        </div>
    )
}

export default DataDetails

