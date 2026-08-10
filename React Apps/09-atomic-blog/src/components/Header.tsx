import { usePostsStore } from "../store/usePostsStore";
import { Results } from "./Results";
import { SearchPosts } from "./Search";

export function Header() {
  const { clearPosts } = usePostsStore();
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
