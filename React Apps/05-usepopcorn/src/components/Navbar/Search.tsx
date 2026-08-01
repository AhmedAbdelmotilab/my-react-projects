import { useEffect, useRef } from "react";

interface SearchProps {
  query: string;
  setQuery: (x: string) => void;
}
function Search({ query, setQuery }: SearchProps) {
  const element = useRef<HTMLInputElement>(null);
  useEffect(() => {
    element.current?.focus();
  }, []);

  return (
    <input
      id="search"
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={element}
    />
  );
}
export default Search;
