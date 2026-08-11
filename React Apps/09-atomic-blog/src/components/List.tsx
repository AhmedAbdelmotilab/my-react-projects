import { usePostsStore } from "../stores/usePostsStore";

export function List() {
  const posts = usePostsStore((state) => state.posts);
  const searchQuery = usePostsStore((state) => state.searchQuery);
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) => `${post.title} ${post.body}`.toLowerCase().includes(searchQuery.toLowerCase()))
      : posts;
  return (
    <ul>
      {searchedPosts.map((post, index) => (
        <li key={`${post.title}-${index}`}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
