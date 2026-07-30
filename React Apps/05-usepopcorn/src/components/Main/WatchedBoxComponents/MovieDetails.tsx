import { useEffect, useState } from "react";
import IWatchedMovie from "../../../Interfaces/IWatchedMovie";
import Loader from "../../Box/Loader";
import StarRating from "../../Star/StarRating";

interface MovieDetailsProps {
  selectedMovieId: string;
  handelCloseMovieDetails: () => void;
  handelSetWatched: (movie: IWatchedMovie) => void;
  watched: IWatchedMovie[];
}

const KEY = "d2823662";
function MovieDetails({
  selectedMovieId,
  handelCloseMovieDetails,
  handelSetWatched,
  watched,
}: MovieDetailsProps) {
  const [movie, setMovie] = useState<IWatchedMovie | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userRatingValue, setUserRatingValue] = useState(0);
  const isWatched = watched.map((m) => m?.imdbID).includes(selectedMovieId);
  const userRating = watched.find(
    (m) => m.imdbID === selectedMovieId,
  )?.userRating;
  function handelAdd() {
    const newWatchedMovie: IWatchedMovie = {
      imdbID: selectedMovieId,
      Title: movie?.Title,
      Year: movie?.Year,
      Poster: movie?.Poster,
      Runtime: movie?.Runtime,
      imdbRating: movie?.imdbRating,
      userRating: userRatingValue,
    };
    handelSetWatched(newWatchedMovie);
    console.log(newWatchedMovie);
    handelCloseMovieDetails();
  }
  useEffect(() => {
    const controller = new AbortController();
    async function FetchData() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovieId}`,
          { signal: controller.signal },
        );
        if (!res.ok) throw new Error("Something Went Wrong");
        const data = await res.json();
        if (data.Response === "False" && selectedMovieId !== null)
          throw new Error("Failed To Fetch The Movie");
        setMovie(data);
        console.log(data);
        setIsLoading(false);
      } catch (err) {
        const ErrorMessage = err instanceof Error ? err.message : String(err);
        console.error(ErrorMessage);
      }
    }
    FetchData();
    return function () {
      controller.abort();
    };
  }, [selectedMovieId]);
  useEffect(() => {
    if (!movie?.Title) return;
    document.title = `Movie | ${movie?.Title}`;
    return () => {
      document.title = `UsePopCorn`;
    };
  }, [movie?.Title]);
  useEffect(() => {
    function callBack(e: any) {
      if (e.code === "Escape") {
        handelCloseMovieDetails();
      }
    }
    document.addEventListener("keydown", callBack);
    return () => {
      document.removeEventListener("keydown", callBack);
    };
  }, [handelCloseMovieDetails]);
  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <img src={movie?.Poster} alt={movie?.Title} />
            <button className="btn-back" onClick={handelCloseMovieDetails}>
              &larr;
            </button>
            <div className="details-overview">
              <h2>{movie?.Title}</h2>
              <p>
                {movie?.Released} &bull; {movie?.Runtime}
              </p>
              <p>{movie?.Genre}</p>
              <p>
                <span>⭐️</span>
                {movie?.imdbRating} IDMb Rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    setRatingOut={setUserRatingValue}
                  />
                  {userRatingValue > 0 && (
                    <button className="btn-add" onClick={handelAdd}>
                      + Add To List
                    </button>
                  )}
                </>
              ) : (
                <p style={{ textAlign: "center" }}>
                  You Already Rated It With{" "}
                  <span style={{ color: "green", fontSize: "16px" }}>
                    {userRating} ⭐️
                  </span>
                </p>
              )}
            </div>
            <p>
              <em>{movie?.Plot}</em>
            </p>
            <p>Starring {movie?.Actors}</p>
            <p>Directed By {movie?.Director}</p>
          </section>
        </>
      )}
    </div>
  );
}
export default MovieDetails;
