import { Button } from "bootstrap";
import React, { Component } from "react";
import { getTamilmovies } from'./services/fake Tamil movies server'


class TamilMovie extends Component{

    state={
        movies: getTamilmovies()
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
            <div>
            <h1 className ="text-info " className="p-3 mb-2 bg-success text-white">Tamil movies</h1>
            </div>
            
            <p className="text-success"  >Available movies count is {this.state.movies.length} </p>
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
                {this.state.movies.map(tmovie=>(
                <tr key={tmovie._id}>                
                <td>{tmovie.title}</td>
                <td>{tmovie.genre.name}</td>
                <td>{tmovie.numberInStock}</td>
                <td>{tmovie.dailyRentalRate}</td>
                <td><button onClick={()=>this.handleDelete(tmovie)} className="btn btn-danger btn-sm"  >Delete</button> </td>
                </tr>))}
                
                
            </tbody>
            </table>
        </div>
    )
}



}
export default TamilMovie;