import { usePostsStore } from "../stores/usePostsStore";
import { Results } from "./Results";
import { SearchPosts } from "./Search";

export function Header() {
  const clearPosts = usePostsStore((state) => state.clearPosts);
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button type="button" onClick={clearPosts}>
          Clear posts
        </button>
      </div>
    </header>
  );
}
