import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createArchiveSlice, type ArchiveSlice } from "./createArchiveSlice";
import { createPostsSlice, type PostsSlice } from "./createPostsSlice";

export type { ArchiveSlice } from "./createArchiveSlice";
export type { PostsSlice } from "./createPostsSlice";

export type StoreState = PostsSlice & ArchiveSlice;

export const usePostsStore = create<StoreState>()(
  devtools((...a) => ({
    ...createPostsSlice(...a),
    ...createArchiveSlice(...a),
  })),
);
