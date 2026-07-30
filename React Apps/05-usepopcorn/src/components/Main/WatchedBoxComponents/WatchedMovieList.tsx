import IWatchedMovie from "../../../Interfaces/IWatchedMovie";
import WatchedMovie from "./WatchedMovie";

interface WatchedMoviesProps {
  watched: IWatchedMovie[];
  handelDeleteWatchedMovie: (id: string) => void;
}
function WatchedMovieList({
  watched,
  handelDeleteWatchedMovie,
}: WatchedMoviesProps) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          handelDeleteWatchedMovie={handelDeleteWatchedMovie}
        />
      ))}
    </ul>
  );
}
export default WatchedMovieList;
