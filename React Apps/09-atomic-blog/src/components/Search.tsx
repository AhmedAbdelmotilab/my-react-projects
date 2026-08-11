import { usePostsStore } from "../stores/usePostsStore";

export function SearchPosts() {
  const searchQuery = usePostsStore((state) => state.searchQuery);
  const setSearchQuery = usePostsStore((state) => state.setSearchQuery);
  return (
    <input
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
      placeholder="Search posts..."
    />
  );
}
