export default function Movie(props){
    return(
        <article>
            <h3>{props.date.title}</h3>
            <p>Years: {props.date.year}</p>
            <p>Actors: {props.date.actors}</p>
        </article>
    )
}