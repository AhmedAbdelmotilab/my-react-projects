import { usePostsStore } from "../stores/usePostsStore";

export function Results() {
  const { posts } = usePostsStore();
  return <p>🚀 {posts.length} atomic posts found</p>;
}
