import React, { useState } from "react";
import axios from 'axios';

function Homepage() {

    const [text, setText] = useState("");

    const [movie, setMovie] = useState([]);

    const changeText  = (event) => {
        setText(event.target.value)
    }

    const getMovie = () => {

        console.log("Submit")
        axios.post(`http://www.omdbapi.com/?s=${text}&apikey=624e2a2c`)
        .then((response)=>{
            console.log(response)
            setMovie(response.data.Search)
        })

    }

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Movie Library</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
                <form className="d-flex" >
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={changeText}/>
                    <button className="btn btn-outline-success" type="button" onClick={getMovie}>Search</button>
                </form>
                </div>
            </div>
            </nav>

            <div className="container my-3">
                <div className="row">
                    {
                        movie.map((value, index) =>{
                            return (
                                <div className="col-3">
                                    <div className="card" style={{width: "18rem"}}>
                                        <img src={value.Poster} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h5 className="card-title">{value.Year}</h5>
                                                    <h3 className="card-text">{value.Title}</h3>
                                                </div>
                                                <div className="col">
                                                    <button className="btn btn-primary" type="button">Add to Playlist</button>
                                                </div>
                                            </div>
                                        </div>
                                        

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
            
        </div>
    )
}



export default Homepage;