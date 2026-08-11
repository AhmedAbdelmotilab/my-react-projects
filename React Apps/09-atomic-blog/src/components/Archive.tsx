import { usePostsStore } from "../stores/usePostsStore";

export function Archive() {
  const { archivedPosts, setPosts, showArchive, setShowArchive } = usePostsStore();

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
