import React from "react";
import MovieCard from "./MovieCard";
import {movies} from './moviesData';

class MovieList extends React.Component{
    
    render(){
        const {movies,addStars,decStars,toggleFav,toggleCart} =  this.props;

          
        return(
            <div className="main">
                {movies.map((movie,index) => (
                <MovieCard movies = {movie}
                           key = {index}
                           onIncStars = {addStars}
                            onDecStars = {decStars}
                            onClickFav = {toggleFav}
                            onClickAddtocart = {toggleCart}/>

            ))}              
            </div>
        )
    }
}

export default MovieList;