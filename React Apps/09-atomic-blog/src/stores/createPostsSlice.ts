import { faker } from "@faker-js/faker";
import type { StateCreator } from "zustand";
import type { StoreState } from "./usePostsStore";

export type Post = {
  title: string;
  body: string;
};

export interface PostsSlice {
  posts: Post[];
  searchQuery: string;
  setPosts: (post: Post) => void;
  clearPosts: () => void;
  setSearchQuery: (search: string) => void;
}

export const createPostsSlice: StateCreator<StoreState, [], [], PostsSlice> = (set) => ({
  posts: Array.from({ length: 30 }, function createRandomPost() {
    return {
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      body: faker.hacker.phrase(),
    };
  }),
  searchQuery: "",
  setPosts: (post: Post) => set((state) => ({ posts: [post, ...state.posts] })),
  clearPosts: () => set({ posts: [] }),
  setSearchQuery: (search: string) => set(() => ({ searchQuery: search })),
});
