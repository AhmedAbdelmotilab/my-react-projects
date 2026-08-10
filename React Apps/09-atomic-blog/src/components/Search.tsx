import { usePostsStore } from "../store/usePostsStore";

export function SearchPosts() {
  const { searchQuery, setSearchQuery } = usePostsStore();
  return (
    <input
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
      placeholder="Search posts..."
    />
  );
}
