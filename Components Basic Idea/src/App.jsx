
import './App.css'
import MovieList from './components/MovieList'
import movies from './assets/movies';
import Timer from './components/Timer';


function App() {
 

  return (
    
      <div>
       <h1>My first Dynamic React Application</h1>

       <Timer startTime={5} />
       <Timer startTime={6} />
       <Timer startTime={7} />





      <MovieList movies={movies} headingText="Movie List"/>
    </div>
  )
}

export default App
