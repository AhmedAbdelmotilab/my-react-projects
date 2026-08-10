import { useState, type SyntheticEvent } from "react";
import { usePostsStore } from "../store/usePostsStore";

export function FormAddPost() {
  const { setPosts } = usePostsStore();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!body || !title) return;
    setPosts({ title, body });
    setTitle("");
    setBody("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Post title" />
      <textarea value={body} onChange={(event) => setBody(event.target.value)} placeholder="Post body" />
      <button>Add post</button>
    </form>
  );
}
