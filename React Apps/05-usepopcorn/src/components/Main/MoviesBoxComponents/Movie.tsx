import IMovie from "../../../Interfaces/IMovie";

interface MovieProps {
  movie: IMovie;
  setSelectedMovie: (id: string) => void;
}
function Movie({ movie, setSelectedMovie }: MovieProps) {
  return (
    <li onClick={() => setSelectedMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
export default Movie;
