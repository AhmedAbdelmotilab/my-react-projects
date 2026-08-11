import { faker } from "@faker-js/faker";
import type { StateCreator } from "zustand";
import type { StoreState } from "./usePostsStore";

export type ArchivePost = {
  title: string;
  body: string;
};

export interface ArchiveSlice {
  archivedPosts: ArchivePost[];
  showArchive: boolean;
  setShowArchive: () => void;
}

export const createArchiveSlice: StateCreator<StoreState, [], [], ArchiveSlice> = (set) => ({
  archivedPosts: Array.from({ length: 30000 }, function createRandomPost() {
    return {
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      body: faker.hacker.phrase(),
    };
  }),
  showArchive: false,
  setShowArchive: () => set((state) => ({ showArchive: !state.showArchive })),
});
