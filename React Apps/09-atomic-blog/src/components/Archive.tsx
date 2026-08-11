import { usePostsStore } from "../stores/usePostsStore";

export default function Archive() {
  const archivedPosts = usePostsStore((state) => state.archivedPosts);
  const showArchive = usePostsStore((state) => state.showArchive);
  const setShowArchive = usePostsStore((state) => state.setShowArchive);
  const setPosts = usePostsStore((state) => state.setPosts);

  return (
    <aside>
      <h2>Post archive</h2>
      <button onClick={setShowArchive}>{showArchive ? "Hide archive posts" : "Show archive posts"}</button>

      {showArchive && (
        <ul>
          {archivedPosts.map((post, index) => (
            <li key={`${post.title}-${index}`}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button onClick={() => setPosts(post)}>Add as new post</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
