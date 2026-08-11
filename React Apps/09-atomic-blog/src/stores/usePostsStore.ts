import { faker } from "@faker-js/faker";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type Post = {
  title: string;
  body: string;
};

export interface PostsStore {
  posts: Post[];
  archivedPosts: Post[];
  showArchive: boolean;
  searchQuery: string;
  setPosts: (post: Post) => void;
  clearPosts: () => void;
  setShowArchive: () => void;
  setSearchQuery: (search: string) => void;
}
export const usePostsStore = create(
  devtools<PostsStore>((set) => ({
    posts: Array.from({ length: 30 }, function createRandomPost() {
      return {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        body: faker.hacker.phrase(),
      };
    }),
    archivedPosts: Array.from({ length: 300 }, function createRandomPost() {
      return {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        body: faker.hacker.phrase(),
      };
    }),
    showArchive: false,
    searchQuery: "",
    setPosts: (post: Post) => set((state) => ({ posts: [post, ...state.posts] })),
    clearPosts: () => set({ posts: [] }),
    setShowArchive: () => set((state) => ({ showArchive: !state.showArchive })),
    setSearchQuery: (search: string) => set(() => ({ searchQuery: search })),
  })),
);
