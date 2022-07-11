import { Button } from "bootstrap";
import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";


class Movie extends Component{

    state={
        movies: getMovies()
    }

    handleDelete =(movie)=>{
        const moviedelete=this.state.movies.filter(md => md._id!== movie._id)
        console.log(moviedelete)
        this.setState({movies:moviedelete})
    }

render(){

    if (this.state.movies.length===0)
    return <p class="text-warning" > There is no movies in this database</p>
    return(
        <div>
            <h1 className ="text-info" className ="p-3 mb-2 bg-success text-white">hollywood movies</h1>
            <p className="text-success" >available movies count is {this.state.movies.length} </p>
            <table className="table">
            <thead>
                    <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th>Action</th>
                    </tr>
             </thead>
            <tbody>
                {this.state.movies.map(movie=>(
                <tr key={movie._id}>                
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm"  >Delete</button> </td>
                </tr>))}
                
                
            </tbody>
            </table>
        </div>
    )
}



}
export default Movie;