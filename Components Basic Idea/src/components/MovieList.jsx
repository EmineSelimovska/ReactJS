import movies from "../assets/movies";
import Movie from "./Movie";
export default function MovieList(props){
  
   
     return(
  <div className="movie-list">
     <h2>{props.headingText}</h2>
   
    <ul>
      <li><Movie date={props.movies[0]}/></li>
      <li><Movie date={props.movies[1]}/></li>
      <li><Movie date={props.movies[2]}/></li>
      <li><Movie date={props.movies[3]}/></li>

    </ul>
  </div>
    );
}