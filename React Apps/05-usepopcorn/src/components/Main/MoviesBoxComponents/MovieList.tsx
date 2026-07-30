import IMovie from "../../../Interfaces/IMovie";
import Movie from "./Movie";
interface MovieListProps {
  movies: IMovie[];
  setSelectedMovie: (id: string) => void;
}
function MovieList({ movies, setSelectedMovie }: MovieListProps) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          setSelectedMovie={setSelectedMovie}
        />
      ))}
    </ul>
  );
}
export default MovieList;
