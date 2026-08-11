import { usePostsStore } from "../stores/usePostsStore";

export function Results() {
  const posts = usePostsStore((state) => state.posts);
  return <p>🚀 {posts.length} atomic posts found</p>;
}
