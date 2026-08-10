import { faker } from "@faker-js/faker";
import { type SyntheticEvent, useEffect, useState } from "react";
type Post = {
  title: string;
  body: string;
};

type HeaderProps = {
  posts: Post[];
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

type PostsProps = {
  posts: Post[];
};

type AddPostProps = {
  onAddPost: (post: Post) => void;
};

function createRandomPost(): Post {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function App() {
  const [posts, setPosts] = useState<Post[]>(() => Array.from({ length: 30 }, createRandomPost));
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) => `${post.title} ${post.body}`.toLowerCase().includes(searchQuery.toLowerCase()))
      : posts;

  function handleAddPost(post: Post) {
    setPosts((currentPosts) => [post, ...currentPosts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  useEffect(() => {
    document.documentElement.classList.toggle("fake-dark-mode", isFakeDark);
  }, [isFakeDark]);

  return (
    <section>
      <button onClick={() => setIsFakeDark((current) => !current)} className="btn-fake-dark-mode">
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      <Header
        posts={searchedPosts}
        onClearPosts={handleClearPosts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Main posts={searchedPosts} onAddPost={handleAddPost} />
      <Archive onAddPost={handleAddPost} />
      <Footer />
    </section>
  );
}

function Header({ posts, onClearPosts, searchQuery, setSearchQuery }: HeaderProps) {
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

function SearchPosts({ searchQuery, setSearchQuery }: Pick<HeaderProps, "searchQuery" | "setSearchQuery">) {
  return (
    <input
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
      placeholder="Search posts..."
    />
  );
}

function Results({ posts }: PostsProps) {
  return <p>🚀 {posts.length} atomic posts found</p>;
}

function Main({ posts, onAddPost }: PostsProps & AddPostProps) {
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}

function Posts({ posts }: PostsProps) {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}

function FormAddPost({ onAddPost }: AddPostProps) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!body || !title) return;

    onAddPost({ title, body });
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

function List({ posts }: PostsProps) {
  return (
    <ul>
      {posts.map((post, index) => (
        <li key={`${post.title}-${index}`}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

function Archive({ onAddPost }: AddPostProps) {
  const [posts] = useState<Post[]>(() => Array.from({ length: 10_000 }, createRandomPost));
  const [showArchive, setShowArchive] = useState(false);

  return (
    <aside>
      <h2>Post archive</h2>
      <button onClick={() => setShowArchive((shown) => !shown)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul>
          {posts.map((post, index) => (
            <li key={`${post.title}-${index}`}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button onClick={() => onAddPost(post)}>Add as new post</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

function Footer() {
  return <footer>&copy; by The Atomic Blog ✌️</footer>;
}

export default App;
