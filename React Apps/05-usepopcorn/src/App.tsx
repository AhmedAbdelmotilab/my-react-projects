import { useEffect, useState } from "react";
import BoxComponent from "./components/Box/BoxComponent";
import ErrorMessage from "./components/Box/Error";
import Loader from "./components/Box/Loader";
import Main from "./components/Main/Main";
import MovieList from "./components/Main/MoviesBoxComponents/MovieList";
import MovieDetails from "./components/Main/WatchedBoxComponents/MovieDetails";
import WatchedMovieList from "./components/Main/WatchedBoxComponents/WatchedMovieList";
import WatchedSummary from "./components/Main/WatchedBoxComponents/WatchedSummary";
import Logo from "./components/Navbar/Logo";
import NavBar from "./components/Navbar/NavBar";
import NumResults from "./components/Navbar/NumResults";
import Search from "./components/Navbar/Search";
import IWatchedMovie from "./Interfaces/IWatchedMovie";
// http://www.omdbapi.com/?apikey=[yourkey]&s=Batman

const KEY = "d2823662";
function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState<IWatchedMovie[]>(() =>
    JSON.parse(localStorage.getItem("WatchedMovie") ?? "[]"),
  );
  const [query, setQuery] = useState("Batman");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);
  function handelSelectMovieId(id: string) {
    setSelectedMovieId((selectedMovieId) =>
      id === selectedMovieId ? null : id,
    );
  }
  function handelCloseMovieDetails() {
    setSelectedMovieId(null);
  }
  function handelSetWatched(movie: IWatchedMovie) {
    setWatched((watched) => [...watched, movie]);
  }
  useEffect(() => {
    localStorage.setItem("WatchedMovie", JSON.stringify(watched));
  }, [watched]);

  function handelDeleteWatchedMovie(id: string) {
    setWatched((watched) => watched.filter((m) => m.imdbID !== id));
  }
  useEffect(() => {
    const controller = new AbortController();
    async function FetchData() {
      try {
        setIsLoading(true);
        setErrorMessage("");
        const res = await fetch(
          ` http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal },
        );
        if (!res.ok) throw new Error("Something Went Wrong");
        const data = await res.json();
        if (data.Response === "False") throw new Error("No Movie Founded");
        setMovies(data.Search);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        setErrorMessage(errorMessage);
      } finally {
        setIsLoading(false);
        setErrorMessage("");
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setErrorMessage("");
      return;
    }
    handelCloseMovieDetails();
    FetchData();
    return function () {
      controller.abort();
    };
  }, [query]);

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <BoxComponent>
          {errorMessage ? (
            <ErrorMessage errorMessage={errorMessage} />
          ) : isLoading ? (
            <Loader />
          ) : (
            <MovieList movies={movies} setSelectedMovie={handelSelectMovieId} />
          )}
        </BoxComponent>
        <BoxComponent>
          {selectedMovieId ? (
            <MovieDetails
              selectedMovieId={selectedMovieId}
              handelCloseMovieDetails={handelCloseMovieDetails}
              handelSetWatched={handelSetWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                handelDeleteWatchedMovie={handelDeleteWatchedMovie}
              />
            </>
          )}
        </BoxComponent>
      </Main>
    </>
  );
}
export default App;
