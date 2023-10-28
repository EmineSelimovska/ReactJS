import movies from "../assets/movies";
import Movie from "./Movie";
import Heading from "./Heading";
export default function MovieList(props){
  
   
     return(
  <div className="movie-list">
     <Heading>{props.headingText}</Heading>
   
    <ul>
      <li><Movie date={props.movies[0]}/></li>
      <li><Movie date={props.movies[1]}/></li>
      <li><Movie date={props.movies[2]}/></li>
      <li><Movie date={props.movies[3]}/></li>

    </ul>
  </div>
    );
}