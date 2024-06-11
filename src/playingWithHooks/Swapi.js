import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Swapi() {
    const numOfMovies = [1, 2, 3, 4, 5, 6, 7];
    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState("");

    useEffect(() => {
        // async func must be written inside, like so:
        async function getData() {
            const response = await axios.get(`https://swapi.dev/api/films/${number}`);
            setMovie(response.data);
            console.log(response.data);
        }
        getData();
    }, [ number ]);  // The empty array ensures this effect runs only once after the initial render

    return (
        <div>
            <h1>Star Wars Movie Picker (SWAPI API + useEffect hook)</h1>
            <select value={number} onChange={e => setNumber(e.target.value)}>
                {numOfMovies.map((num) => {
                    return <option key={num} value={num}>{num}</option>
                })}
            </select>
            <h4>Title: { movie.title } </h4>
            <p>{movie.opening_crawl}</p>
            {/* <button onClick={ () => setCount( count + 1 )}>Click me { count } </button> */}
        </div>
    )
}