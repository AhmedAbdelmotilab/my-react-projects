import IWatchedMovie from "../../../Interfaces/IWatchedMovie";
import WatchedMovie from "./WatchedMovie";

interface WatchedMoviesProps {
  watched: IWatchedMovie[];
}
function WatchedMovieList({ watched }: WatchedMoviesProps) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
export default WatchedMovieList;
