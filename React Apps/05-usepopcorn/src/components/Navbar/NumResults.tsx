import IMovie from "../../Interfaces/IMovie";

interface NumResultsProps {
  movies: IMovie[];
}
function NumResults({ movies }: NumResultsProps) {
  return (
    <p className="num-results">
      Found <strong>{movies.length > 0 ? movies.length : 0}</strong> results
    </p>
  );
}
export default NumResults;
