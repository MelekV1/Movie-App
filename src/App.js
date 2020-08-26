import React ,{useState} from 'react';
import './App.css';
import MovieList from './Components/MovieComponents/MovieList';
import moviesData from './Components/MovieComponents/MovieData';
import Search from "./Components/Search/Search.js";
import AddMovie from "./Components/AddMovie/AddMovie";

function App() {
  const [title , setTitle] = useState("");
  const [rate,setRate]=useState(1);
  const [movies,setMovies]=useState(moviesData);

  const AddNewMovie=(e,NewMovie)=>{
    e.preventDefault();
    return setMovies([...movies,NewMovie])
  }
  return (
    <React.Fragment>

      <Search Searcher={setTitle} RateFilter={setRate}/>
      <MovieList data={movies} keyword={title} rateindex={rate}/>
      <AddMovie Add={AddNewMovie}/>
    </React.Fragment>
  );
}

export default App;
