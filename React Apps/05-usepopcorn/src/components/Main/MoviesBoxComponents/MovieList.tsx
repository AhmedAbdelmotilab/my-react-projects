import IMovie from "../../../Interfaces/IMovie";
import Movie from "./Movie";
interface MovieListProps {
  movies: IMovie[];
}
function MovieList({ movies }: MovieListProps) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
export default MovieList;
